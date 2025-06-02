<template>
  <div>
    <h1>Posts</h1>
    <!-- <postCard/> -->
    <div v-if="posts.length<=0">
      <button class="text-white bg-gray-800 text-lg rounded-md p-2 flex" @click="loadPosts" :disabled="loading">Fetch Posts</button>
    </div>
     <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`"><postCard :post= "post"/></NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const postStore = usePostStore()
const { posts,loading, error } = storeToRefs(postStore)

const loadPosts = () => {
  postStore.fetchPostData()
}

</script>