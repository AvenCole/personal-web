<template>
  <div :class="cn('animate-grid relative block w-full', props.class)">
    <div
      class="animate-grid__surface relative grid w-full max-w-full items-stretch justify-center gap-3 sm:gap-4"
      :style="gridStyles"
    >
      <div
        v-for="(item, index) in props.cards"
        :key="item.title"
        :class="cardClass(index)"
        :style="{ zIndex: activeIndex === index ? props.cards.length + 1 : index + 1 }"
        @mouseenter="activeIndex = index"
        @mouseleave="activeIndex = null"
        @focusin="activeIndex = index"
        @focusout="activeIndex = null"
      >
        <component
          :is="item.href ? 'a' : 'div'"
          :href="item.href || undefined"
          :target="item.href ? '_blank' : undefined"
          :rel="item.href ? 'noreferrer' : undefined"
          class="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[inherit]"
          :aria-label="item.title"
          :title="item.title"
        >
          <slot name="logo" :card="item" :index="index">
            <img
              class="mx-auto h-10 w-10 object-contain sm:h-12 sm:w-12"
              :src="item.logo"
              :alt="item.title"
            />
          </slot>
          <span
            class="text-center text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-300 sm:text-[11px]"
          >
            {{ item.title }}
          </span>
        </component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type CSSProperties } from 'vue'
import { cn } from '@/lib/utils'

interface AnimateGridCard {
  logo: string
  title: string
  href?: string
}

interface Props {
  cards: AnimateGridCard[]
  class?: string
  columns?: number
  perspective?: number
  rotateX?: number
  rotateY?: number
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  columns: 4,
  perspective: 1100,
  rotateX: -4,
  rotateY: -12,
})

const activeIndex = ref<number | null>(null)

const gridStyles = computed<CSSProperties>(() => ({
  gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
  transform: `perspective(${props.perspective}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg)`,
  transformStyle: 'preserve-3d',
}))

function isAdjacent(index: number) {
  if (activeIndex.value === null) {
    return false
  }

  const active = activeIndex.value
  const sameRow = Math.floor(index / props.columns) === Math.floor(active / props.columns)
  const horizontal = Math.abs(index - active) === 1 && sameRow
  const vertical = Math.abs(index - active) === props.columns

  return horizontal || vertical
}

function cardClass(index: number) {
  return cn(
    'animate-grid__card',
    activeIndex.value === index && 'animate-grid__card--active',
    activeIndex.value !== index && isAdjacent(index) && 'animate-grid__card--adjacent',
  )
}
</script>

<style>
.animate-grid__surface::before {
  content: '';
  position: absolute;
  inset: -10%;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(circle at center, rgba(14, 165, 233, 0.18) 0%, rgba(255, 255, 255, 0) 68%);
}

.dark .animate-grid__surface::before {
  background: radial-gradient(circle at center, rgba(56, 189, 248, 0.16) 0%, rgba(15, 23, 42, 0) 72%);
}

.animate-grid__card {
  position: relative;
  min-height: 7.75rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 1.4rem;
  padding: 1rem 0.75rem;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(20px);
  box-shadow:
    0 18px 40px -30px rgba(15, 23, 42, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;
}

.dark .animate-grid__card {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(15, 23, 42, 0.75);
  box-shadow:
    0 20px 45px -32px rgba(0, 0, 0, 0.85),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.animate-grid__card img {
  opacity: 0.84;
  filter: saturate(0.96);
  transition:
    transform 180ms ease,
    opacity 180ms ease,
    filter 180ms ease;
}

.animate-grid__card:hover img,
.animate-grid__card--active img {
  opacity: 1;
  filter: saturate(1.08);
  transform: scale(1.04);
}

.animate-grid__card--adjacent {
  border-color: rgba(14, 165, 233, 0.28);
  transform: translate3d(-4px, -4px, 0) scale(1.03);
  box-shadow:
    0 24px 44px -28px rgba(14, 165, 233, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.68);
}

.dark .animate-grid__card--adjacent {
  border-color: rgba(125, 211, 252, 0.22);
  box-shadow:
    0 24px 44px -28px rgba(14, 165, 233, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.animate-grid__card--active {
  border-color: rgba(14, 165, 233, 0.42);
  background: rgba(255, 255, 255, 0.94);
  transform: translate3d(-12px, -12px, 18px) scale(1.08);
  box-shadow:
    0 30px 62px -28px rgba(14, 165, 233, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.dark .animate-grid__card--active {
  border-color: rgba(125, 211, 252, 0.34);
  background: rgba(2, 6, 23, 0.94);
  box-shadow:
    0 30px 62px -28px rgba(14, 165, 233, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

@media (max-width: 640px) {
  .animate-grid__card {
    min-height: 6.5rem;
    border-radius: 1.1rem;
    padding: 0.85rem 0.5rem;
  }

  .animate-grid__card--active {
    transform: translate3d(-8px, -8px, 12px) scale(1.06);
  }
}
</style>
