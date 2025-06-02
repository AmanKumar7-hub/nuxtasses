<template>
 <div class="rounded-sm bg-yellow-500 p-4 border-solid max-w- mt-2 ml-2 ">
    <h2 class="mb-2 text-2xl font-bold">{{post.title}}</h2>
    <p class="mb-3 text-gray-500"> {{ post.body.length > 60 ? post.body.slice(0, 60) + '...' : post.body }}</p>
    <div class="gap-3 flex">
      <p v-for="tag in post.tags" :key="tag">
        <span 
          class=" bg-gray-700 px-1 py-2 text-md  rounded-sm text-white"
        >
        {{tag}}
      </span>
      </p>
    </div>
  </div>
 
</template>
<script setup>
defineProps({
  post:Object
})
</script>
