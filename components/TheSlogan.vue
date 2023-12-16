<script lang="ts" setup>
const { $gsap } = useNuxtApp()

const sloganRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLDivElement | null>(null)
const nameRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const timeline = $gsap.timeline({
    scrollTrigger: { trigger: sloganRef.value, start: 'top center' },
  })
  timeline.from(titleRef.value, { y: 100, autoAlpha: 0, duration: 0.6 })
    .from(nameRef.value, { y: 50, autoAlpha: 0, duration: 0.6 }, '+=.1')
})
</script>

<template>
  <section ref="sloganRef" class="max-w-8xl py-block mx-auto">
    <div class="flex flex-col gap-4 items-center">
      <!-- Title -->
      <h2 ref="titleRef" class="font-mantou font-normal text-8xl tracking-2 text-gradientTheme">
        台灣的明天 喵先鋪路
      </h2>

      <div ref="nameRef" class="flex items-center gap-5 border border-white shadow rounded-2xl px-4 py-3">
        <div class="relative w-10 bg-gradientTheme rounded-full aspect-square">
          <p class="text-white text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            3
          </p>
        </div>
        <h1 class="text-primaryTheme">
          喵立翰 Miao Li-Han
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
