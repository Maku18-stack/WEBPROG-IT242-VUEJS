<template>
  <section class="profile-wrap">
    <div class="profile-card">
      <div class="top">
        <div>
          <h2 class="name">Mark Ani</h2>
          <p class="sub">BS Information Technology Student</p>
          <p class="sub2">Web Programming</p>
        </div>

        <img class="avatar" src="/images/profile.jpg" alt="Profile photo" />
      </div>

      <div class="section">
        <h3>Skills</h3>
        <div class="chips">
          <span class="chip">HTML</span>
          <span class="chip">CSS</span>
          <span class="chip">JavaScript</span>
          <span class="chip">Vue</span>
          <span class="chip">GitHub</span>
        </div>
      </div>

      <div class="section">
        <h3>About</h3>
        <p class="about">
          This profile was imported from my midterms website and integrated into my Vue project.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-wrap{
  padding: 40px 16px;
  display: flex;
  justify-content: center;
}

.profile-card{
  width: min(900px, 100%);
  background: #ffffff;
  border-radius: 18px;
  padding: 26px;
  box-shadow: 0 14px 30px rgba(0,0,0,.10);
}

.top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.name{
  margin: 0;
  font-size: 34px;
}

.sub{
  margin: 6px 0 0;
  color: #4b5563;
}
.sub2{
  margin: 2px 0 0;
  color: #6b7280;
}

.avatar{
  width: 120px;
  height: 120px;
  border-radius: 999px;
  object-fit: cover;
  border: 4px solid #e5e7eb;
}

.section{
  margin-top: 22px;
}

.section h3{
  margin: 0 0 10px;
}

.chips{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip{
  background: #eef2ff;
  color: #3730a3;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
}

.about{
  margin: 0;
  color: #374151;
  line-height: 1.6;
}
</style>

<img src="/images/profile.jpg" class="profile-pic" alt="Profile photo"></img>