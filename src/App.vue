<template>
  <div class="relative w-full h-screen bg-black">

    <Squares direction="diagonal" :speed="0.5" :squareSize="40" borderColor="#333333" hoverFillColor="#27ff64" />

    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.14)]">
        Welcome to AvenCole
      </h1>
      <div class="flex gap-4 mt-6 pointer-events-auto">
        <button
          class="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
          ABOUT
        </button>
        <button
          class="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
          CONTACT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Squares from './components/Squares.vue'
</script>