
<template>
    <UCard class="w-screen h-screen flex flex-col justify-between overflow-hidden-y overflow-scroll">
        <Navbar />

        <DomainChangeBanner />


        <NuxtPage class=""/>
        <template #footer>
            <Footer />
        </template>
    </UCard>
</template>
