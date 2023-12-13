<script setup lang="ts">
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

const headerRef = ref(null)
const { height } = useElementBounding(headerRef)

// provide
provide('headerRef', headerRef)
provide('headerHeight', height)
</script>

<template>
  <TheHeader />
  <TheBanner />
  <AnimationBar />
  <TheAdvocate />
</template>
