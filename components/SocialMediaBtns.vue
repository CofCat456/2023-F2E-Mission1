<script lang="ts" setup>
import type { Icon } from '../types'
import { SocialMedia } from '../types'

const props = withDefaults(defineProps<{
  showList?: Icon[]
}>(), {
  showList: () => ['fb', 'ig', 'youtube'],
})

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
  <ul class="flex items-center sm:gap-2 gap-1">
    <template v-for="{ icon, link } in getShowList" :key="icon">
      <li class="p-2 bg-white rounded-full hover:brightness-90 duration-300 cursor-pointer">
        <NuxtLink :to="link" target="_blank">
          <NuxtImg densities="x1" :src="`/icon/${icon}.svg`" />
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
