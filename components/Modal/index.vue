<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits<{ onClose: [] }>()

const showed = ref(false)
const modalWindowRef = ref<HTMLDivElement | null>(null)
const modalHeaderRef = ref<HTMLDivElement | null>(null)

const { height: modalWindowHeight } = useElementBounding(modalWindowRef)
const { height: modalHeaderHeight } = useElementBounding(modalHeaderRef)

function open() {
  showed.value = true
}

function close() {
  showed.value = false
  emit('onClose')
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <!-- NOTE: Lenis overflow scroll issues#14 https://github.com/studio-freight/lenis/issues/14 -->
  <div
    class="h-screen w-screen fixed top-0 left-0 flex items-center justify-center md:p-12 p-5 duration-300 z-50" :class="[
      showed ? 'opacity-100' : 'pointer-events-none opacity-0',
    ]"
    @wheel="event => event.stopPropagation()"
    @touchmove="event => event.stopPropagation()"
  >
    <!-- Modal-Overlay -->
    <div
      class="h-full w-full absolute top-0 left-0 bg-black/50"
      @click="close"
    />

    <!-- Modal-Window -->
    <!-- FIXME: vueuse issues #3657 -->
    <div
      ref="modalWindowRef"
      class="md:max-w-[1400px] md:max-h-[calc(100dvh-48px*2)] w-full h-full rounded-lg bg-white overflow-hidden z-10"
    >
      <!-- Modal-Header -->
      <div
        ref="modalHeaderRef"
        class="flex items-center justify-between sm:px-12 sm:py-6 p-4"
      >
        <!-- Modal-Title -->
        <h2 class="font-bold">
          <slot name="modalTitle">
            I'm Title
          </slot>
        </h2>

        <!-- Close Icon -->
        <div
          class="h-8 w-8 p-1 rounded-md hover:bg-gray-200  duration-100 active:scale-90 cursor-pointer"
          @click="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full text-black/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <!-- Modal-Content -->
      <div
        class="w-full md:px-12 md:pb-12 px-4 pb-4"
        :style="{
          height: `calc(${modalWindowHeight}px - ${modalHeaderHeight}px)`,
        }"
      >
        <!-- <slot name="modalContent"> -->
        <!--   I'm Content -->
        <!-- </slot> -->
        <slot name="modalContent">
          HeaderHeight: {{ modalHeaderHeight }}
          <br>
          WindowHeight: {{ modalWindowHeight }}
        </slot>
      </div>
    </div>
  </div>
</template>
