<script>
export default {
  name: 'OfficersPage',
  data() {
    return {
      officers: [
        { name: 'Rose', role: 'President @ CSEC', image: 'csecOfficers/Rose.jpg' },
        { name: 'Betim', role: 'Vice President @ CSEC', image: 'csecOfficers/Betim.jpg' },
        { name: 'Rohita', role: 'Secretary', image: 'csecOfficers/HackerCat.png' },
        { name: 'Richard', role: 'Treasuer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Nafisa', role: 'Research Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Jeremiah', role: 'Research Officer', image: 'csecOfficers/Jeremiah.jpg' },
        { name: 'Tiara', role: 'Social Media Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Summer Barnes', role: 'Event Coordinator', image: 'csecOfficers/SummerBarnes.jpeg' },
        { name: 'Tam', role: 'CTF Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Phillip', role: 'CTF Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Maxwell', role: 'Webmaster', image: 'csecOfficers/HackerCat.png' },
        { name: 'Luke', role: 'Recuritment Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Grace', role: 'Design Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Tobe', role: 'Membership Officer', image: 'csecOfficers/HackerCat.png' },
      ]
    }
  }
}
</script>


<template>
  <div class="">

    <!-- Want a grid structure for our officers using the data above to give a nice presentation feel -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <!-- UCard is a perfect way to give an officer their own cards which is cool! -->
        <UCard 
        v-for="(officer, index) in officers" 
        :key="index" 
        class=" items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded"
        >
            <!-- Officer rendered data here -->
            <div class="h-32 rounded-full flex flex-col items-center justify-center mb-4">
                <img v-if="officer.image" :src="officer.image" :alt="officer.name" class="w-32 h-32 object-fill object-center rounded-full" />
                <div v-else class="flex items-center justify-center">
                    <UAvatar icon="i-heroicons-photo" size="3xl" />
                </div>
            </div>
            
            <h2 class="text-xl font-semibold text-center">{{ officer.name }}</h2>
            
            <p class="text-gray-500 dark:text-gray-300 text-center">{{ officer.role }}</p>
        </UCard>
    </div>
  </div>
</template>