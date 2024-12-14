<script>
export default {
  name: 'OfficersPage',
  data() {
    return {
      officers: [
        { name: 'Rose', role: 'President @ CSEC', image: 'csecOfficers/HackerCat.png' },
        { name: 'Betim', role: 'Vice President @ CSEC', image: 'csecOfficers/HackerCat.png' },
        { name: 'Christian', role: 'Treasuer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Richard', role: 'Treasure Trainee', image: 'csecOfficers/HackerCat.png' },
        { name: 'Nicole', role: 'Secretary', image: 'csecOfficers/HackerCat.png' },
        { name: 'Rohita', role: 'Fundraising Director', image: 'csecOfficers/HackerCat.png' },
        { name: 'Jeremiah', role: 'Technical Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Brett', role: 'Event Planner', image: 'csecOfficers/HackerCat.png' },
        { name: 'Summer', role: 'Event Coordinator', image: 'csecOfficers/HackerCat.png' },
        { name: 'Buzz', role: 'Social Media Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Gino', role: 'Social Media Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Isabel', role: 'Graphical Design Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Phillip', role: 'CTF Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Josh', role: 'Jr. Web Dev', image: 'csecOfficers/HackerCat.png' },
        { name: 'Tej', role: 'Jr Web Dev', image: 'csecOfficers/HackerCat.png' },
        { name: 'Safal', role: 'Recuritment Officer', image: 'csecOfficers/HackerCat.png' },
        { name: 'Wesly', role: 'MemberShip Officer', image: 'csecOfficers/HackerCat.png' },
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
                <img v-if="officer.image" :src="officer.image" :alt="officer.name" class="w-32 h-32 object-fill object-center" />
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