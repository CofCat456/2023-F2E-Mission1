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
      <div class="flex xl:p-0 md:p-4 xl:flex-row md:flex-col h-full gap-8 xl:overflow-y-visible md:overflow-y-auto scrollbar-thin">
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
          <div class="flex items-center gap-1">
            分享

            <!-- Social Media Btns -->
            <SocialMediaBtns :show-list="['fb', 'ig', 'line', 'twitter']" />
          </div>
        </aside>

        <!-- Right Modal Block -->
        <div class="flex-1 pr-4 xl:overflow-y-auto scrollbar-thin">
          <h2 class="text-primaryTheme mb-2">
            {{ data.title }}
          </h2>
          <time class="text-secondary text-remark" :datetime="data.date">{{ data.date }}</time>
          <div class="mt-10 mb-24 grid gap-y-6" v-html="data.text" />
          <!-- More events -->
          <div class="p-4 rounded-xl bg-colorTheme3">
            <p class="font-semibold mb-4">
              更多活動
            </p>
            <ul class="grid grid-cols-3 gap-4">
              <li v-for="{ id, title, imageUrl } in getNotSelectList" :key="id">
                <NuxtImg class="w-full mb-3 rounded-xl" :src="imageUrl" loading="lazy" />
                {{ title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>
