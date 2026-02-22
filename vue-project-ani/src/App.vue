<script setup>
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import Profile from './components/Profile.vue'
</script>

<template>
  <div class="page">
    <h1 class="title">Fruits</h1>

    <div class="grid">
      <FoodItem title="Mangoes and Bananas" description="I like mangoes and bananas" />
      <FoodItem title="Apples" description="Crisp and sweet" />
      <FoodItem title="Grapes" description="Small but tasty" />
      <FoodItem title="Oranges" description="Fresh and juicy" />

      <!-- Second component -->
      <FoodItem2 title="Strawberries" description="Sweet and fresh" />
    </div>

    <div class="divider"></div>

    <!-- ✅ only ONE profile -->
    <Profile />
  </div>
</template>

<style>
/* Full-width backdrop fix */
html, body, #app { height: 100%; margin: 0; }
body { background: #0b0f14; }

.page{
  min-height: 100vh;
  width: 100%;
  padding: 40px 16px 60px;
  color: #e5e7eb;
  font-family: Arial, sans-serif;
}

.title{
  text-align: center;
  font-size: 42px;
  margin: 0 0 28px;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  max-width: 1100px;
  margin: 0 auto;
  justify-items: center;
  align-items: start;
}

.divider{
  height: 1px;
  max-width: 1100px;
  margin: 40px auto;
  background: rgba(255,255,255,0.12);
}
</style>