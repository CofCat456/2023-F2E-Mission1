<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { NuxtImg } from '#components'

const { gsap } = useGsap()

const breakpoints = useBreakpoints(breakpointsTailwind)
const md = breakpoints.between('md', 'lg')

const headerHeight: Ref<number> | undefined = inject('headerHeight')
const navHeight: Ref<number> | undefined = inject('navHeight')

const titleRef = ref<HTMLHeadingElement | null>(null)
const leftBtnRef = ref<HTMLDivElement | null>(null)
const rightBtnRef = ref<HTMLDivElement | null>(null)
const peopleRef = ref<InstanceType<typeof NuxtImg> | null>(null)

const getOcclusionHeight = computed(() => md ? headerHeight!.value + navHeight!.value : headerHeight?.value)

onMounted(() => {
  const timeline = gsap.timeline()
  timeline.from(titleRef.value, { y: 100, autoAlpha: 0, duration: 0.6 })
    .from([leftBtnRef.value, rightBtnRef.value], { y: 50, autoAlpha: 0, duration: 0.6 })
    .from(peopleRef.value?.$el, { y: 50, autoAlpha: 0, duration: 0.6 }, '+=.1')
})
</script>

<template>
  <section
    :style="{
      height: `calc(100dvh - ${getOcclusionHeight}px)`,
    }" class="flex flex-col items-center"
  >
    <div class="text-center inline-block xl:mt-24 md:mt-8 cursor-default">
      <!-- Title -->
      <h2 ref="titleRef" class="xl:max-w-full md:max-w-[360px] mx-auto font-mantou font-normal xl:text-8xl md:text-title tracking-2 text-gradientTheme">
        台灣的明天 喵先鋪路
      </h2>

      <!-- Buttons -->
      <div class="my-4 flex items-center gap-4 justify-center">
        <div ref="leftBtnRef" class="bg-primary inline-block rounded-2xl py-3 px-4 cursor-default">
          <h3 class="text-white xl:text-[28px] text-xl">
            2024 立委參選人
          </h3>
        </div>

        <div ref="rightBtnRef" class="flex items-center gap-5 border border-white shadow rounded-2xl px-4 py-3 cursor-default">
          <div class="relative xl:w-[50px] md:w-[40px] bg-gradientTheme rounded-full aspect-square">
            <p class="font-black text-white xl:text-[32px] md:text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              3
            </p>
          </div>
          <h1 class="text-primaryTheme font-bold xl:text-[40px] md:text-[28px]">
            喵立翰 Miao Li-Han
          </h1>
        </div>
      </div>
    </div>

    <!-- Image -->
    <div class="flex-1 overflow-hidden">
      <NuxtImg ref="peopleRef" class="h-full object-cover" src="/img_people_1.png" />
    </div>
  </section>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 4px 12px 0px #A3B4CB33;
}
</style>
