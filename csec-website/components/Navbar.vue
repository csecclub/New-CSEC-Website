<script setup lang="ts">
    const links = [
    {
        label: 'Home',
        icon: 'i-heroicons-home',
        to: '/'
    },
    {
        label: 'Officers',
        icon: 'mdi:police-badge-outline',
        to: '/officers'
    }, 
    {
        label: 'Calendar',
        icon: 'material-symbols:calendar-month',
        to: '/calendar'
    }, 
    {
        label: 'Past Events',
        icon: 'material-symbols:calendar-clock',
        to: '/events'
    }, 
    {
        label: 'Sponsors',
        icon: 'octicon:sponsor-tiers-16',
        to: '/sponsors'
    }]
</script>

<!-- Icons to choose from https://icones.js.org/ -->

<template>
    <div class="flex">
        <!-- CSEC logo -->
        <img src="/public/cseclogo.png" class="h-12"></img>
        
        <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800">
            <!-- Custom slots (purpose for mobile) -->
            <template #default="{ link }">
                <div class="flex items-center space-x-2">
                    <!-- Always show icon -->
                    <i :class="link.icon"></i>
                    <!-- Hide text on mobile, show on md and larger screens -->
                    <span class="hidden md:inline group-hover:text-primary relative">{{ link.label }}</span>
                </div>
            </template>

        </UHorizontalNavigation>
    </div>
</template>