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
    imageUrl: '/img_events1.png',
  },
  {
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    text: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
    date: '2023/12/24',
    imageUrl: '/img_events2.png',
  },
  {
    title: '收容所模特兒大比拼！',
    text: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    date: '2023/12/20',
    imageUrl: '/img_events3.png',
  },
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    text: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
    date: '2023/12/26',
    imageUrl: '/img_events4.png',
  },
]

onMounted(() => {
  if (articlesRef.value) {
    const [leftSideRef, ...rightSidesRef] = articlesRef.value

    const timeline = $gsap.timeline({
      scrollTrigger: { trigger: eventRef.value, start: 'top center' },
    })

    timeline.from(pageTitleRef.value?.$el, { y: 100, autoAlpha: 0, duration: 0.6 })
      .from(leftSideRef, { x: 100, autoAlpha: 0, duration: 0.6 }, '+=.1')
      .from([...rightSidesRef, moreRef.value], { x: -100, autoAlpha: 0, duration: 0.6 }, '<')
  }
})
</script>

<template>
  <section ref="eventRef" class="max-w-8xl py-block mx-auto">
    <!-- Page Title -->
    <PageTitle ref="pageTitleRef" tag="LATEST EVENTS" title="最新活動" />

    <ul class="mt-16 grid grid-flow-col gap-7">
      <!-- Articles -->
      <template v-for="{ title, text, date, imageUrl }, index in events" :key="title">
        <li ref="articlesRef" class="first:row-span-4 first:grid-flow-row grid grid-flow-col gap-y-3 gap-x-4 group">
          <NuxtImg
            class="rounded-2xl group-first:row-span-6 group-first:w-full group-first:h-auto group-first:mb-3 group-[&:not(:first-child)]:row-span-6"
            :src="imageUrl"
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
      </template>

      <!-- More Button -->
      <!-- TODO: button animation -->
      <li ref="moreRef">
        <BasicButton class="bg-[#F1F5F9]">
          查看更多
        </BasicButton>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.secTitle {
  @apply hover:text-primaryTheme transition-colors;
}
</style>
