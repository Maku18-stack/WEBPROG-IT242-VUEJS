<template>
  <div>
    <h2>JSONPlaceholder API Demo</h2>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    posts.value = await res.json();
  } catch (err) {
    error.value = "Failed to load data";
  } finally {
    loading.value = false;
  }
});
</script>