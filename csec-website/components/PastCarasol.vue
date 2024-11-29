<script setup lang="ts">
const items = [
    'csecPastEvents/bashscript1.jpg',
    'csecPastEvents/betim1.jpg',
    'csecPastEvents/hazel1.jpg',
    'csecPastEvents/hazel2.jpg',
    'csecPastEvents/intromeeting1.jpg',
    'csecPastEvents/intromeeting2.jpg',
    'csecPastEvents/sabre1.jpg',
    'csecPastEvents/tanium1.jpg',
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        // if at end of pages rotate to the first one
        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }
        
        // go to next page
        carouselRef.value.next()
    }, 3000 /*3 sec*/)
})
</script>

<template>
    <div class="w-full max-w-6xl mx-auto">
        <UCarousel 
            ref="carouselRef"
            v-slot="{ item }" 
            :items="items" 
            :ui="{ item: 'basis-full' }" 
            class="w-full rounded-lg overflow-hidden"
        > 
    
            <img :src="item" class="w-full h-auto object-cover" draggable="false">
        </UCarousel>
    </div>
</template>