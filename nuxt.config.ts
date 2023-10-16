
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/style/main.scss";',
        },
      },
    },
  },
  modules: [ '@vueuse/nuxt', 'nuxt-svgo'],

  devtools: { enabled: true }
})
