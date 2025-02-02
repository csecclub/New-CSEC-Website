<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import xml2js from 'xml2js';

interface Event {
  title: string;
  description: string;
  link: string;
}

const CLUB_KEYWORDS = [
  'cybersecurity club',
  'cyber security club',
  'csec',
  'CSEC',
  'Cybersecurity club',
  'CyberSecurity club',
  'CyberSecurity Club',
]

const FeedParser = defineComponent({
  setup() {
    const events = ref<Array<Event>>([]);

    
    function isClubEvent(event: Event): boolean {
      const lowerTitle = event.title.toLocaleLowerCase();
      const lowerDescription = event.description.toLocaleLowerCase();

      return CLUB_KEYWORDS.some(keyword =>
        lowerTitle.includes(keyword) || lowerDescription.includes(keyword)
      );
    }

    async function fetchFeed() {
      try {
        const response = await axios.get('https://mavengage.uta.edu/events.rss');
        const xml = response.data;

        const parser = new xml2js.Parser();

        parser.parseString(xml, (err, result) => {
          if (err) {
            console.error('XML parsing error:', err);
            return;
          }
          
          const channel = result.rss.channel[0];
          const items = channel.item || [];

          // map itme
          events.value = items.map((item: any) => ({
            title: item.title?.[0] || 'no title',
            description: item.description?.[0] || '',
            link: item.link?.[0] || '#'
          }))
          .filter(isClubEvent);
          
        });
      } catch (error) {
        console.error('Error fetching feed:', error);
      }
    }

    fetchFeed();

    return { events };
  },
});

export default FeedParser;
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      Upcoming Cybersecurity Club Events
    </h1>

    <div v-if="events.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(event, index) in events" 
        :key="index"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-md transition-shadow duration-300 p-6"
      >
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {{ event.title }}
          </h2>

          <div class="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300" 
               v-html="event.description">
          </div>

          <UButton
            :to="event.link"
            target="_blank"
            color="primary"
            variant="solid"
            class="mt-4 w-full"
            label="View Event Details"
            icon="i-heroicons-arrow-right-20-solid"
            trailing
          />
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-500 dark:text-gray-400 text-lg">
        No upcoming events found. Check back later!
      </p>
    </div>
  </div>
</template>

