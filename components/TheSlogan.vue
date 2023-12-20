<script lang="ts" setup>
import { Section } from '~/types'

const { gsap } = useGsap()

const sloganRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLDivElement | null>(null)
const nameRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: sloganRef.value, start: 'top center' },
  })
  timeline.from(titleRef.value, { y: 100, autoAlpha: 0, duration: 0.6 })
    .from(nameRef.value, { y: 50, autoAlpha: 0, duration: 0.6 }, '+=.1')
})
</script>

<template>
  <section :id="Section.SLOGAN" ref="sloganRef" class="my-10">
    <div class="flex flex-col gap-4 items-center text-center">
      <!-- Title -->
      <h2 ref="titleRef" class="xl:max-w-full max-w-[360px] mx-auto font-mantou font-normal xl:text-8xl text-title tracking-2 leading-none text-gradientTheme">
        台灣的明天 喵先鋪路
      </h2>

      <div ref="nameRef" class="flex items-center xl:gap-4 gap-2 border border-white shadow-[0_4px_12px_0_rgba(243,248,255,1)] rounded-2xl px-4 py-3 cursor-default">
        <div class="relative xl:w-[50px] sm:w-[33px] w-6 bg-gradientTheme rounded-full aspect-square">
          <p class="font-black text-white xl:text-[32px] sm:text-2xl text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            3
          </p>
        </div>
        <p class="text-primaryTheme font-bold xl:text-[40px] sm:text-2xl text-xl">
          喵立翰 Miao Li-Han
        </p>
      </div>
    </div>
  </section>
</template>
