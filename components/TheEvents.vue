<script setup lang="ts">
import type { Modal } from '#components'
import { PageTitle } from '#components'
import { eventList } from '~/data'
import { Section } from '~/types'
import type { Data } from '~/types'

const { gsap } = useGsap()

const eventRef = ref<HTMLElement | null>(null)
const pageTitleRef = ref<InstanceType<typeof PageTitle> | null>(null)
const articlesRef = ref<HTMLElement[] | null>(null)
const moreRef = ref<HTMLButtonElement | null>(null)
const modalRef = ref<InstanceType<typeof Modal> | null>(null)

const selectEvent: Data = reactive({
  title: '',
  text: '',
  date: '',
  imageUrl: '',
})

const title = '最新活動'

// provide
provide('modalRef', modalRef)

function openEventModal(event: Data) {
  Object.assign(selectEvent, event)
  modalRef.value?.open()
}

onMounted(() => {
  if (articlesRef.value) {
    const [leftSideRef, ...rightSidesRef] = articlesRef.value

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: eventRef.value, start: 'top center' },
    })

    timeline.from(pageTitleRef.value?.$el, { y: 100, autoAlpha: 0, duration: 0.6 })
      .from(leftSideRef, { x: 100, autoAlpha: 0, duration: 0.6 }, '+=.1')
      .from([...rightSidesRef, moreRef.value], { x: -100, autoAlpha: 0, duration: 0.6 }, '<')
  }
})
</script>

<template>
  <section :id="Section.EVENTS" ref="eventRef">
    <!-- Page Title -->
    <PageTitle ref="pageTitleRef" tag="LATEST EVENTS" :title="title" />

    <ul class="xl:mt-16 mt-10 grid xl:grid-flow-col md:grid-flow-row gap-7">
      <!-- Articles -->
      <template v-for="event, index in eventList" :key="event.title">
        <li
          ref="articlesRef"
          class="first:row-span-4 first:grid-flow-row grid grid-flow-col sm:gap-x-4 gap-x-2 gap-y-3 cursor-pointer group"
          @click="openEventModal(event)"
        >
          <NuxtImg
            class="rounded-2xl group-first:row-span-6 group-first:w-full group-first:h-auto group-[&:not(:first-child)]:row-span-6 object-cover h-full"
            :src="event.imageUrl"
            loading="lazy"
          />
          <div class="group-first:col-span-1 group-[&:not(:first-child)]:row-span-6 group-[&:not(:first-child)]:col-span-2 grid gap-y-2">
            <time class="text-secondary text-remark" :datetime="event.date">{{ event.date }}</time>
            <h5 v-if="index === 0" class="secTitle">
              {{ event.title }}
            </h5>
            <h6 v-else class="text-base font-bold secTitle">
              {{ event.title }}
            </h6>
            <p class="sm:line-clamp-none line-clamp-1">
              {{ event.text }}
            </p>
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

  <!-- Modal -->
  <ModalActivity
    :title="title"
    :data="selectEvent"
    :data-list="eventList"
  />
</template>

<style scoped>
.secTitle {
  @apply group-hover:text-primaryTheme transition-colors duration-300;
}
</style>
