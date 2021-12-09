import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/styles/styles.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
    },
})