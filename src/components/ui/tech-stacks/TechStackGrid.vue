<template>
  <section
    class="relative rounded-4xl border border-slate-200/80 bg-white/72 p-5 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68 sm:p-8">
    <AnimateGrid :cards="cards" class="mx-auto max-w-4xl" />
  </section>
</template>

<script setup lang="ts">
import AnimateGrid from '@/components/ui/animate-grid/AnimateGrid.vue'

const cards = [
  { title: 'Rust', logo: '/imgs/rust.svg' },
  { title: 'TypeScript', logo: '/imgs/typescript.svg' },
  { title: 'Go', logo: '/imgs/go.svg' },
  { title: 'Tauri', logo: '/imgs/tauri.svg' },
  { title: 'React', logo: '/imgs/react.svg' },
  { title: 'Vue', logo: '/imgs/vue.svg' },
  { title: 'Node.js', logo: '/imgs/nodejs.svg' },
  { title: 'Bun', logo: '/imgs/bun.svg' },
  { title: 'Git', logo: '/imgs/git.svg' },
  { title: 'GitHub', logo: '/imgs/github.svg' },
  { title: 'Docker', logo: '/imgs/docker.svg' },
  { title: 'shadcn/ui', logo: '/imgs/shadcn.svg' },
  { title: 'daisyUI', logo: '/imgs/daisyui.svg' },
  { title: 'Material UI', logo: '/imgs/materialui.svg' },
  { title: 'Solana', logo: '/imgs/solana.svg' },
  { title: 'Ethereum', logo: '/imgs/ethereum.svg' },
]
</script>
