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
    'nuxt-simple-sitemap',
    ['nuxt-purgecss', {
      content: [
        /* Copy of 'dist' from first npm run generate */
        'modules/purgecss/static-generated-html/**/*.html',
      ],
      greedy: [
        /* Generated as runtime, keep all related selectors */
        /v-ripple/,
      ],
    }]
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
