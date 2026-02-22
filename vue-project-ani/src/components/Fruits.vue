<script setup>
import FoodItem from './FoodItem.vue'
import FoodItem2 from './FoodItem2.vue'
</script>

<template>
  <section class="fruits">
    <h2 class="fruit-title">Fruits</h2>

    <div class="grid">
      <FoodItem title="Mangoes and Bananas" description="I like mangoes and bananas" />
      <FoodItem title="Apples" description="Crisp and sweet" />
      <FoodItem title="Grapes" description="Small but tasty" />
      <FoodItem title="Oranges" description="Fresh and juicy" />
      <FoodItem2 title="Strawberries" description="Sweet and fresh" />
    </div>
  </section>
</template>

<style scoped>
.fruits{
  padding: 10px 16px 40px;
}

.fruit-title{
  text-align: center;
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 40px;
  margin: 26px 0 16px;
}

.grid{
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  justify-items: center;
}
</style>