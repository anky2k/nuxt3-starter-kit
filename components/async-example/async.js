import Loader from './loading.vue'
import Error from './error.vue'

const AsyncComponent = () => ({
    component: import('./index.vue'),
    // A component to use while the async component is loading
    loading: Loader,
    // A component to use if the load fails
    error: Error
})

export default AsyncComponent
