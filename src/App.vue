<template>
  <div class="dark:bg-gray-800 bg-white h-full w-full theme-transition">
    <!-- TODO: Refactor Navbar -->
    <nav
      class="navbar sticky top-0 z-50 w-full bg-white/30 dark:bg-black/30 backdrop-filter backdrop-blur-lg shadow-sm text-black dark:text-white"
    >
      <Navbar />
    </nav>

    <main class="mt-1 text-black dark:text-white dark:bg-gray-800">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>
