<template>
    <UCard class="w-screen h-screen flex flex-col">
        <!-- NavBar acts as a header -->
        <Navbar></Navbar>

        <Home class="flex-grow"></Home>

        <div class="flex-grow"></div>

        <template #footer>
            <Footer></Footer>
        </template>
    </UCard>

</template>