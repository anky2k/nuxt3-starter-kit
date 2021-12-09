const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-666242b0.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/custom.vue",
      "pages/about.vue",
      "pages/index.vue",
      "components/counter.vue"
    ],
    "css": [
      "assets/entry.5dae9b6a.css"
    ]
  },
  "components/counter.vue": {
    "file": "counter-17d331d1.mjs",
    "src": "components/counter.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/about.vue": {
    "file": "about-87b2d18a.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-22f50eb3.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/counter.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "layouts/custom.vue": {
    "file": "custom-59c9fcbf.mjs",
    "src": "layouts/custom.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
