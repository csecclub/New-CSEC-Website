<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const currentYear = new Date().getFullYear();
        return {
            currentYear,
        };
    },
});

</script>

<template>
    <footer class="w-full mt-auto py-4 flex flex-col space-x-3 items-center">
        <div class="h-8 flex space-x-3 ">
            <!-- its the official CSEC -->
            <p>CSEC &copy; {{ currentYear }} </p>
            <!-- Ppl can email us thru here -->
            <p>
                Contact: csecclub@proton.me
            </p>
    
            <!-- social links -->
             <!-- discord -->
            <UButton 
            icon="ic:baseline-discord" 
            to="https://discord.gg/gPTZJVCFX8"
            size="sm"
            :ui="{ rounded: 'rounded-full' }"
            >
            </UButton>
            <!-- instagram -->
            <UButton 
            icon="mdi:instagram" 
            to="https://www.instagram.com/uta.csec/"
            size="sm"
            :ui="{ rounded: 'rounded-full' }"
            >
            </UButton>
            <!-- Mavorgs -->
            <UButton 
            icon="basil:university-outline" 
            to="https://mavorgs.campuslabs.com/engage/organization/csec"
            size="sm"
            :ui="{ rounded: 'rounded-full' }"
            >
            </UButton>
    
            
        </div>
    </footer>
</template>