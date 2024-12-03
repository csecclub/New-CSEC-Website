<script setup lang="ts">
</script>

<template>
    <UCard >
        <Navbar></Navbar>
        
        <CurrentEventBox></CurrentEventBox>

        <div class="flex-grow"></div>

        <template #footer>
            <Footer></Footer>
        </template>
    </UCard>
</template>