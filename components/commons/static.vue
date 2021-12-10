<template>  
  <div v-once>  
      <slot 
        name="StaticContent"
      >
        some default
      </slot> 
  </div>    
</template>

<script>
export default {
  name: 'Static'  
}
</script>

