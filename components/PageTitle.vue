<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  tag: string
  title: string
}>()

const getUpperCaseTitle = computed(() => props.tag.toUpperCase())
</script>

<template>
  <div class="text-center">
    <p class="font-bold inline-block rounded-lg px-3 py-2 bg-primary text-white">
      {{ getUpperCaseTitle }}
    </p>
    <p class="text-title text-gradientTheme">
      {{ title }}
    </p>
  </div>
</template>
