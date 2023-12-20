<script lang="ts" setup>
import type { Modal } from '#components'
import { PageTitle } from '#components'
import { policyList } from '~/data'
import { type Data, Section } from '~/types'

const { gsap } = useGsap()

const policyRef = ref<HTMLElement | null>(null)
const pageTitleRef = ref<InstanceType<typeof PageTitle> | null>(null)
const policysRef = ref<HTMLElement[] | null>(null)
const modalRef = ref<InstanceType<typeof Modal> | null>(null)

const selectPolicy: Data = reactive({
  title: '',
  text: '',
  date: '',
  imageUrl: '',
})

const title = '政策議題'

// provide
provide('modalRef', modalRef)

function openPolicyModal(event: Data) {
  Object.assign(selectPolicy, event)
  modalRef.value?.open()
}

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: policyRef.value, start: 'top center' },
  })

  timeline.from(pageTitleRef.value?.$el, { y: 100, autoAlpha: 0, duration: 0.6 })

  policysRef.value?.forEach((element) => {
    timeline.from(element, { y: 100, autoAlpha: 0, duration: 0.6 }, '<+=50%')
  })
})
</script>

<template>
  <section :id="Section.POLICY" ref="policyRef" class="xl:max-w-8xl md:max-w-2.5xl py-block mx-auto">
    <!-- Page Title -->
    <PageTitle ref="pageTitleRef" tag="POLICY ISSUES" :title="title" />

    <!-- PolicyIssues Block -->
    <ul class="mt-16 grid xl:grid-cols-3 md:grid-cols-2 xl:gap-x-16 md:gap-x-6 gap-y-16">
      <template v-for="policy in policyList " :key="policy.id">
        <li
          ref="policysRef"
          class="flex flex-col justify-between group cursor-pointer"
          @click="openPolicyModal(policy)"
        >
          <h4 class="px-4 pb-4 whitespace-pre-wrap group-hover:text-primaryTheme transition-colors duration-300">
            {{ policy.title }}
          </h4>
          <NuxtImg
            class="rounded-3xl max-w-full h-auto"
            :src="policy.imageUrl"
            loading="lazy"
          />
        </li>
      </template>
    </ul>
    <ModalActivity
      :title="title"
      :data="selectPolicy"
      :data-list="policyList"
    />
  </section>
</template>

<style scoped></style>
