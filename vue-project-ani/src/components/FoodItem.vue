<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="food-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.food-card {
  background: #c8f7c5;
  border: 2px solid #7ed957;
  padding: 16px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
}
</style>