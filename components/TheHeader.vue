<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { navList } from '~/data'

const { ScrollTrigger } = useGsap()
const { scrollTo } = useSmoothScroll()

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.greater('sm')

const headerRef: Ref<HTMLHeadElement> | undefined = inject('headerRef')

onMounted(() => {
  ScrollTrigger.create({
    start: 'top -1',
    end: 99999,
    toggleClass: { className: 'header--scrolled', targets: headerRef?.value },
  })
})
</script>

<template>
  <!-- NOTE: mobile animations -->
  <header ref="headerRef" class="sticky top-0 bg-colorTheme1 w-full md:px-6 md:py-4 px-4 py-3 z-40 transition-colors">
    <div class="bg-white border w-full border-white md:px-8 sm:px-4 px-2 py-3 rounded-2xl flex justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2 text-primaryTheme">
        <NuxtImg densities="x1" width="32" src="/logo.svg" />
        <h4>
          喵立翰 Miao Li-Han
        </h4>
      </div>

      <!-- Nav -->
      <nav class="my-auto lg:block hidden">
        <ul class="flex items-center gap-4">
          <template v-for="nav in navList" :key="nav.id">
            <li class="cursor-pointer rounded-lg text-primary hover:text-primaryTheme" @click="scrollTo(nav.target)">
              <h6 class="p-2">
                {{ nav.title }}
              </h6>
            </li>
          </template>
        </ul>
      </nav>

      <!-- Social Media Btns -->
      <SocialMediaBtns v-if="sm" />
    </div>
  </header>
</template>

<style scoped>
.header--scrolled {
  @apply bg-transparent
}

.header--scrolled > div {
  @apply backdrop-blur bg-white/50 border-white/50
}
</style>
