<template>
    <div class="flex flex-col items-center py-12">
      <h2 class="text-3xl font-bold mb-6">Cyber Claw Machine</h2>
      
      <!-- Claw Machine Container -->
      <div class="relative w-full max-w-2xl h-96 bg-blue-900 rounded-xl border-4 border-blue-700 overflow-hidden">
        <!-- Grid pattern background -->
        <div class="absolute inset-0 bg-grid-blue-500/[0.1]"></div>
        
        <!-- Claw mechanism -->
        <div 
            class="absolute transition-all duration-500 -translate-x-1/2"
            :style="{ 
            top: `${clawPosition}%`,
            left: `${clawHorizontalPosition}%`
            }"
        >
            <div class="h-16 w-16 bg-gray-300 rounded-t-full relative">
            <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl">🛸</span>
            </div>
        </div>
  
        <!-- Plushies grid -->
        <div class="absolute bottom-0 w-full h-48 flex justify-around p-4">
          <div
            v-for="plushie in plushies"
            :key="plushie.id"
            class="relative cursor-pointer transition-transform hover:scale-110"
            :class="{ 'scale-125': selectedPlushie === plushie.id }"
            @click="selectPlushie(plushie.id)"
          >
            <img 
              :src="plushie.image" 
              class="w-20 h-20 object-contain"
              :alt="plushie.name"
            />
            <div v-if="plushie.caught" class="absolute inset-0 bg-red-500/50 rounded-lg"></div>
          </div>
        </div>
  
        <!-- Glass effect overlay -->
        <div class="absolute inset-0 bg-white/5 border-b border-blue-400/20"></div>
      </div>
  
      <!-- Controls -->
      <div class="mt-8 flex gap-4 items-center">
        <UButton
          icon="i-heroicons-arrow-left-20-solid"
          @click="moveClaw('left')"
          :disabled="isMoving"
        />
        <UButton
          icon="i-heroicons-arrow-down-20-solid"
          color="red"
          @click="dropClaw"
          :disabled="isMoving"
        >
          Drop Claw!
        </UButton>
        <UButton
          icon="i-heroicons-arrow-right-20-solid"
          @click="moveClaw('right')"
          :disabled="isMoving"
        />
      </div>
  
      <!-- Collected Prizes -->
      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Your Cyber Prizes</h3>
        <div class="flex gap-4">
          <div 
            v-for="prize in caughtPrizes"
            class="w-16 h-16 bg-blue-800/50 rounded-lg p-2"
          >
            <img :src="prize.image" class="w-full h-full object-contain">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Plushie {
    id: number
    name: string
    image: string
    caught: boolean
  }
  
  const plushies = ref<Plushie[]>([
    { id: 1, name: 'Hacker Cat', image: '/images/michi.png', caught: false},
    { id: 2, name: 'Pepe toliet', image: '/images/pepe.webp', caught: false },
    { id: 3, name: 'Tux', image: '/images/Tux.webp', caught: false },
    { id: 4, name: 'Ransomware Raccoon', image: '/images/ransomware-raccoon.png', caught: false },
  ])
  
  const clawPosition = ref(10)
  const isMoving = ref(false)
  const selectedPlushie = ref<number | null>(null)
  const caughtPrizes = ref<Plushie[]>([])
  // Horizontal position state
  const clawHorizontalPosition = ref(20) // Start at first position
  const currentPositionIndex = ref(0)
  const totalPositions = computed(() => plushies.value.length)

  const selectPlushie = (id: number) => {
    selectedPlushie.value = id
  }
  
  
  const moveClaw = (direction: 'left' | 'right') => {
    if (isMoving.value) return
    
    isMoving.value = true
    const positions = plushies.value.length
    
    // Calculate new position index
    if (direction === 'left') {
        currentPositionIndex.value = Math.max(0, currentPositionIndex.value - 1)
    } else {
        currentPositionIndex.value = Math.min(positions - 1, currentPositionIndex.value + 1)
    }

    // Calculate percentage position (for 4 items: 20%, 40%, 60%, 80%)
    clawHorizontalPosition.value = (100 / (positions + 1)) * (currentPositionIndex.value + 1)
    
    // Automatically select plushie under claw
    selectedPlushie.value = plushies.value[currentPositionIndex.value].id
    
    // Enable movement after animation
    setTimeout(() => isMoving.value = false, 500)
  }
  
  const dropClaw = async () => {
    isMoving.value = true
    // Animate claw drop
    clawPosition.value = 80
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check if caught
    if (selectedPlushie.value) {
      const prize = plushies.value.find(p => p.id === selectedPlushie.value)
      if (prize && !prize.caught) {
        prize.caught = true
        caughtPrizes.value.push(prize)
      }
    }
    
    // Reset claw
    clawPosition.value = 10
    selectedPlushie.value = null
    isMoving.value = false
  }
  </script>