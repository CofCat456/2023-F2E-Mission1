<script setup lang="ts">
import type { Icon } from '../types'
import { SocialMedia } from '../types'

const navList = [
  '候選人主張',
  '最新活動',
  '政策議題',
  '小額捐款',
  '民眾服務信箱',
]

const iconList: { icon: Icon, link: SocialMedia }[] = [
  { icon: 'fb', link: SocialMedia.FB },
  { icon: 'ig', link: SocialMedia.IG },
  { icon: 'youtube', link: SocialMedia.YOUTUBE },
]

const headerRef = inject('headerRef')
</script>

<template>
  <div ref="headerRef" class="bg-colorTheme1 w-full px-6 py-4">
    <div class="sticky bg-white border w-full border-white px-6 py-3 rounded-2xl flex justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3 text-primaryTheme">
        <NuxtImg sizes="32px" src="/logo.svg" />
        <h4>
          喵立翰 Miao Li-Han
        </h4>
      </div>

      <!-- Nav -->
      <nav class="menu my-auto">
        <ul class="flex items-center gap-4">
          <template v-for="nav in navList" :key="nav">
            <li class="gap-3 cursor-pointer rounded-lg text-primary hover:text-primaryTheme">
              <h6>
                {{ nav }}
              </h6>
            </li>
          </template>
        </ul>
      </nav>

      <!-- Buttons -->
      <ul class="flex items-center gap-4">
        <template v-for="{ icon, link } in iconList" :key="icon">
          <li class="rounded hover:brightness-90 duration-300 cursor-pointer">
            <NuxtLink :to="link" target="_blank">
              <NuxtImg width="32" :src="`/icon/${icon}.svg`" />
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
