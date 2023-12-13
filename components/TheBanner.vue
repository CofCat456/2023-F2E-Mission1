<script setup lang="ts">
const headerHeight = inject('headerHeight')

const { $gsap } = useNuxtApp()

const titleRef = ref<HTMLHeadingElement | null>(null)
const leftBtnRef = ref<HTMLDivElement | null>(null)
const rightBtnRef = ref<HTMLDivElement | null>(null)
const peopleRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  const timeline = $gsap.timeline()
  timeline.from(titleRef.value, { y: 150, opacity: 0, duration: 0.8 })
    .from([leftBtnRef.value, rightBtnRef.value], { y: 100, opacity: 0, duration: 0.8 })
    .from(peopleRef.value, { y: 100, opacity: 0, duration: 0.8 }, '+=.1')
})
</script>

<template>
  <section
    :style="{
      height: `calc(100dvh - ${headerHeight}px)`,
    }"
    class="flex flex-col"
  >
    <div class="text-center inline-block mt-auto">
      <!-- Title -->
      <h2 ref="titleRef" class="font-mantou text-8xl tracking-2 text-gradientTheme">
        台灣的明天 喵先鋪路
      </h2>

      <!-- Buttons -->
      <div class="font-inter my-4 flex items-center gap-4 justify-center">
        <div ref="leftBtnRef" class="bg-primary inline-block rounded-2xl py-3 px-4">
          <h3 class="text-white">
            2024 立委參選人
          </h3>
        </div>

        <div ref="rightBtnRef" class="flex items-center gap-5 border border-white shadow rounded-2xl px-4 py-3">
          <div class="relative w-10 bg-gradientTheme p-3 rounded-full aspect-square">
            <p class="text-white text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              3
            </p>
          </div>
          <h1 class="text-primaryTheme">
            喵立翰 Miao Li-Han
          </h1>
        </div>
      </div>
    </div>

    <!-- Image -->
    <div ref="peopleRef" class="mx-auto">
      <NuxtImg width="723" fit="cover" src="/img_people_1.png" />
    </div>
  </section>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 4px 12px 0px #A3B4CB33;
}
</style>
