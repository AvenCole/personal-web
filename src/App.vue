<template>
  <div class="w-full h-screen flex items-center justify-center">
    <Squares direction="diagonal" :speed="0.5" :squareSize="40" borderColor="#333333" hoverFillColor="#27ff64" />
  </div>
</template>

<script setup lang="ts">
import Squares from './components/Squares.vue'
</script>