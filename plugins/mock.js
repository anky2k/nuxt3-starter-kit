import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const { $config: {MOCK_MODE} } = nuxtApp
  if (process.client && MOCK_MODE === true) {
    import('../mock/browser.js')
    .then( ({ worker }) => {
        worker.start()
    })
    
  }    
})