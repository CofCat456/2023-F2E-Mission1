// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ico.svg' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [400, 700, 900],
      },
    }],
    '@nuxtjs/fontaine',
    '@vue-email/nuxt',
  ],
  vueEmail: {
    baseUrl: 'https://2023-f2e-mission1.vercel.app/',
  },
  css: [
    '~/assets/css/global.css',
  ],
  runtimeConfig: {
    gmailAppUserMail: '',
    gmailAppPassword: '',
  },
})
