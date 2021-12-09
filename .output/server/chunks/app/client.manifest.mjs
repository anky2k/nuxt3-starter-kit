const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-2a9d7df2.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/custom.vue",
      "pages/about.vue",
      "pages/index.vue",
      "pages/list.vue",
      "pages/simple-fetch.vue",
      "pages/simple-network-fetch.vue",
      "pages/skeleton-loading.vue",
      "components/counter.vue",
      "components/card/card-comp.vue",
      "components/card/index.vue",
      "components/card/loader.vue",
      "components/cards-list/index.vue",
      "components/commons/lazy-load.vue",
      "components/commons/shimmer.vue"
    ],
    "css": [
      "assets/entry.1c1e2ba6.css"
    ]
  },
  "components/counter.vue": {
    "file": "counter-d23263b5.mjs",
    "src": "components/counter.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/card/card-comp.vue": {
    "file": "card-comp-fc47b043.mjs",
    "src": "components/card/card-comp.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/card/index.vue": {
    "file": "index-ca9409c7.mjs",
    "src": "components/card/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/card/loader.vue",
      "components/card/card-comp.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/commons/shimmer.vue"
    ]
  },
  "components/card/loader.vue": {
    "file": "loader-38ec5bf8.mjs",
    "src": "components/card/loader.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/commons/shimmer.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/commons/shimmer.vue": {
    "file": "shimmer-df693c89.mjs",
    "src": "components/commons/shimmer.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/shimmer.00cd0e39.css"
    ]
  },
  "components/cards-list/index.vue": {
    "file": "index-21224fbc.mjs",
    "src": "components/cards-list/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/card/index.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/card/loader.vue",
      "components/commons/shimmer.vue",
      "components/card/card-comp.vue"
    ]
  },
  "components/commons/lazy-load.vue": {
    "file": "lazy-load-ca842d9a.mjs",
    "src": "components/commons/lazy-load.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/about.vue": {
    "file": "about-e0afe491.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-06da3a52.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/counter.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/list.vue": {
    "file": "list-fb794f3b.mjs",
    "src": "pages/list.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/commons/lazy-load.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/simple-fetch.vue": {
    "file": "simple-fetch-5217a93a.mjs",
    "src": "pages/simple-fetch.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/simple-network-fetch.vue": {
    "file": "simple-network-fetch-2898c978.mjs",
    "src": "pages/simple-network-fetch.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/skeleton-loading.vue": {
    "file": "skeleton-loading-be91f84f.mjs",
    "src": "pages/skeleton-loading.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/cards-list/index.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/card/index.vue",
      "components/card/loader.vue",
      "components/commons/shimmer.vue",
      "components/card/card-comp.vue"
    ]
  },
  "layouts/custom.vue": {
    "file": "custom-dd13755f.mjs",
    "src": "layouts/custom.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
