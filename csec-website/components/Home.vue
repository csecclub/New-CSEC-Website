
<template>
    <!-- overall want a col based structure -->
    <div class="flex-col">

        <!-- Group these two elements together -->
        <div class="flex justify-between">
            
            <div class="py-5">
                <h1 class="text-4xl py-1">CSEC</h1>
                <h3 class="text-xl">UTA's Ethical CyberSecurity Club</h3>


                <!-- up to date button -->
                <div class="">
                    <p class="py-2">
                        Stay up to date by joinging our discord server!
                    </p>
                    
                    <!-- Discord Link button -->
                    <!-- https://ui.nuxt.com/components/button -->
                    <UButton 
                        icon="ic:baseline-discord" 
                        to="https://discord.gg/gPTZJVCFX8"
                        size="lg"
                        >
                        Join our Discord
                    </UButton>
                </div>

                
            </div>
            
            
            <!-- Have michi above up to date button -->
            <!-- Note normal tailwind should be targeted to mobile, md focuses on desktop -->
            <img class=" float-right my-4 max-w-xs object-scale-down " src="~/assets/michi.png" />
        </div>


        <!-- Links to our other sites! -->
        <h3 class="py-2"> Check out our other websites! </h3>
        <div class="flex">
            <UButton to="https://csecnote.utacsec.com">CSEC-NOTE</UButton>
            <div class="px-4"></div>
            <UButton to="https://battleground-uta.vercel.app/">CTF-Playground</UButton>
        </div>

    </div>
</template>