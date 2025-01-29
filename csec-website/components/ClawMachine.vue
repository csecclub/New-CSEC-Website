<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-4xl px-6 py-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold">CSEC Claw Machine</h1>
          <UButton to="/" icon="i-heroicons-arrow-left" size="sm">
            Back Home
          </UButton>
        </div>
        
        <div ref="canvasContainer" class="w-full h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Three.js canvas will be inserted here -->
        </div>
  
        <div class="mt-6 flex justify-center gap-4">
          <UButton @click="moveLeft" icon="i-heroicons-arrow-left" />
          <UButton @click="moveForward" icon="i-heroicons-arrow-up" />
          <UButton @click="moveRight" icon="i-heroicons-arrow-right" />
          <UButton @click="dropClaw" color="red" icon="i-heroicons-hand-raised" />
        </div>
  
        <div class="mt-4 text-center">
          <p class="font-medium">Score: {{ score }}</p>
          <UButton class="mt-2" @click="resetGame">Reset Game</UButton>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import * as THREE from 'three'
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
  import { gsap } from 'gsap'
  
  const canvasContainer = ref(null)
  let scene, camera, renderer, controls
  let claw, prizes = []
  let isMoving = false
  const score = ref(0)
  
  // Initialize Three.js scene
  function initScene() {
    // Scene setup
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
    renderer.shadowMap.enabled = true
    canvasContainer.value.appendChild(renderer.domElement)
  
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)
  
    // Camera position
    camera.position.set(0, 5, 5)
    camera.lookAt(0, 0, 0)
  
    // Controls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
  
    // Create machine base
    const baseGeometry = new THREE.BoxGeometry(4, 0.2, 4)
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xff4444 })
    const base = new THREE.Mesh(baseGeometry, baseMaterial)
    base.receiveShadow = true
    scene.add(base)
  
    // Create claw
    createClaw()
    createPrizes()
  }
  
  function createClaw() {
    const clawGroup = new THREE.Group()
    
    // Claw arms
    const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2)
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 })
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial)
    leftArm.position.x = -0.3
    leftArm.rotation.z = Math.PI / 2
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial)
    rightArm.position.x = 0.3
    rightArm.rotation.z = Math.PI / 2
  
    // Claw base
    const baseGeometry = new THREE.BoxGeometry(0.8, 0.1, 0.1)
    const base = new THREE.Mesh(baseGeometry, armMaterial)
    base.position.y = -1
  
    clawGroup.add(leftArm, rightArm, base)
    clawGroup.position.y = 3
    scene.add(clawGroup)
    claw = clawGroup
  }
  
  function createPrizes() {
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
    
    for (let i = 0; i < 4; i++) {
      const material = new THREE.MeshStandardMaterial({ color: colors[i] })
      const cube = new THREE.Mesh(geometry, material)
      cube.castShadow = true
      cube.position.set(
        (Math.random() - 0.5) * 2,
        0.2,
        (Math.random() - 0.5) * 2
      )
      scene.add(cube)
      prizes.push(cube)
    }
  }
  
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  
  // Movement functions
  function moveLeft() {
    if (isMoving) return
    isMoving = true
    gsap.to(claw.position, {
      x: claw.position.x - 1,
      duration: 0.5,
      onComplete: () => (isMoving = false)
    })
  }
  
  function moveRight() {
    if (isMoving) return
    isMoving = true
    gsap.to(claw.position, {
      x: claw.position.x + 1,
      duration: 0.5,
      onComplete: () => (isMoving = false)
    })
  }
  
  function moveForward() {
    if (isMoving) return
    isMoving = true
    gsap.to(claw.position, {
      z: claw.position.z - 1,
      duration: 0.5,
      onComplete: () => (isMoving = false)
    })
  }
  
  function dropClaw() {
    if (isMoving) return
    isMoving = true
    
    gsap.to(claw.position, {
      y: 0.5,
      duration: 1,
      onComplete: () => {
        checkPrizeCollision()
        gsap.to(claw.position, {
          y: 3,
          duration: 1,
          onComplete: () => (isMoving = false)
        })
      }
    })
  }
  
  function checkPrizeCollision() {
    prizes.forEach(prize => {
      if (prize.position.distanceTo(claw.position) < 0.8) {
        score.value += 100
        prize.position.y = 4 // Move prize up with claw
        setTimeout(() => {
          prize.position.set(
            (Math.random() - 0.5) * 2,
            0.2,
            (Math.random() - 0.5) * 2
          )
        }, 2000)
      }
    })
  }
  
  function resetGame() {
    claw.position.set(0, 3, 0)
    prizes.forEach(prize => {
      prize.position.set(
        (Math.random() - 0.5) * 2,
        0.2,
        (Math.random() - 0.5) * 2
      )
    })
    score.value = 0
  }
  
  // Lifecycle hooks
  onMounted(() => {
    initScene()
    animate()
    window.addEventListener('resize', onWindowResize)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onWindowResize)
    if (renderer) {
      renderer.dispose()
    }
  })
  
  function onWindowResize() {
    camera.aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  }
  </script>