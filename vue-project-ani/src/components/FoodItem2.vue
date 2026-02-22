<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="food-card yellow">
    <h3 class="food-title">{{ title }}</h3>
    <p class="food-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.food-card{
  border-radius: 14px;
  padding: 18px 16px;
  width: 230px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.18);
  border: 2px solid transparent;
}

.yellow{
  background: #fde68a;
  border-color: #f59e0b;
}

.food-title{
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
}

.food-desc{
  margin: 0;
  font-size: 14px;
  color: #374151;
}
</style>