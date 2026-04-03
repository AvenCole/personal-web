<template>
  <div class="navbar shadow-sm text-black dark:text-white">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        <ul tabindex="0"
          class="menu menu-sm dropdown-content text-black dark:text-white dark:bg-black bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>

          <li>
            <a @click="toast.info('Coming soon', { position: 'topCenter' })">
              Blogs
            </a>
          </li>

          <li>
            <a @click="toast.info('Coming soon', { position: 'topCenter' })">
              Courses
            </a>
          </li>

          <li>
            <a @click="toast.info('Coming soon', { position: 'topCenter' })">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Nav -->
    <div class="navbar-center hidden lg:flex">
      <DockNav />
    </div>

    <!-- End -->
    <div class="navbar-end">
      <ThemeSwap />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../hooks/useToast'

const toast = useToast()
</script>