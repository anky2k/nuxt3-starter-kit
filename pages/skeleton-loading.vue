<template>
    <CardsList
        :data="data"
        :fetchState="fetchState"
     />
</template>

<script>
import CardsList from '../components/cards-list'
import { getSampleData } from '../sources/test'

export default {
    name: 'SkeletonLoading',
    components: {
        CardsList,
    },
    setup () {
        const data = ref([1])
        const fetchState = ref('pending')
        onMounted(async () => {
            const resp = await getSampleData()
            data.value = resp
            fetchState.value = 'success'
        })    
        return { data, fetchState }
    }
}
</script>