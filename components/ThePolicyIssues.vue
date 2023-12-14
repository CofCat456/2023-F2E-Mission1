<script lang="ts" setup>
import { PageTitle } from '#components'

const { $gsap } = useNuxtApp()

const policyIssuseRef = ref<HTMLElement | null>(null)
const pageTitleRef = ref<InstanceType<typeof PageTitle> | null>(null)
const policysRef = ref<HTMLElement[] | null>(null)

const policyIssues = [
  {
    id: Math.random() + 1,
    text: '為毛孩子謀福利！\n推動寵物醫療保障方案',
    imageUrl: 'img_policy1.png',
  },
  {
    id: Math.random() + 2,
    text: '打造休閒天堂！\n推廣寵物休閒與娛樂場所',
    imageUrl: 'img_policy2.png',
  },
  {
    id: Math.random() + 3,
    text: '推廣寵物飼養教育，讓愛更加專業',
    imageUrl: 'img_policy3.png',
  },
]

onMounted(() => {
  const timeline = $gsap.timeline({
    scrollTrigger: { trigger: policyIssuseRef.value, start: 'top center' },
  })

  timeline.from(pageTitleRef.value?.$el, { y: 100, autoAlpha: 0, duration: 0.6 })

  policysRef.value?.forEach((element) => {
    timeline.from(element, { y: 100, autoAlpha: 0, duration: 0.6 }, '<+=50%')
  })
})
</script>

<template>
  <section ref="policyIssuseRef" class="max-w-8xl py-block mx-auto">
    <!-- Page Title -->
    <PageTitle ref="pageTitleRef" tag="POLICY ISSUES" title="政策議題" />

    <!-- PolicyIssues Block -->
    <ul class="mt-16 grid grid-cols-3 gap-x-16">
      <template v-for="{ id, text, imageUrl } in policyIssues" :key="id">
        <li
          ref="policysRef"
          class="flex flex-col justify-between"
        >
          <h4 class="px-4 pb-4 whitespace-pre hover:text-primaryTheme transition-colors duration-300 cursor-default">
            {{ text }}
          </h4>
          <NuxtImg class="rounded-3xl max-w-full h-auto" :src="imageUrl" />
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped></style>
