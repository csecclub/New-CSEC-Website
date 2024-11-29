<script setup lang="ts">
    const links = [{
        label: 'Officers',
        icon: 'i-heroicons-home',
        to: '/officers'
    }, 
    {
        label: 'Calendar',
        icon: 'i-heroicons-home',
        to: '/calendar'
    }, 
    {
        label: 'Past Events',
        icon: 'i-heroicons-chart-bar',
        to: '/events'
    }, 
    {
        label: 'Sponsors',
        icon: 'i-heroicons-command-line',
        to: '/sponsors'
    }]
</script>

<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>