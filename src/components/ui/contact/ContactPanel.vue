<template>
  <section class="p-4">
    <div
      class="card mx-auto max-w-2xl mt-8 overflow-visible border border-black/5 bg-white/70 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div class="card-body gap-5 overflow-visible sm:gap-6">
        <div class="flex items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-100">
              Reach me directly
            </h2>
            <p class="mt-1 text-sm text-gray-500 dark:text-neutral-400">
              Clean, simple, and easy to find on every device.
            </p>
          </div>
        </div>

        <div class="grid gap-4">
          <article v-for="item in contacts" :key="item.label"
            class="group relative overflow-visible rounded-2xl border border-black/5 bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black/10"
            :class="{ 'z-50': activeQr === item.label, 'z-10': activeQr !== item.label }">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-start gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-100 to-emerald-100 text-cyan-700 dark:from-cyan-400/15 dark:to-emerald-300/10 dark:text-cyan-200">
                  <Icon :icon="item.icon" class="text-2xl" />
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-lg font-medium text-gray-800 dark:text-neutral-100">
                      {{ item.label }}
                    </h3>
                    <div
                      class="badge badge-outline border-emerald-400/60 text-emerald-700 dark:border-emerald-300/40 dark:text-emerald-200">
                      {{ item.tag }}
                    </div>
                  </div>
                  <p class="mt-2 break-all text-base text-gray-600 dark:text-neutral-300">
                    {{ item.value }}
                  </p>
                </div>
              </div>

              <div class="flex shrink-0 items-center gap-2 self-end sm:self-center">
                <button type="button"
                  class="btn btn-ghost btn-sm min-w-17.5 rounded-xl border border-black/5 bg-black/5 text-gray-700 hover:border-emerald-400/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-200"
                  @click="copyContact(item)">
                  Copy
                </button>

                <div v-if="item.qrSrc" class="relative">
                  <button type="button"
                    class="btn btn-ghost btn-sm min-w-17.5 rounded-xl border border-black/5 bg-black/5 text-gray-700 hover:border-pink-400/40 hover:bg-pink-50 hover:text-pink-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-pink-400/10 dark:hover:text-pink-200"
                    @click.stop="toggleQr(item.label)">
                    Scan
                  </button>

                  <div v-if="activeQr === item.label"
                    class="fixed inset-0 z-100 flex items-center justify-center sm:absolute sm:inset-auto sm:top-1/2 sm:-translate-y-1/2 sm:left-full sm:ml-4 sm:block"
                    @click.stop="activeQr = null">
                    <div class="fixed inset-0 bg-black/20 backdrop-blur-sm sm:hidden"></div>

                    <div
                      class="relative z-101 rounded-3xl border border-black/5 bg-white p-4 shadow-2xl animate-in fade-in zoom-in duration-200 dark:border-white/10 dark:bg-slate-900">
                      <img :src="item.qrSrc" :alt="item.qrAlt"
                        class="h-48 w-48 max-w-none rounded-2xl border border-black/5 bg-white object-contain p-2 dark:border-white/10 sm:h-40 sm:w-40" />
                      <div class="mt-3 text-center text-sm font-medium text-gray-500 dark:text-neutral-400">
                        {{ item.qrTip }}
                      </div>

                      <div
                        class="hidden sm:absolute sm:right-full sm:top-1/2 sm:-translate-y-1/2 sm:h-3 sm:w-3 sm:overflow-hidden sm:block">
                        <div
                          class="h-2 w-2 translate-x-2 rotate-45 bg-white border-l border-b border-black/5 dark:bg-slate-900 dark:border-white/10">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a v-if="item.href" :href="item.href" target="_blank" rel="noreferrer"
                  class="btn btn-ghost btn-sm min-w-17.5 rounded-xl border border-black/5 bg-black/5 text-gray-700 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-200">
                  Open
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useToast } from '@/hooks/useToast'

interface ContactItem {
  label: string
  value: string
  icon: string
  tag: string
  href?: string
  qrSrc?: string
  qrAlt?: string
  qrTip?: string
}

const toast = useToast()
const activeQr = ref<string | null>(null)

const contacts: ContactItem[] = [
  {
    label: 'QQ',
    value: '1587005702',
    icon: 'ri:qq-fill',
    tag: 'Chat',
    qrSrc: '/contact/QQ.png',
    qrAlt: 'QQ QR code',
    qrTip: 'Scan QQ QR'
  },
  {
    label: 'WeChat',
    value: 'Ez4Nian',
    icon: 'ri:wechat-fill',
    tag: 'Message',
    qrSrc: '/contact/WeChat.png',
    qrAlt: 'WeChat QR code',
    qrTip: 'Scan WeChat QR'
  },
  {
    label: 'Email',
    value: 'lnian6881@gmail.com',
    icon: 'material-symbols:alternate-email-rounded',
    tag: 'Fastest',
    href: 'mailto:lnian6881@gmail.com'
  },
  {
    label: 'GitHub',
    value: 'AvenCole',
    icon: 'mdi:github',
    tag: 'Code',
    href: 'https://github.com/AvenCole'
  }
]

function toggleQr(label: string) {
  if (activeQr.value === label) {
    activeQr.value = null
  } else {
    activeQr.value = label
  }
}

async function copyContact(item: ContactItem) {
  try {
    await navigator.clipboard.writeText(item.value)
    toast.success(`${item.label} copied!`)
  } catch (err) {
    console.error('Copy failed', err)
  }
}

const closeQr = () => (activeQr.value = null)
onMounted(() => window.addEventListener('click', closeQr))
onUnmounted(() => window.removeEventListener('click', closeQr))
</script>

<style scoped>
.btn {
  text-transform: none;
}


.animate-in {
  animation: animate-in 0.2s ease-out;
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>