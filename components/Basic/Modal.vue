<script lang="ts" setup>
import { ref } from 'vue'

const showed = ref(false)

function open() {
  showed.value = true
}

function close() {
  showed.value = false
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <div
    class="h-screen w-screen fixed top-0 left-0 flex items-center justify-center p-5 duration-300 z-50" :class="[
      showed ? 'opacity-100' : 'pointer-events-none opacity-0',
    ]"
  >
    <!-- Modal-Overlay -->
    <div
      class="h-full w-full absolute top-0 left-0 bg-black/50"
      @click="close"
    />

    <!-- Modal-Window -->
    <div
      class="w-full h-full rounded-lg bg-white overflow-hidden z-10 " :class="[
        showed ? 'scale-100' : 'scale-0 transition-all duration-300',
      ]"
    >
      <div
        class="flex items-center justify-between px-12 py-6"
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
      <div class="px-12">
        <slot name="modalContent">
          I'm Content
        </slot>
      </div>
    </div>
  </div>
</template>
