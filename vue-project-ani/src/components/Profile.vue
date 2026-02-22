<template>
  <section class="section">
    <div class="wrap">
      <div class="box">
        <p><b>Name:</b> Mark Ani</p>
      </div>

      <div class="box">
        <p><b>Course:</b> BS Information Technology</p>
        <p><b>IT Experience:</b> HTML, CSS, JavaScript, Vue</p>
      </div>

      <div class="box">
        <p><b>Hobbies:</b> Coding, Music, Gaming</p>
        <p><b>Goal:</b> Improve as a developer</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section{
  background: var(--lavender);
  padding: 22px 16px;
  margin: 18px 0;
}

.wrap{
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.box{
  background: #fff;
  border: 4px solid var(--purple);
  padding: 14px 16px;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.box p{
  margin: 6px 0;
}
</style>