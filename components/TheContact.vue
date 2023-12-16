<script lang="ts" setup>
import type { BtnTheme } from '~/types'

const { gsap } = useGsap()

interface ConcatItem {
  title: string
  text: string
  btnText: string
  imageUrl: string
  theme: BtnTheme
}

const contactRef = ref<HTMLElement | null>()
const contactBoxsRef = ref<HTMLElement[] | null>(null)

const concatList: ConcatItem[] = [
  {
    title: '小額支持喵喵',
    text: '您的小筆捐款，是每隻毛孩未來的大大動力!',
    btnText: '小額捐款',
    imageUrl: '/img_donate.png',
    theme: 'default',
  },
  {
    title: '民眾服務信箱',
    text: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力',
    btnText: '填寫表單',
    imageUrl: '/img_email.png',
    theme: 'dark',
  },
]

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: contactRef.value, start: 'top center' },
  })

  timeline.fromTo(contactBoxsRef.value, 0.6, { scale: 0 }, { scale: 1, ease: 'expo.inOut' })
})
</script>

<template>
  <section ref="contactRef" class="max-w-8xl py-block mx-auto">
    <ul class="grid grid-cols-2 gap-x-6">
      <template v-for="{ title, text, btnText, imageUrl, theme } in concatList" :key="title">
        <li ref="contactBoxsRef" class="card" :class="`${theme === 'default' ? 'bg-primaryTheme' : 'bg-primary'}`">
          <p class="text-title mb-4">
            {{ title }}
          </p>
          <h5 class="font-semibold mb-6">
            {{ text }}
          </h5>
          <div class="flex-1 flex justify-between items-center">
            <BasicButton class="bg-white" :theme="theme">
              {{ btnText }}
            </BasicButton>
            <NuxtImg class="max-w-full h-auto" densities="x1" :src="imageUrl" />
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped>
.card {
  @apply flex flex-col p-24 rounded-[32px] text-white
}
</style>
