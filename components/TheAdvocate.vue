<script lang="ts" setup>
import { NuxtImg } from '#components'

const { $gsap } = useNuxtApp()

const advocateRef = ref<HTMLElement | null>(null)
const leftSideRef = ref<HTMLDivElement | null>(null)
const rightSideRef = ref<InstanceType<typeof NuxtImg> | null>(null)

const animationConfig = {
  autoAlpha: 0,
  duration: 0.6,
}

onMounted(() => {
  const timeline = $gsap.timeline({
    scrollTrigger: { trigger: advocateRef.value, start: 'top center' },
  })

  timeline.from(leftSideRef.value, { x: 100, ...animationConfig })
    .from(rightSideRef.value?.$el, { x: -100, ...animationConfig }, '<')
})
</script>

<template>
  <section ref="advocateRef" class="py-block bg-colorTheme2">
    <div class="max-w-8xl mx-auto flex items-stretch rounded-3xl overflow-hidden">
      <div ref="leftSideRef" class="flex-1 bg-white py-16 px-10">
        <!-- Page Title -->
        <PageTitle tag="ADVOCATE" title="候選人主張" />

        <!-- Sec Title -->
        <h3 class="my-8 text-left">
          我堅信 ! 藉由推動更完善的<span class="text-primaryTheme">貓咪福利</span>和相關政策，更是間接地投資於<span class="text-primaryTheme">台灣的未來</span>。
        </h3>

        <!-- Text -->
        <p class="text-left">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
          <br>
          因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>

      <!-- Img -->
      <NuxtImg ref="rightSideRef" width="647" src="/img_advocate.png" />
    </div>
  </section>
</template>
