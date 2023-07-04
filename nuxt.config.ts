// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: [
    "vuetify/lib/styles/main.sass",
    "@/public/assets/styles/main.scss"
  ],
  modules: [
    '@nuxtjs/robots',
    'nuxt-simple-sitemap'
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
      crawlLinks: true
    }
  },
  sitemap: {
    siteUrl: 'https://antiweb3scam.org',
    sitemaps: true
  }
});
