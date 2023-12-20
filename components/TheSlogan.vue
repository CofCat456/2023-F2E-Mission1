<script lang="ts" setup>
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
  <section ref="sloganRef" class="max-w-8xl py-block mx-auto">
    <div class="flex flex-col gap-4 items-center text-center">
      <!-- Title -->
      <h2 ref="titleRef" class="xl:max-w-full md:max-w-[360px] mx-auto font-mantou font-normal xl:text-8xl md:text-title tracking-2 text-gradientTheme">
        台灣的明天 喵先鋪路
      </h2>

      <div ref="nameRef" class="flex items-center gap-5 border border-white shadow rounded-2xl px-4 py-3 cursor-default">
        <div class="relative xl:w-[50px] md:w-[33px] bg-gradientTheme rounded-full aspect-square">
          <p class="font-black text-white xl:text-[32px] md:text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            3
          </p>
        </div>
        <p class="text-primaryTheme font-bold xl:text-[40px] md:text-2xl">
          喵立翰 Miao Li-Han
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
