<script lang="ts" setup>
import type { Icon } from '../types'
import { SocialMedia } from '../types'

const iconList: { icon: Icon, link: SocialMedia }[] = [
  { icon: 'fb', link: SocialMedia.FB },
  { icon: 'ig', link: SocialMedia.IG },
  { icon: 'youtube', link: SocialMedia.YOUTUBE },
]
</script>

<template>
  <ul class="flex items-center gap-3">
    <template v-for="{ icon, link } in iconList" :key="icon">
      <li class="p-2 bg-white rounded-full hover:brightness-90 duration-300 cursor-pointer">
        <NuxtLink :to="link" target="_blank">
          <NuxtImg width="32" :src="`/icon/${icon}.svg`" />
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
