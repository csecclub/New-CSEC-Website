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
        <img src="/public/cseclogo.png" class="h-12"></img>
        <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
    </div>
</template>