<script lang="ts" setup>
import { navList } from '~/data'

const { scrollTo } = useSmoothScroll()

const mobileNavRef: Ref<HTMLHeadElement> | undefined = inject('mobileNavRef')
</script>

<template>
  <!-- Nav -->
  <nav ref="mobileNavRef" class="px-2 fixed xl:hidden bottom-0 left-0 right-0 border-t border-colorTheme3 bg-white z-40">
    <ul class="flex justify-between items-center gap-2">
      <template v-for="nav in navList" :key="nav.id">
        <li class="flex-1 py-2 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-lg text-primary hover:text-primaryTheme" @click="scrollTo(nav.target)">
          <NuxtImg densities="1x" :src="`img_nav_${nav.id}.png`" />
          <h6 class="text-[10px]">
            {{ nav.title }}
          </h6>
        </li>
      </template>
    </ul>
  </nav>
</template>
