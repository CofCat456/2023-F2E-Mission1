<script setup lang="ts">
import { ref } from 'vue'

const headerRef = ref<HTMLHeadElement | null>(null)
const tableNavRef = ref<HTMLHeadElement | null>(null)
const isLoading = ref(true)

const { height } = useElementBounding(headerRef)
const { height: navHeight } = useElementBounding(tableNavRef)

// provide
provide('headerRef', headerRef)
provide('tableNavRef', tableNavRef)
provide('headerHeight', height)
provide('navHeight', navHeight)

// SEO
useSeoMeta({
  title: '喵立翰 Miao Li-Han',
  ogTitle: '喵立翰 Miao Li-Han - 台灣的明天 喵先鋪路',
  description: 'The-F2E-立委競選官網',
  ogImage: '/seo.png',
})

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
    <TableNav />
    <MobileSociaMediaBtns />
  </template>
</template>
