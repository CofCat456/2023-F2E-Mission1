<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'

const emit = defineEmits<{
  setIsLoading: []
}>()

const lottieContainer = ref<InstanceType<typeof Vue3Lottie> | null>(null)
const count = ref(0)

function complete() {
  count.value += 1

  if (count.value === 2)
    emit('setIsLoading')
}
</script>

<template>
  <section class="w-full h-screen grid place-items-center">
    <client-only>
      <Vue3Lottie
        ref="lottieContainer"
        animation-link="/loading-lottie.json"
        background-color="transparent"
        direction="alternate"
        :height="300"
        :width="300"
        :auto-play="true"
        @on-loop-complete="complete"
      />
    </client-only>
  </section>
</template>
