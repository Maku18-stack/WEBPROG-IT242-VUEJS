<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<script setup>
import FoodItem from './components/FoodItem.vue'
</script>

<template>
  <h1>Fruits</h1>

  <div class="container">
    <FoodItem title="Mangoes and Banans" description="I like mangoes and bananas" />
    <FoodItem title="Mangoes and Banans" description="I like mangoes and bananas" />
    <FoodItem title="Mangoes and Banans" description="I like mangoes and bananas" />
    <FoodItem title="Mangoes and Banans" description="I like mangoes and bananas" />
  </div>
</template>

<style>
.container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}
</style>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
