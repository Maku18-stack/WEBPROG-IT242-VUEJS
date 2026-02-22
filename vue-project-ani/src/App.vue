<script setup>
import Profile from './components/Profile.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
</script>

<template>
  <div class="page">
    <h1 class="title">Fruits</h1>

    <div class="grid">
      <FoodItem title="Mangoes and Bananas" description="I like mangoes and bananas" />
      <FoodItem title="Apples" description="Crisp and sweet" />
      <FoodItem title="Grapes" description="Small but tasty" />
      <FoodItem title="Oranges" description="Fresh and juicy" />
      <FoodItem2 title="Strawberries" description="Sweet and fresh" />
      <Profile />
    </div>
  </div>
</template>

<style>
.page{
  min-height: 100vh;
  padding: 40px 16px;
  background: #0b0f14; /* dark but clean */
  color: #e5e7eb;
  font-family: Arial, sans-serif;
}

.title{
  text-align: center;
  font-size: 42px;
  margin: 0 0 30px;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  max-width: 980px;
  margin: 0 auto;
  justify-items: center;
}
</style>