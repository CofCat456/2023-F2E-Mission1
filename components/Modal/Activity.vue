<script lang="ts" setup>
import { Modal } from '#components'
import type { Data } from '~/types'

const props = defineProps<{
  title: string
  data: Data
  dataList: Data[]
}>()

const getNotSelectList = computed(() => props.dataList.filter((data: Data) => data.title !== props.data.title))

const modalRef: Ref<InstanceType<typeof Modal> | null> | undefined = inject('modalRef')
</script>

<template>
  <Modal ref="modalRef">
    <template #modalTitle>
      {{ title }}
    </template>

    <template #modalContent>
      <div class="flex xl:pr-0 sm:pr-4 pr-2 xl:flex-row flex-col h-full gap-8 xl:overflow-y-visible overflow-y-auto scrollbar-thin">
        <!-- Left Modal Block -->
        <aside class="xl:w-2/5 md:w-full">
          <NuxtImg
            v-if="data.imageUrl !== ''"
            class="w-full rounded-3xl"
            fit="cover"
            :src="data.imageUrl"
            loading="lazy"
          />
          <p class="mt-4 text-remark">
            {{ data.title }}
          </p>
          <div class="flex items-center sm:text-base text-sm">
            分享

            <!-- Social Media Btns -->
            <SocialMediaBtns :show-list="['fb', 'ig', 'line', 'twitter']" />
          </div>
        </aside>

        <!-- Right Modal Block -->
        <div class="flex-1 xl:pr-4 xl:overflow-y-auto scrollbar-thin">
          <h2 class="text-primaryTheme mb-2">
            {{ data.title }}
          </h2>
          <time class="text-secondary text-remark" :datetime="data.date">{{ data.date }}</time>
          <div class="mt-10 sm:mb-24 mb-12 grid gap-y-6" v-html="data.text" />
          <!-- More events -->
          <div class="p-4 rounded-xl bg-colorTheme3">
            <p class="font-semibold mb-4">
              更多活動
            </p>
            <ul class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <li v-for="{ id, title: itemTitle, imageUrl } in getNotSelectList" :key="id">
                <NuxtImg class="w-full mb-3 rounded-xl aspect-[4/3]" :src="imageUrl" loading="lazy" />
                {{ itemTitle }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>
