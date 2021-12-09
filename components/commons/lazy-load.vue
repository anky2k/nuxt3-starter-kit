<template>
    <div ref="trigger">
       <slot :name="`LazyLoad`" />     
    </div>    
</template>

<script>
    import { ref, onMounted } from 'vue'

    export default {
        props: ['callback'],
        setup(props){
          let observer = null
          const trigger = ref(null)
          const handleIntersect = (entry) => {
            if (entry.isIntersecting) props.callback()
          }

          onMounted(() => {
            observer = new IntersectionObserver( entries => {
                handleIntersect(entries[0])
            }, props?.options)
            observer.observe(trigger.value)
          })

          onUnmounted(() => {
            observer.disconnect()
          })

          return {
            trigger
          }
        }                        
    }
</script>