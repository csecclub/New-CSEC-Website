<script setup lang="ts">
const items = [
    {
        src: 'csecPastEvents/bashscript1.jpg',
        description: 'Bash Scripting Workshop: learn to automate tasks, manipulate files, and use a unix terminal efficiently!'
    },
    {
        src: 'csecPastEvents/betim1.jpg',
        description: 'Introductory workshop to Sub-GHz hacking with the Flipper Zero'
    },
    {
        src: 'csecPastEvents/hazel1.jpg',
        description: 'Interactive hands-on Splunk Lab Workshop with UTA Alumni Hazel Miranda'
    },
    {
        src: 'csecPastEvents/hazel2.jpg',
        description: 'Interactive hands-on Splunk Lab Workshop with UTA Alumni Hazel Miranda'
    },
    {
        src:  'csecPastEvents/intromeeting1.jpg',
        description: 'Cybersecurity Clubs First meeting Fall 2024'
    },
    {
        src: 'csecPastEvents/intromeeting2.jpg',
        description: 'Cybersecurity Clubs First meeting Fall 2024'
    },
    {
        src: 'csecPastEvents/tanium1.jpg',
        description: 'Cybersecurity with Tanium, a top firm in the field of Cybersecurity and IT systems management'
    },    
]

const carouselRef = ref()

onMounted(() => {
    console.log(carouselRef.value) // Should not be undefined
    if (!carouselRef.value) return;

    setInterval(() => {
        if (!carouselRef.value) return;

        // if at end of pages rotate to the first one
        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }
        
        // go to next page
        carouselRef.value.next()
    }, 5500 /*5 1/2 sec*/)
})
</script>

<template>
    <div class="w-full max-w-5xl mx-auto">
        <UCarousel 
            ref="carouselRef"
            v-slot="{ item }" 
            :items="items" 
            :ui="{ item: 'basis-full' }" 
            class="w-full rounded-lg overflow-hidden"
        > 
            <div>
                <img :src="item.src" class="w-full h-auto object-cover" draggable="false">
                
                <p class="text-lg my-4">{{ item.description }}</p>
            </div>
        </UCarousel>
    </div>
</template>