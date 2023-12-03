<script setup lang="ts">
import { ref } from 'vue'

const { $gsap } = useNuxtApp()

const containerRef = ref<HTMLElement | null>(null)
const ulRef = ref<HTMLUListElement | null>(null)

onMounted(() => {
  if (containerRef.value === null || ulRef.value === null)
    return

  const textRef = ulRef.value.children[0]
  const textWidth = textRef.getBoundingClientRect().width

  const firstRate = textWidth * 2 / 15

  // step 1. 首先讓跑馬燈從畫面右側出現
  // step 2. 重複時更改起始點
  // step 3. 重新計算時間 (距離 / 時間 = 速率)

  $gsap.fromTo('.loop', { x: textWidth }, {
    x: -1 * textWidth,
    ease: 'none',
    duration: 15,
    repeat: -1,
    scrollTrigger: { trigger: containerRef.value, start: 20 },
    onRepeat: () => {
      $gsap.fromTo('.loop', { x: 0 }, { x: -1 * textWidth, ease: 'none', duration: textWidth / firstRate, repeat: -1 })
    },
  })
})
</script>

<template>
  <section ref="containerRef" class="max-w-full -mt-[1px] p-[10px] bg-primaryTheme overflow-hidden">
    <ul ref="ulRef" class="whitespace-nowrap text-white font-mantou font-normal text-title tracking-2 leading-none">
      <li v-for="item in 2" :key="item" class="loop inline-block pr-4">
        為喵星人，護台灣！從喵的眼中，看見台灣 喵的未來，人的希望
      </li>
    </ul>
  </section>
</template>
