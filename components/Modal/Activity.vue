<script lang="ts" setup>
import { BasicModal } from '#components'
import type { Data } from '~/types'

const props = defineProps<{
  title: string
  data: Data
  dataList: Data[]
}>()

const getNotSelectList = computed(() => props.dataList.filter((data: Data) => data.title !== props.data.title))

const modalRef: Ref<InstanceType<typeof BasicModal> | null> | undefined = inject('modalRef')
</script>

<template>
  <BasicModal ref="modalRef">
    <template #modalTitle>
      {{ title }}
    </template>

    <template #modalContent>
      <div class="flex h-full gap-8">
        <!-- Left Modal Block -->
        <aside class="w-2/5">
          <NuxtImg v-if="data.imageUrl !== ''" class="w-full rounded-3xl" fit="cover" :src="data.imageUrl" />
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
        <div class="flex-1 pr-4 overflow-y-auto scrollbar-thin">
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
                <NuxtImg class="mb-3 rounded-xl" :src="imageUrl" />
                {{ title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </BasicModal>
</template>
