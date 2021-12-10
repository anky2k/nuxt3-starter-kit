<template>  
  <TrayContent     
      :items=items    
    >
      <template v-slot:TrayContentContainer="{item}"> 
        <Img
          alt="some image"
          height="252"
          width="448"
          :src=item.url
        />
        <Static>
          <template v-slot:StaticContent> 
            <span>{{item.name}}</span>
          </template>  
        </Static>        
      </template>  
  </TrayContent>
</template>

<script>
import TrayContent from './tray-content.vue';
import Static from '../commons/static.vue';
import Img from '../commons/img.vue';

export default {
  name: 'Tray',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  },
  components: {
    TrayContent,
    Static,
    Img
  }  
}
</script>