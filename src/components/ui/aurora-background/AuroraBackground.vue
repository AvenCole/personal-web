<template>
  <section
    :class="cn(
      'aurora-background relative isolate w-full overflow-hidden bg-zinc-50 text-slate-950 dark:bg-zinc-950 dark:text-slate-50',
      props.radialGradient && 'aurora-background--radial',
      props.class,
    )"
    :style="auroraStyles"
  >
    <div aria-hidden="true" class="aurora-background__layer" />
    <div class="relative z-10 w-full">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface AuroraBackgroundProps {
  radialGradient?: boolean
  class?: string
}

const props = withDefaults(defineProps<AuroraBackgroundProps>(), {
  radialGradient: true,
  class: '',
})

const auroraStyles = computed(() => ({
  '--aurora':
    'repeating-linear-gradient(100deg,#38bdf8 0%,#93c5fd 14%,#a5b4fc 28%,#c4b5fd 42%,#38bdf8 56%,#67e8f9 70%,#38bdf8 84%)',
  '--white-gradient':
    'repeating-linear-gradient(100deg,rgba(255,255,255,0.92) 0%,rgba(255,255,255,0.92) 8%,transparent 12%,transparent 18%,rgba(255,255,255,0.9) 24%)',
  '--dark-gradient':
    'repeating-linear-gradient(100deg,rgba(2,6,23,0.92) 0%,rgba(2,6,23,0.92) 8%,transparent 12%,transparent 18%,rgba(2,6,23,0.9) 24%)',
}))
</script>

<style>
.aurora-background__layer {
  position: absolute;
  inset: -14%;
  pointer-events: none;
  opacity: 0.65;
  filter: blur(22px) saturate(135%);
}

.aurora-background__layer::before,
.aurora-background__layer::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--white-gradient), var(--aurora);
  background-size: 220% 220%, 180% 180%;
  background-position: 50% 50%, 0% 50%;
  mix-blend-mode: screen;
  animation: aurora-shift 24s linear infinite;
}

.aurora-background__layer::after {
  opacity: 0.75;
  animation-direction: reverse;
  animation-duration: 32s;
  transform: scale(1.12);
}

.dark .aurora-background__layer::before,
.dark .aurora-background__layer::after {
  background-image: var(--dark-gradient), var(--aurora);
  mix-blend-mode: lighten;
  opacity: 0.86;
}

.aurora-background--radial .aurora-background__layer {
  mask-image: radial-gradient(ellipse at 100% 0%, black 12%, transparent 72%);
}

@keyframes aurora-shift {
  0% {
    background-position: 50% 50%, 0% 50%;
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    background-position: 50% 50%, 100% 50%;
    transform: translate3d(-2%, 2%, 0) scale(1.05);
  }

  100% {
    background-position: 50% 50%, 0% 50%;
    transform: translate3d(0, 0, 0) scale(1);
  }
}
</style>
