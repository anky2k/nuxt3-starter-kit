<template>  
  <div class="rail">
    <a
      v-for="item in items" 
      :key="item.id"
      data-testid="dt-tray-content"
      class="card h-full m-1 flex-shrink-0 block w-1/3 lg:w-1/4 md:w-1/4"
    >
      <slot 
        :item="item"
        name="TrayContentContainer"
      >
        some default
      </slot>
    </a>    
  </div>    
</template>

<script>
export default {
  name: 'TrayContent',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  },
}
</script>

