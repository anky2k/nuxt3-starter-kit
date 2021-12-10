import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/styles/tailwind-ssr.css"],
    publicRuntimeConfig: {
      MOCK_MODE: process.env.MOCK,
    },
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
    }        
})
