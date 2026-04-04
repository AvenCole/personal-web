<template>
  <div class="relative w-full h-screen bg-black">
    <div class="w-full h-full relative">
      <Squares direction="diagonal" :speed="0.4" :squareSize="40" borderColor="#333333" hoverFillColor="#27ff64" />
    </div>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none gap-3">
      <TrueFocus sentence="Aven Cole" :manualMode="false" :blurAmount="5" borderColor="green" :animationDuration="2"
        :pauseBetweenAnimations="1" />


      <TextType class="text-lg md:text-2xl text-gray-400 mt-4" :text="[
        'To see without eyes',
        'To build beyond boundaries',
        'To create through code'
      ]" :typingSpeed="75" :pauseDuration="1500" :showCursor="true" />

      <div class="flex gap-4 mt-6 pointer-events-auto">
        <button
          class="px-8 py-3 rounded-full bg-white text-black font-medium cursor-pointer hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          @click="router.push('/about')">
          ABOUT
        </button>
        <button
          class="px-8 py-3 rounded-full border border-white/30 text-white font-medium cursor-pointer hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          @click="router.push('/contact')">
          CONTACT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import TextType from '@/components/TextType.vue';
import Squares from '@/components/Squares.vue';
import TrueFocus from '@/components/TrueFocus.vue';

const router = useRouter()
</script>
