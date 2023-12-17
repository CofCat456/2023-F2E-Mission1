<script lang="ts" setup>
import { BasicModal } from '#components'
import type { ContactData } from '~/types'

const props = defineProps<{
  title: string
  data: ContactData
  dataList: ContactData[]
  btnStatus: boolean
  isLoading: boolean
  isPass: boolean
}>()

defineEmits<{
  onClose: []
  onSubmit: []
}>()

const getNoCommaSlogan = computed(() => props.data.slogan.replace('，', ' '))

const modalRef: Ref<InstanceType<typeof BasicModal> | null> | undefined = inject('modalRef')
</script>

<template>
  <BasicModal ref="modalRef" @on-close="$emit('onClose')">
    <template #modalTitle>
      {{ title }}
    </template>

    <template #modalContent>
      <div class="flex h-full gap-8">
        <!-- Left Modal Block -->
        <aside
          class="flex-1 flex flex-col rounded-3xl"
          :class="`${data.theme === 'default' ? 'bg-colorTheme2' : 'bg-colorTheme6'}`"
        >
          <div class="p-10">
            <h1
              class="font-bold new-line"
              :class="`${data.theme === 'default' ? 'text-primaryTheme ' : 'text-primary'}`"
            >
              {{ getNoCommaSlogan }}
            </h1>
            <div v-if="data.id === 'donate'" class="mt-4">
              <p>
                目前小額贊助總金額
              </p>
              <h2>987,655,873</h2>
            </div>
          </div>
          <div
            class="flex-1 grid"
            :class="`${data.id === 'donate' ? 'place-items-center' : 'place-items-end'}`"
          >
            <NuxtImg
              v-if="data.modalImageUrl !== ''"
              densities="1x"
              fit="cover"
              :src="data.modalImageUrl"
            />
          </div>
        </aside>

        <!-- Right Modal Block -->
        <div class="flex-1 overflow-y-auto scrollbar-thin">
          <transition name="fade" mode="out-in" appear>
            <div v-if="isPass" class="flex flex-col h-full gap-8 justify-center items-center">
              <slot name="close">
                <h3>感謝您的捐款</h3>
                <NuxtImg densities="1x" src="/img_donate_done.svg" />
                <button class="rounded-full border border-white px-24 py-4 bg-colorTheme5 font-semibold hover:brightness-90 transition-all duration-300" @click="modalRef?.close()">
                  關閉
                </button>
              </slot>
            </div>
            <div v-else class="mb-4 pr-4">
              <slot name="form" />
              <button :disabled="!btnStatus || isLoading" class="inline-flex items-center justify-center gap-2 w-full bg-primaryTheme border border-white rounded-full px-8 py-6 text-center font-semibold text-white hover:bg-transparent hover:text-primaryTheme hover:border-primaryTheme transition-[opacity,colors] duration-300 disabled:opacity-70 disabled:pointer-events-none" @click="$emit('onSubmit')">
                <svg
                  v-if="isLoading"
                  class="h-6 w-6 animate-spin py-1 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <slot name="formBtnText" />
              </button>
            </div>
          </transition>
        </div>
      </div>
    </template>
  </BasicModal>
</template>

<style scoped>
.new-line {
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;

  &::after {
  content: "";
  visibility: hidden;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
