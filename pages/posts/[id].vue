<template>
    <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h2 class="text-3xl text-black-900">{{ post.title }}</h2>
    <p class="text-gray-800 bg-inherit">{{ post.body }}</p>
    <p class="bg-gray-700 px-1 py-2 text-md rounded-sm text-white">
        {{ post.tags }}
    </p>
  </div>
</template>


<script setup>

// defineProps({
//     post:Object
// })
const route = useRoute();
// When accessing /posts/1, route.params.id will be 1
const postId = route.params.id;
const post = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const { data } = await useFetch(`https://dummyjson.com/posts/${postId}`)
    if (data.value) {
      post.value = data.value
    }
  } catch (e) {
    error.value = 'Failed to load post'
  } 
});
</script>
