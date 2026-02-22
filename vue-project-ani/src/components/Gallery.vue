<script setup>
const pics = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg"
]
</script>

<template>
  <section class="section">
    <h2 class="title">Gallery</h2>

    <div class="gallery">
      <div class="frame" v-for="(p, i) in pics" :key="i">
        <img :src="p" alt="Gallery photo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section{
  background: var(--lavender);
  padding: 22px 16px 28px;
  margin: 18px 0;
}

.title{
  text-align: center;
  margin: 0 0 18px;
  font-size: 34px;
  font-weight: 800;
}

.gallery{
  max-width: 1100px;
  margin: 0 auto;
  border: 4px solid var(--purple);
  padding: 18px;
  background: var(--lavender2);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.frame{
  background: #fff;
  border: 2px solid #c7c7c7;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.frame img{
  width: 260px;
  height: 320px;
  object-fit: cover;
}
</style>