<template>
  <Dock class="mb-6">
    <DockIcon class="group flex flex-row items-center">
      <div class="tooltip tooltip-bottom">
        <div class="tooltip-content dark:bg-white">
          <div class="animate-bounce dark:text-orange-400 -rotate-10 text-2xl font-black text-blue-600">
            Home
          </div>
        </div>
        <Icon icon="ic:home"
          class="text-blue-500 dark:text-blue-200 text-4xl opacity-70 group-hover:text-orange-500 transition-opacity"
          @click="() => router.push('/')" />
      </div>
    </DockIcon>
    <DockSeparator />
    <DockIcon class="group flex flex-row items-center">
      <div class="tooltip tooltip-bottom">
        <div class="tooltip-content dark:bg-white">
          <div class="animate-bounce dark:text-orange-400 -rotate-10 text-2xl font-black text-blue-600">
            Tech Stacks
          </div>
        </div>

        <Icon icon="material-symbols:code"
          class="text-blue-500 dark:text-blue-200 text-4xl opacity-70 group-hover:text-orange-500 transition-opacity"
          @click="() => toast.info('Coming soon', { title: 'Coming soon' })" />
      </div>
    </DockIcon>
    <DockSeparator />
    <DockIcon class="group flex flex-row items-center">
      <div class="tooltip tooltip-bottom">
        <div class="tooltip-content dark:bg-white">
          <div class="animate-bounce dark:text-orange-400 -rotate-10 text-2xl font-black text-blue-600">
            Projects
          </div>
        </div>
        <Icon icon="material-symbols:folder-code"
          class="text-blue-500 dark:text-blue-200 text-4xl opacity-70 group-hover:text-orange-500 transition-opacity"
          @click="() => toast.info('Coming soon', { title: 'Coming soon' })" />
      </div>
    </DockIcon>
    <DockSeparator />
    <DockIcon class="group flex flex-row items-center">
      <div class="tooltip tooltip-bottom">
        <div class="tooltip-content dark:bg-white">
          <div class="animate-bounce dark:text-orange-400 -rotate-10 text-2xl font-black text-blue-600">
            Honors
          </div>
        </div>
        <Icon icon="material-symbols:workspace-premium"
          class="text-blue-500 dark:text-blue-200 text-4xl opacity-70 group-hover:text-orange-500 transition-opacity"
          @click="() => toast.info('Coming soon', { title: 'Coming soon' })" />
      </div>
    </DockIcon>
    <DockSeparator />
    <DockIcon class="group flex flex-row items-center">
      <div class="tooltip tooltip-bottom">
        <div class="tooltip-content dark:bg-white">
          <div class="animate-bounce dark:text-orange-400 -rotate-10 text-2xl font-black text-green-600">
            Contact
          </div>
        </div>
        <Icon icon="material-symbols:mail"
          class="text-green-500 dark:text-green-200 text-4xl group-hover:text-orange-500 opacity-70 transition-opacity"
          @click="() => router.push('/contact')" />
      </div>
    </DockIcon>
  </Dock>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { useToast } from '@/hooks/useToast'
import Dock from '@/components/ui/dock/Dock.vue'
import DockIcon from '@/components/ui/dock/DockIcon.vue'
import DockSeparator from '@/components/ui/dock/DockSeparator.vue'

const router = useRouter()
const toast = useToast()
</script>
