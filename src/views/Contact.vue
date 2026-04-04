<template>
  <div class="min-h-screen bg-black text-white px-6 py-16 md:px-12">
    <div class="mx-auto flex max-w-4xl flex-col gap-10">
      <button
        class="w-fit rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white hover:text-white cursor-pointer"
        @click="router.push('/')">
        BACK HOME
      </button>

      <section class="space-y-6">
        <p class="text-sm uppercase tracking-[0.35em] text-white/50">Contact</p>
        <h1 class="text-4xl font-extrabold tracking-tight md:text-6xl">Let’s connect</h1>
        <p class="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          If you want to talk about collaboration, product ideas, or design-driven frontend work, this is
          the place to start.
        </p>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p class="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">Email</p>
          <p class="text-white/75 leading-7">your@email.com</p>
        </div>
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p class="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">Social</p>
          <p class="text-white/75 leading-7">Add your GitHub, LinkedIn, or other preferred contact links here.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
