

<template>
  <div>
    <h1>Posts</h1>
    <postCard/>
    {{ posts }}
  </div>
</template>

<script setup>
const postStore = usePostStore()
const { posts, loading, error } = storeToRefs(postStore)


onBeforeMount(()=>{
  postStore.fetchPostData()
})
</script>