<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="food-card">
    <h3 class="food-title">{{ title }}</h3>
    <p class="food-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.food-card{
  background: #d1fae5;          /* soft green */
  border: 2px solid #34d399;    /* green border */
  border-radius: 14px;
  padding: 18px 16px;
  width: 230px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.18);
  text-align: center;
}

.food-title{
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #064e3b;               /* dark green text */
}

.food-desc{
  margin: 0;
  font-size: 14px;
  color: #065f46;               /* readable text */
}
</style>