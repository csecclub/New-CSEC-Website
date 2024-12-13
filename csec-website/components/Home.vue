<template>
    <div class=" flex flex-col items-center">
      
      <!-- Main container -->
      <div class="max-w-4xl w-full px-6 py-10">
        
        <!-- Header section -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          
          <!-- Text section -->
          <div class="mb-6 md:mb-0">
            <h1 class="text-4xl font-extrabold text-white mb-1">CSEC</h1>
            <h3 class="text-xl font-medium text-gray-200 mb-4">UTA's Ethical CyberSecurity Club</h3>
            
            <p class="mb-3">Stay up to date by joining our Discord server!</p>
            <UButton 
              icon="ic:baseline-discord" 
              to="https://discord.gg/gPTZJVCFX8"
              size="lg"
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded shadow-sm transition"
            >
              Join our Discord
            </UButton>
          </div>
          
          <!-- Michi image -->
          <img 
            class="max-w-xs object-scale-down md:ml-6 mt-6 md:mt-0 drop-shadow-lg" 
            src="~/assets/michi.png" 
            alt="Michi Mascot"
          />
        </div>
  
        <!-- Divider -->
        <hr class="my-8 border-gray-300" />
  
        <!-- Additional Links -->
        <h3 class="text-2xl font-semibold mb-4">Check out our other websites!</h3>
        <div class="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <UButton 
            to="https://csecnote.utacsec.com"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow-sm transition"
          >
            CSEC-NOTE
          </UButton>
          <UButton 
            to="https://battleground-uta.vercel.app/"
            class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded shadow-sm transition"
          >
            CTF-Playground
          </UButton>
        </div>
      </div>
    </div>
  </template>
  