<template>
  <div class="relative w-full min-h-screen overflow-hidden transition-colors duration-500">
    <!-- Sophisticated Background Layer -->
    <div 
      aria-hidden="true" 
      class="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5"></div>
      <div class="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/5"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 blur-[110px] dark:bg-cyan-500/5"></div>
      
      <!-- Subtle Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:radial-gradient(circle,theme(colors.slate.400)_1px,transparent_1px)] [background-size:40px_40px]"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <ProjectShowcase />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectShowcase from '@/components/ui/projects/ProjectShowcase.vue'
</script>
