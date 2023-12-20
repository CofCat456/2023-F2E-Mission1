<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { Icon } from '../types'
import { SocialMedia } from '../types'

const props = withDefaults(defineProps<{
  showList?: Icon[]
}>(), {
  showList: () => ['fb', 'ig', 'youtube'],
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const xs = breakpoints.smaller('sm')

const iconList: { icon: Icon, link: SocialMedia }[] = [
  { icon: 'fb', link: SocialMedia.FB },
  { icon: 'ig', link: SocialMedia.IG },
  { icon: 'line', link: SocialMedia.LINE },
  { icon: 'youtube', link: SocialMedia.YOUTUBE },
  { icon: 'twitter', link: SocialMedia.TWITTER },
]

const getShowList = computed(() => iconList.filter(({ icon }: { icon: Icon }) => props.showList.includes(icon)))
</script>

<template>
<<<<<<< HEAD
  <ul v-if="xs" class="fixed left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-4 bg-white rounded-xl sm:px-10 px-4 py-2 shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]">
=======
  <ul v-if="xs" class="fixed left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-4 bg-white rounded-xl px-10 py-2 shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]">
>>>>>>> e95abacdc44a61ce3736d59b9ef40c34ea73c733
    <template v-for="{ icon, link } in getShowList" :key="icon">
      <li class="bg-white rounded-full hover:scale-105 transition-transform cursor-pointer">
        <NuxtLink :to="link" target="_blank">
          <NuxtImg densities="x1" :src="`/icon/${icon}.svg`" />
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
