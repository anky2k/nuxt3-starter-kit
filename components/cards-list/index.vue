<template>
  <div class="flex flex-wrap justify-around p-4 lg:p-16">
    <Card
      v-for="(item, i) in data"
      :key="i"
      :item="item"
      :fetchState="fetchState"
    />  
  </div>
</template>

<script>
import Card from '../card'

export default {
    name: 'CardList',    
    components: {
        Card
    },
    props: ['data', 'fetchState']
}
</script>
