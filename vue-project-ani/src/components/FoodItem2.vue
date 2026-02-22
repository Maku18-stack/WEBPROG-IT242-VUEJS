<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="card2">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card2{
  background: #fde68a;
  border-radius: 12px;
  padding: 16px;
  width: 230px;
  text-align: center;
}
</style>