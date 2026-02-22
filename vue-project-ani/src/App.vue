<script setup>
import Profile from './components/Profile.vue'
import Gallery from './components/Gallery.vue'
import Fruits from './components/Fruits.vue'
</script>

<template>
  <div class="page">
    <header class="hero">
      <h1 class="main-title">Personal Profile Web Page</h1>
      <h2 class="sub-title">About Me</h2>
    </header>

    <Profile />
    <Gallery />
    <Fruits />
  </div>
</template>

<style>
:root{
  --lavender:#d8c2f1;
  --lavender2:#efe7fb;
  --purple:#7b3ea6;
  --text:#111827;
}

html, body, #app{
  height: 100%;
  margin: 0;
}

body{
  font-family: Arial, sans-serif;
  background: #ffffff;
  color: var(--text);
}

.page{
  width: 100%;
}

.hero{
  text-align: center;
  padding: 28px 16px 10px;
}

.main-title{
  font-family: "Georgia", serif;
  font-style: italic;
  margin: 0;
  font-size: 44px;
}

.sub-title{
  margin: 12px 0 0;
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 26px;
}
</style>