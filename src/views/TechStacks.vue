<template>
  <AuroraBackground class="min-h-[calc(100vh-4.5rem)] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <TechStackGrid />
    </div>
  </AuroraBackground>
</template>

<script setup lang="ts">
import AuroraBackground from '@/components/ui/aurora-background/AuroraBackground.vue'
import TechStackGrid from '@/components/ui/tech-stacks/TechStackGrid.vue'
</script>
