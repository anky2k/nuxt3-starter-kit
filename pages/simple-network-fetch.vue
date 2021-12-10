<template>
  <div>
    <h1>Blog posts</h1>
    
    <template v-if="pending">
      <p>loading...</p>
    </template>

    <template v-else-if="error">
      <p>Error while fetching posts: {{ error }}</p>
    </template>

    <template v-else>      
      <ul>
        <li v-for="post of posts" :key="post.id">          
          {{ post.title }}
        </li>        
      </ul>
    </template>
  </div>
</template>

<script>


import { fetchPosts } from '../sources/fetch-posts'

export default defineComponent({
  async setup (props) {   
    const posts = ref([]) 
    onMounted(() => {
      setTimeout(() => {
        new Array(5).fill(1).forEach( item => {
          posts.value.push({
              userId: item,
              id: item,
              title: `random text - ${new Date()}`
          })
        })
      }, 2000)      
    })

    const { data, pending, error, refresh } = await useAsyncData('FetchPosts', () => fetchPosts())    
    posts.value = data.value.data
    return { posts, pending, error }    
  }
})
</script>
