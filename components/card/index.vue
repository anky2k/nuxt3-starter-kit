<template>
  <div>
    <div v-if="fetchState === 'pending'">
      <CardLoader />
    </div>    
    <div v-else-if="fetchState === 'failed'">
      some error
    </div>    
    <div v-else>
      <CardComp      
        :item="item[0]"
      />    
    </div>  
  </div>    
</template>

<script>
import CardLoader from './loader.vue'
import CardComp from './card-comp.vue'

export default {
  name: 'Card',
  components: {
    CardComp,
    CardLoader
  },
  mounted(){
    console.log("inside card component",this.item, this.fetchState)
  },
  props: ['item', 'fetchState']
}
</script>