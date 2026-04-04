<template>
  <div class="flex min-h-[calc(100vh-80px)] w-full items-start justify-center px-4 pt-10 pb-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl">
      <section class="space-y-5 text-black transition-colors duration-2000 dark:text-white">
        <p class="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">About me</p>
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Aven Cole</h1>
        <p class="text-base leading-8 text-neutral-700 dark:text-neutral-300">
          I’m building a personal space on the web to document ideas, explore design-driven frontend work,
          and keep learning through code.
        </p>
        <p class="text-base leading-8 text-neutral-700 dark:text-neutral-300">
          This site is where I share what I’m making, what I’m studying, and the small experiments that help
          me grow as a developer.
        </p>
      </section>

      <section class="mt-10 space-y-5 transition-colors duration-2000 sm:mt-14">
        <h2 class="text-2xl font-medium text-gray-800 dark:text-neutral-200">What I’m focused on</h2>

        <div class="grid gap-4 sm:grid-cols-2">
          <article class="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-sm transition-colors duration-2000 dark:border-white/10 dark:bg-white/5">
            <h3 class="text-base font-semibold text-black dark:text-white">Frontend craft</h3>
            <p class="mt-2 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              Building interfaces that feel clean, responsive, and intentional across motion, layout, and detail.
            </p>
          </article>

          <article class="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-sm transition-colors duration-2000 dark:border-white/10 dark:bg-white/5">
            <h3 class="text-base font-semibold text-black dark:text-white">Continuous learning</h3>
            <p class="mt-2 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              Using personal projects to practice better structure, stronger UI decisions, and sharper engineering habits.
            </p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
