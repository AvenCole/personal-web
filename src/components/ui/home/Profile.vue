<template>
  <header class="flex items-center gap-x-3">
    <section class="avatar avatar-online avatar-placeholder">
      <div class="ring-primary ring-offset-base-100 w-32 rounded-full ring-2 ring-offset-2">
        <img src="/Avatar.png" />
      </div>
    </section>
    <section class="grow">
      <h1 class="sm:text-7xl text-4xl font-medium text-gray-800 dark:text-neutral-200">
        Aven Cole
      </h1>
      <TextType as="p" class-name="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300" :text="[
        'To see without eyes',
        'To build beyond boundaries',
        'To create through code'
      ]" :typingSpeed="75" :pauseDuration="1500" :showCursor="true"
        :cursor-class-name="'text-neutral-600 dark:text-neutral-300'" />
    </section>
  </header>
  <article class="mt-8">
    <Paragraph>
      I'm AvenCole, a student developer. My expertise spans frontend engineering, backend systems, cross-platform
      applications, and
      blockchain development.
    </Paragraph>
    <Paragraph class="mt-3">
      I build with technologies like Rust, TypeScript, Go, React, Vue, Tauri, etc.
    </Paragraph>
    <Paragraph class="mt-3">
      I help transform ideas into polished products by balancing rapid prototyping with clean, maintainable
      code—optimizing both velocity and quality.
    </Paragraph>
  </article>
</template>

<script setup lang="ts">

import TextType from '@/components/TextType.vue'
import Paragraph from './Paragraph.vue';
</script>
