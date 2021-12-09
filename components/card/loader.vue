<template>
  <div
    class="flex flex-col mb-6 w-full max-w-sm bg-white rounded-2xl overflow-hidden lg:flex-row lg:mb-16 lg:mx-auto lg:max-w-screen-lg lg:h-96"
  >
    <shimmer
      :animation="false"
      skeleton-class="w-full h-56 w-36 lg:w-96 lg:h-96"
      :w="null"
      :h="null"
      radius="0px"
    />   

    <div class="relative flex-1 p-6 pb-12 lg:p-8">
      <div class="flex justify-between mb-3 lg:mb-6">
        <shimmer
          skeleton-class="w-28 mr-3 h-4 lg:h-7"
          :w="null"
          :h="null"

        />
        <shimmer
          skeleton-class="w-24 h-4 lg:h-7"
          :w="null"
          :h="null"

        />          
      </div>
      <div class="flex flex-col">
        <shimmer
          skeleton-class="w-full h-7 lg:h-9"
          class="mb-3"
          :w="null"
          :h="null"
        />         
        <shimmer
          class="mb-6"

          skeleton-class="w-full h-3 lg:h-5"
          :w="null"
          :h="null"
          m="0 0 8px 0"
          :rep="4"
        />         
      </div>
      <div
        class="absolute bottom-0 left-0 flex items-center justify-between pb-6 px-6 w-full lg:px-8"
      >
        <div class="flex items-center text-center">
          <shimmer
            skeleton-class="w-8 h-8 lg:w-11 lg:h-11"
            :w="null"
            :h="null"
            radius="100%"
            class="mr-3"
          />           
          <shimmer
            skeleton-class="w-16 h-4 lg:h-7 lg:w-28 lg:mr-3"
            :w="null"
            :h="null"
          />           
        </div>
        <shimmer
          skeleton-class="w-16 h-4 lg:h-7 lg:w-28"
          :w="null"
          :h="null"
        />         
      </div>
    </div>
  </div>
</template>

<script>
import Shimmer from '../commons/shimmer.vue'

export default {
  name: 'CardLoader',
  components: {
    Shimmer,
  }  
}
</script>