<script setup lang="ts">
import { PageTitle } from '#components'

const { $gsap } = useNuxtApp()

const eventRef = ref<HTMLElement | null>(null)
const pageTitleRef = ref<InstanceType<typeof PageTitle> | null>(null)
const articlesRef = ref<HTMLElement[] | null>(null)
const moreRef = ref<HTMLButtonElement | null>(null)

const events = [
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    text: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    date: '2023/12/26',
    image: '/img_events1.png',
  },
  {
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    text: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
    date: '2023/12/24',
    image: '/img_events2.png',
  },
  {
    title: '收容所模特兒大比拼！',
    text: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    date: '2023/12/20',
    image: '/img_events3.png',
  },
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    text: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
    date: '2023/12/26',
    image: '/img_events4.png',
  },
]

onMounted(() => {
  if (articlesRef.value) {
    const [leftSideRef, ...rightSidesRef] = articlesRef.value

    const timeline = $gsap.timeline({
      scrollTrigger: { trigger: eventRef.value, start: 'top center' },
    })

    timeline.from(pageTitleRef.value?.$el, { y: 100, autoAlpha: 0, duration: 0.6 })
      .from(leftSideRef, { x: 100, autoAlpha: 0, duration: 0.8 }, '+=.1')
      .from([...rightSidesRef, moreRef.value], { x: -100, autoAlpha: 0, duration: 0.8 }, '<')
  }
})
</script>

<template>
  <section ref="eventRef" class="my-16 py-10 max-w-8xl mx-auto">
    <!-- Page Title -->
    <PageTitle ref="pageTitleRef" tag="LATEST EVENTS" title="最新活動" />

    <ul class="mt-16 grid grid-rows-7 grid-flow-col gap-7">
      <!-- Articles -->
      <li v-for="{ title, text, date, image }, index in events" ref="articlesRef" :key="title" class="first:row-span-4 first:grid-flow-row grid grid-rows-auto grid-flow-col gap-y-3 gap-x-4 group">
        <NuxtImg
          class="rounded-2xl group-first:row-span-6 group-first:w-full group-first:h-auto group-first:mb-3 group-[&:not(:first-child)]:row-span-6"
          :src="image"
        />
        <div class="group-first:col-span-1 group-[&:not(:first-child)]:row-span-6 group-[&:not(:first-child)]:col-span-2">
          <time class="text-secondary text-remark" :datetime="date">{{ date }}</time>
          <h5 v-if="index === 1" class="secTitle">
            {{ title }}
          </h5>
          <h6 v-else class="text-base font-bold secTitle">
            {{ title }}
          </h6>
          <p>{{ text }}</p>
        </div>
      </li>

      <!-- More Button -->
      <!-- TODO: button animation -->
      <li ref="moreRef">
        <button class="border border-white inline-flex max-w-max items-center gap-3 py-4 px-6 rounded-full bg-[#F1F5F9] hover:text-white hover:bg-primary transition-colors">
          查看更多
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.secTitle {
  @apply hover:text-primaryTheme transition-colors;
}
</style>
