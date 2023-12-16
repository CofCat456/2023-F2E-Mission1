<script lang="ts" setup>
import type { BtnTheme } from '~/types'

const props = withDefaults(defineProps<{
  theme?: BtnTheme
}>(), {
  theme: 'default',
})
</script>

<template>
  <button class="inline-flex max-w-max items-center gap-2 py-4 px-6 rounded-full text-primary border border-white  transition-colors" :class="[`${props.theme}`]">
    <h6 class="text-base">
      <slot />
    </h6>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </button>
</template>

<style scoped>
.default {
  @apply hover:text-white hover:bg-primary hover:border-primary
}

.dark {
  @apply hover:text-white hover:bg-primaryTheme hover:border-primaryTheme
}
</style>
