<template>
  <section class="py-12 md:py-16 px-4 md:px-0">
    <header class="mb-14 border-b border-slate-200 dark:border-white/10 pb-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="max-w-2xl space-y-4">
          <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <p class="text-xs font-bold uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400">
              Selected Projects
            </p>
          </div>
        </div>

        <div class="flex gap-8 text-sm">
          <div class="space-y-1">
            <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Focus</p>
            <p class="font-semibold text-slate-800 dark:text-slate-200">Full-stack / AI / BlockChain</p>
          </div>
          <div class="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
          <div class="space-y-1">
            <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Stack</p>
            <p class="font-semibold text-slate-800 dark:text-slate-200">Rust / TS</p>
          </div>
        </div>
      </div>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <a v-for="(project, idx) in projects" :key="project.name" ref="cardRefs" :href="project.href ?? undefined"
        :target="project.href ? '_blank' : undefined" :rel="project.href ? 'noreferrer noopener' : undefined"
        class="hover-3d cursor-pointer" :class="[
          idx === 0 ? 'md:col-span-8' : '',
          idx === 1 ? 'md:col-span-4' : '',
          idx === 2 ? 'md:col-span-12' : '',
        ]">
        <div
          class="card h-full border border-slate-200/60 dark:border-white/10 shadow-sm backdrop-blur-3xl overflow-hidden rounded-[2.5rem]">
          <div class="card-body p-8 md:p-10 flex flex-col h-full">

            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm border border-black/5 dark:border-white/5"
                  :class="project.theme.iconWrapper">
                  <Icon :icon="project.icon" class="text-xl" :class="project.theme.iconText" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {{ project.category }}
                </span>
              </div>

              <div v-if="project.metric"
                class="rounded-full bg-black/5 dark:bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/10">
                {{ project.metric }}
              </div>
            </div>

            <div class="space-y-4 mb-10">
              <h3 class="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {{ project.name }}
              </h3>
              <p class="text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
                {{ project.summary }}
              </p>
            </div>

            <div
              class="mt-auto pt-6 flex flex-wrap items-end justify-between gap-6 border-t border-slate-100 dark:border-white/5">
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.stack" :key="tag"
                  class="rounded-xl border border-slate-200/60 bg-white/60 dark:bg-slate-800/60 dark:border-white/10 px-3 py-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {{ project.note }}
                </span>
                <div v-if="project.href"
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                  <Icon icon="ri:arrow-right-up-line" class="text-lg" />
                </div>
                <div v-else
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 border border-slate-200 dark:border-white/5">
                  <Icon icon="ri:lock-line" class="text-lg" />
                </div>
              </div>
            </div>

          </div>
        </div>


        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import gsap from 'gsap'

interface ProjectTheme {
  iconWrapper: string
  iconText: string
}

interface ProjectCard {
  name: string
  icon: string
  category: string
  metric: string
  summary: string
  stack: string[]
  note: string
  href?: string
  theme: ProjectTheme
}

const cardRefs = ref<HTMLElement[]>([])

const projects: ProjectCard[] = [
  {
    name: 'HBFU-EduQuery',
    icon: 'ri:graduation-cap-line',
    category: 'Campus Ecosystem',
    metric: '2,500+ Active Users',
    summary: 'A WeChat mini program for everyday academic services, unifying fragmented campus systems into a seamless experience.',
    stack: ['uni-app', 'Rust', 'Axum', 'Vue 3'],
    note: 'Live Production',
    href: 'https://github.com/AvenCole/HBFU-EduQuery',
    theme: {
      iconWrapper: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20',
      iconText: 'text-emerald-600 dark:text-emerald-400'
    }
  },
  {
    name: 'ChainCredit',
    icon: 'ri:bank-card-line',
    category: 'Fintech Innovation',
    metric: '🏆 Innovation Award · 2025',
    summary: 'A desktop system combining AI-driven scoring with on-chain credit verification for transparent and automated evaluation.',
    stack: ['Rust', 'React', 'Tauri', 'Solana', 'DeepSeek'],
    note: 'Hebei Bank Cup (Group A)',
    href: 'https://github.com/AvenCole/ChainCredit',
    theme: {
      iconWrapper: 'bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20',
      iconText: 'text-amber-600 dark:text-amber-400'
    }
  },
  {
    name: 'UniEngine AI Platform',
    icon: 'ri:brain-line',
    category: 'Enterprise AI',
    metric: 'Distributed RAG · Multi-Channel',
    summary: 'A full-stack AI knowledge platform for universities, integrating RAG retrieval, multi-tenant architecture, and multi-channel delivery with real-time analytics.',
    stack: ['Rust', 'Axum', 'PostgreSQL', 'Bun', 'LLM', 'RAG'],
    note: 'Private Enterprise System',
    theme: {
      iconWrapper: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20',
      iconText: 'text-indigo-600 dark:text-indigo-400'
    }
  }
]

onMounted(() => {
  gsap.from(cardRefs.value, {
    y: 50,
    opacity: 0,
    duration: 1.0,
    stagger: 0.12,
    ease: 'power4.out',
    clearProps: 'all'
  })
})
</script>
