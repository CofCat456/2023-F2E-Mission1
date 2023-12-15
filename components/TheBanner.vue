<script setup lang="ts">
import { NuxtImg } from '#components'

const headerHeight = inject('headerHeight')

const { $gsap } = useNuxtApp()

const titleRef = ref<HTMLHeadingElement | null>(null)
const leftBtnRef = ref<HTMLDivElement | null>(null)
const rightBtnRef = ref<HTMLDivElement | null>(null)
const peopleRef = ref<InstanceType<typeof NuxtImg> | null>(null)

onMounted(() => {
  const timeline = $gsap.timeline()
  timeline.from(titleRef.value, { y: 100, autoAlpha: 0, duration: 0.6 })
    .from([leftBtnRef.value, rightBtnRef.value], { y: 50, autoAlpha: 0, duration: 0.6 })
    .from(peopleRef.value?.$el, { y: 50, autoAlpha: 0, duration: 0.6 }, '+=.1')
})
</script>

<template>
  <section
    :style="{
      height: `calc(100dvh - ${headerHeight}px)`,
    }" class="flex flex-col items-center"
  >
    <div class="text-center inline-block xl:mt-auto md:mt-8">
      <!-- Title -->
      <h2 ref="titleRef" class="font-mantou font-normal text-8xl tracking-2 text-gradientTheme">
        台灣的明天 喵先鋪路
      </h2>

      <!-- Buttons -->
      <div class="my-4 flex items-center gap-4 justify-center">
        <div ref="leftBtnRef" class="bg-primary inline-block rounded-2xl py-3 px-4">
          <h3 class="text-white">
            2024 立委參選人
          </h3>
        </div>

        <div ref="rightBtnRef" class="flex items-center gap-5 border border-white shadow rounded-2xl px-4 py-3">
          <div class="relative w-[50px] bg-gradientTheme p-3 rounded-full aspect-square">
            <p class="font-black text-white text-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              3
            </p>
          </div>
          <h1 class="text-primaryTheme font-bold">
            喵立翰 Miao Li-Han
          </h1>
        </div>
      </div>
    </div>

    <!-- Image -->
    <NuxtImg ref="peopleRef" class="flex-1" src="/img_people_1.png" />
  </section>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 4px 12px 0px #A3B4CB33;
}
</style>
