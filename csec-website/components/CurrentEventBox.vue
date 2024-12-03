<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import xml2js from 'xml2js';

interface Event {
  title: string;
  link: string;
}

const FeedParser = defineComponent({
  setup() {
    const events = ref<Array<Event>>([]);

    async function fetchFeed() {
      try {
        const response = await axios.get('https://mavengage.uta.edu/events');
        const xml = response.data;

        const parser = new xml2js.Parser();
        let data: any;

        parser.parseString(xml, (err, result) => {
          if (err) {
            return;
          }
          data = result.rss.channel[0];

          events.value = [];
          data.title.forEach((entry: any) => {
            const event: Event = {
              title: entry.$.title,
              link: entry.$.link,
            };
            events.value.push(event);
          });
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
   <div>
      <h1>Upcoming Events</h1>
      <ul>
         <li v-for="(event, index) in events" :key="index">
            {{ event.title }}
            <a :href="event.link">{{ event.title }}</a>
         </li>
      </ul>
   </div>
</template>