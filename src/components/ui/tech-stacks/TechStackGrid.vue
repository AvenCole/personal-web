<template>
  <section
    class="relative rounded-4xl border border-slate-200/80 bg-white/72 p-5 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68 sm:p-8">
    <div class="space-y-6 sm:space-y-8">
      <header class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">
          Tech Stacks and Tools Chain
        </p>
      </header>

      <div
        class="rounded-3xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-slate-900/72 sm:px-6">
        <div class="relative overflow-hidden" style="height: 80px">
          <LogoLoop :logos="loopLogos" :speed="120" direction="left" :logoHeight="42" :gap="36" :pauseOnHover="true"
            :scaleOnHover="true" :fadeOut="true" ariaLabel="Technology stacks logo loop" />
        </div>
      </div>

      <AnimateGrid :cards="cards" :compact="true" class="mx-auto max-w-3xl" />
    </div>
  </section>
</template>

<script setup lang="ts">
import LogoLoop from '@/components/LogoLoop.vue'
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

const loopLogos = cards.map(({ title, logo }) => ({
  src: logo,
  alt: title,
  title,
}))
</script>
