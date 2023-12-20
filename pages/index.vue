<script setup lang="ts">
import { ref } from 'vue'

const headerRef = ref<HTMLHeadElement | null>(null)
const mobileNavRef = ref<HTMLHeadElement | null>(null)
const isLoading = ref(true)

const { height } = useElementBounding(headerRef)
const { height: navHeight } = useElementBounding(mobileNavRef)

// provide
provide('headerRef', headerRef)
provide('mobileNavRef', mobileNavRef)
provide('headerHeight', height)
provide('navHeight', navHeight)

onMounted(() => {
  useSmoothScroll()
})
</script>

<template>
  <CustomLoadingIndicator v-if="isLoading" @set-is-loading="isLoading = false" />
  <template v-else>
    <TheHeader />
    <TheBanner />
    <AnimationBar />
    <TheAdvocate />
    <TheEvents />
    <ThePolicy />
    <TheContact />
    <TheSlogan />
    <TheFooter />
    <MobileNav />
  </template>
</template>
