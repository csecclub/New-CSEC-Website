<script>
export default {
  name: 'SponsorPage',
  data() {
    return {
      sponsors: [
        { name: 'Corner Universe', image: 'sponsors/corneruniverse.png', link: 'https://corneruniverse.com/', rank: 'silver' },
        { name: 'CSE Department', image: 'sponsors/csedep.png', link: 'https://www.uta.edu/academics/schools-colleges/engineering', rank: 'bronze'},
      ]
    }
  },
  // switch to change color of rank text to show winners!
  methods: {
    getRankClass(rank){
      switch (rank.toLowerCase()) {
        case 'gold':
          return 'text-yellow-500'
        case 'silver':
          return 'text-gray-300'
        case 'bronze':
          return 'text-orange-700'
        default:
          return 'text-white'
      }
    }
  }
}

</script>


<template>
    <!-- Outer container centered in viewport -->
    <div class="max-w-screen-xl mx-auto px-4 py-8">
  
      <!-- UCard takes full width within container -->
      <UCard class="w-full p-4 bg-white dark:bg-gray-800 shadow-md rounded">
        <!-- 
          Flex container:
          - flex-col on mobile
          - md:flex-row on medium+
          - justify-center to center items horizontally
          - space-x-10 for spacing on md+
        -->
        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
          
          <div 
            v-for="(sponsor, index) in sponsors" 
            :key="index"
            class="flex flex-col items-center"
          >
          <!-- clickable links to sponsors page on the image -->
            <a :href="sponsor.link" target="_blank" rel="noopener noreferrer">
              <img
                v-if="sponsor.image"
                :src="sponsor.image"
                :alt="sponsor.name"
                class="w-auto h-64 object-fill object-center transition-transform duration-200 hover:scale-110 hover:opacity-50 "
              />
              <div v-else class="flex items-center justify-center">
                <UAvatar icon="i-heroicons-photo" size="3xl" />
              </div>
            </a>
  
            <h2 class="text-xl font-semibold text-center mt-4">{{ sponsor.name }}</h2>

            <!-- Conditionally color rank text -->
            <h2 
            class="text-xl font-semibold text-center mt-4"
            :class="getRankClass(sponsor.rank)"
            >
              {{ sponsor.rank }}
            </h2>
          </div>
  
        </div>
      </UCard>
    </div>
</template>