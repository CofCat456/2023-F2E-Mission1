<script setup lang="ts">
import { navList } from '~/data'

const { ScrollTrigger } = useGsap()
const { scrollTo } = useSmoothScroll()

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
  <header ref="headerRef" class="sticky top-0 bg-colorTheme1 w-full px-6 py-4 z-40 transition-colors">
    <div class="bg-white border w-full border-white px-8 py-3 rounded-2xl flex justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2 text-primaryTheme">
        <NuxtImg sizes="32px" src="/logo.svg" />
        <h4>
          喵立翰 Miao Li-Han
        </h4>
      </div>

      <!-- Nav -->
      <nav class="my-auto xl:block hidden">
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
      <SocialMediaBtns />
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
