<script setup lang="ts">
    const links = [{
    label: 'Officers',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
    }, {
    label: 'Calendar',
    icon: 'i-heroicons-calendar',
    to: '/getting-started/installation'
    }, {
    label: 'Past Events',
    icon: 'i-heroicons-chart-bar',
    to: '/components/horizontal-navigation'
    }, {
    label: 'Sponsors',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
    }]
</script>

<template>
    <UHorizontalNavigation :links="links" class="navbar" />
</template>

<style>

</style>