
<template>
    <div class="flex">
        <div class="flex-col m-4">
            <h1 class="text-3xl">CSEC</h1>
            <h3 class="text-xl">UTA's Ethical CyberSecurity Club</h3>
        </div>
        <img class="flex self-end" src="~/assets/michi.png" />
    </div>
    
    
        <p>Stay up to date by joinging our discord server!</p>
        
        <!-- Discord Link button -->
        <!-- https://ui.nuxt.com/components/button -->
        <UButton 
            icon="ic:baseline-discord" 
            to="https://discord.gg/gPTZJVCFX8"
            size="lg"
            >
            Join our Discord
        </UButton>
    
    
        <h3> Check out our other websites! </h3>
        <ul>
            <li><NuxtLink to="https://csecnote.utacsec.com">CSEC-Note</NuxtLink></li>
            <li><NuxtLink to="https://battleground-uta.vercel.app/">CTF-Playground</NuxtLink></li>
        </ul>
</template>