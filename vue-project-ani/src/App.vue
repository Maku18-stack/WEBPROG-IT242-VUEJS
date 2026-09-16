<script setup>
import Profile from './components/Profile.vue'
import Gallery from './components/Gallery.vue'
import Fruits from './components/Fruits.vue'
import CommentsSection from './components/CommentsSection.vue'
</script>

<template>
  <div class="page">
    <!-- Header -->
    <header class="header">
      <h1 class="site-title">Personal Profile Web Page</h1>
      <p class="site-sub">About Me • Gallery • Fruits</p>
    </header>

    <!-- About -->
    <section class="section">
      <h2 class="section-title">About Me</h2>
      <div class="card">
        <Profile />
      </div>
    </section>

    <!-- Gallery -->
    <section class="section">
      <h2 class="section-title">Gallery</h2>
      <div class="card">
        <Gallery />
      </div>
    </section>

    <!-- Fruits -->
    <section class="section">
      <h2 class="section-title">Fruits</h2>
      <div class="card">
        <Fruits />
      </div>
    </section>

        <!-- Comments -->
    <section class="section">
      <h2 class="section-title">Comments</h2>
      <div class="card">
        <CommentsSection />
      </div>
    </section>

    <footer class="footer">© 2026 Mark Ani</footer>
  </div>
</template>

<style>
/* ✅ Layout only — not copying your classmate’s design */
:root{
  --bg1:#0b0f14;
  --bg2:#111827;
  --card: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.10);
  --text: #e5e7eb;
  --muted: rgba(229,231,235,0.7);
}

html, body, #app{ height:100%; margin:0; }
body{
  font-family: Arial, sans-serif;
  color: var(--text);
  background: radial-gradient(1000px 600px at 50% 0%, var(--bg2), var(--bg1));
}

.page{
  width:100%;
  min-height:100vh;
}

.header{
  text-align:center;
  padding: 34px 16px 10px;
}

.site-title{
  margin:0;
  font-size: 40px;
  letter-spacing: 0.5px;
}

.site-sub{
  margin: 10px 0 0;
  color: var(--muted);
}

.section{
  max-width: 1100px;
  margin: 22px auto;
  padding: 0 16px;
}

.section-title{
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.2px;
}


.card{
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
}

.footer{
  text-align:center;
  padding: 30px 16px 40px;
  color: var(--muted);
  font-size: 14px;
}
</style>