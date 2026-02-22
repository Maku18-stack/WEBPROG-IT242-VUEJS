<script setup>
import FoodItem from './components/FoodItem.vue'
</script>

<template>
  <h1 class="title">Fruits</h1>

  <div class="container">
    <FoodItem title="Mangoes and Bananas" description="I like mangoes and bananas" />
    <FoodItem title="Apples" description="Crisp and sweet" />
    <FoodItem title="Grapes" description="Small but tasty" />
    <FoodItem title="Oranges" description="Fresh and juicy" />
  </div>
</template>

<style>
.title{
  text-align: center;
  margin-top: 30px;
  font-family: Arial, sans-serif;
}

.container{
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 0 16px;
}
</style>