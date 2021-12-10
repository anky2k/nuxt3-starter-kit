<template>
    <div class="w-full h-full">        
        <div
            v-if="error" 
            :style="`height: ${height}px; width: ${width}px`"
            class="rounded-md bg-gray-400 blur-md"
        />        
        <img
          v-else
          ref="img"
          loading="lazy"          
          src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          :alt=alt          
          @error="setError"
          class="w-full aspect-video" 
        />        
    </div>        
</template>

<script>

import { useLoadedFlag } from '../../composables/is-loaded'

export default {
  name: 'Img',    
  props: {
    src: {
      type: String,
      default: () => '',
    },
    mode: {
      type: String,
      default: () => 'responsive',
    },
    height: {
      type: String,
      default: () => "600",
    },
    width: {
      type: String,
      default: () => "800",
    },
    loading: {
      type: String,
      default: () => 'lazy',
    },
    alt: {
      type: String,
      default: () => 'fox now',
    }
  },
  setup (props) {
    const img = ref(null)
    const { error, setError } = useLoadedFlag(props.src)
    onMounted(() => {
      if(img.value.src !== props.src) {
        img.value.src = props.src
      }
    })

    return {
      error,
      setError,
      img        
    }
  }  
}
</script>