<template>
  <div class="dark:bg-gray-800 bg-white min-h-screen w-full theme-transition flex flex-col">
    <nav
      class="navbar sticky top-0 z-50 w-full bg-white/30 dark:bg-black/30 backdrop-filter backdrop-blur-lg shadow-sm text-black dark:text-white">
      <Navbar />
    </nav>

    <main class="flex-1 overflow-x-hidden text-black dark:text-white dark:bg-gray-800">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<style>
/* Page transition: fade + slide up */
.page-enter-active {
  animation: page-in 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.page-leave-active {
  animation: page-out 0.25s cubic-bezier(0.55, 0, 1, 0.45) both;
}

@keyframes page-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes page-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
