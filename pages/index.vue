<script setup lang="ts">
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

const headerRef = ref<HTMLHeadElement | null>(null)
const isLoading = ref(true)

const { height } = useElementBounding(headerRef)

// provide
provide('headerRef', headerRef)
provide('headerHeight', height)
</script>

<template>
  <CustomLoadingIndicator v-if="isLoading" @set-is-loading="isLoading = false" />
  <template v-else>
    <TheHeader />
    <TheBanner />
    <AnimationBar />
    <TheAdvocate />
    <TheEvents />
    <ThePolicyIssues />
    <TheContact />
    <TheSlogan />
    <TheFooter />
  </template>
</template>
