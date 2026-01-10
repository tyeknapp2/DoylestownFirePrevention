// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Doylestown Fire Company No 1', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "Doylestown-patch.svg", // doylestown patch for site icon
        },
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxt/eslint', '@nuxtjs/color-mode', '@nuxt/devtools'],
  typescript: { typeCheck: true },
  })
