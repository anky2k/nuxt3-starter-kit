<template>
  <div>
    <h1>Blog posts</h1>
    
    <template v-if="pending">
      <content-placeholders>
        <content-placeholders-text :lines="20" />
      </content-placeholders>
    </template>

    <template v-else-if="error">
      <p>Error while fetching posts: {{ error }}</p>
    </template>

    <template v-else>      
      <ul>
        <li v-for="post of data.data" :key="post.id">          
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
    const { data, pending, error, refresh } = await useAsyncData('FetchHomePageLayout', () => fetchPosts())    
    onMounted(() => {
      console.log('Component is mounted!')
    })
    return { data, pending, error }    
  }
})
</script>
