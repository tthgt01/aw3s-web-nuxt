// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    "vuetify/lib/styles/main.sass",
    "@/public/assets/styles/main.scss"
  ],
  modules: [
    '@nuxtjs/robots'
  ],
  buildModules: [
    '@averjs/nuxt-compression'
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false
    }
  }
});
