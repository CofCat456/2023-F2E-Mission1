export function useLenis() {
  // auto imported by nuxt
  const nuxtApp = useNuxtApp()

  const lenis = new nuxtApp.$Lenis()

  return {
    lenis,
  }
}
