// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [400, 700, 900],
      },
    }],
  ],
  css: [
    '~/assets/css/global.css',
  ],
})

