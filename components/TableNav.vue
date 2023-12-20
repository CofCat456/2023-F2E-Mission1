<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { navList } from '~/data'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.between('sm', 'md')
const md = breakpoints.between('md', 'lg')

const { scrollTo } = useSmoothScroll()

const tableNavRef: Ref<HTMLHeadElement> | undefined = inject('tableNavRef')
</script>

<template>
  <!-- Nav -->
  <nav v-if="sm || md" ref="tableNavRef" class="px-2 fixed bottom-0 left-0 right-0 border-t border-colorTheme3 bg-white z-40">
    <ul class="flex justify-between items-center gap-2">
      <template v-for="nav in navList" :key="nav.id">
        <li class="flex-1 py-2 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-lg text-primary hover:text-primaryTheme" @click="scrollTo(nav.target)">
          <NuxtImg densities="x1" :src="`img_nav_${nav.id}.png`" />
          <h6 class="text-[10px]">
            {{ nav.title }}
          </h6>
        </li>
      </template>
    </ul>
  </nav>
</template>
