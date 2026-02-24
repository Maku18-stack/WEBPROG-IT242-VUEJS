<template>
  <section class="comments">
    <h2 class="comments-title">Comments</h2>

    <div class="comments-layout">
      <!-- LEFT: displayed comments -->
      <div class="comments-list">
        <div v-for="c in comments" :key="c.id" class="comment-card">
          <strong class="comment-name">{{ c.name }}</strong>
          <p class="comment-text">{{ c.comment }}</p>
        </div>

        <p v-if="!loading && comments.length === 0" class="empty">
          No comments yet.
        </p>
      </div>

      <!-- RIGHT: form box -->
      <form class="comment-box" @submit.prevent="submitComment">
        <h3 class="box-title">Leave a Comment</h3>

        <label class="label">Name:</label>
        <input v-model.trim="name" class="input" required />

        <label class="label">Comment:</label>
        <textarea v-model.trim="comment" class="textarea" required></textarea>

        <button class="btn" type="submit" :disabled="loading">
          {{ loading ? "Submitting..." : "Submit" }}
        </button>

        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const comments = ref([]);
const name = ref("");
const comment = ref("");
const loading = ref(false);
const errorMsg = ref("");

async function loadComments() {
  loading.value = true;
  errorMsg.value = "";

  const { data, error } = await supabase
    .from("comments")
    .select("id,name,comment")
    .order("id", { ascending: false });

  loading.value = false;

  if (error) {
    errorMsg.value = error.message;
    return;
  }

  comments.value = data ?? [];
}

async function submitComment() {
  loading.value = true;
  errorMsg.value = "";

  const { error } = await supabase.from("comments").insert([
    { name: name.value, comment: comment.value },
  ]);

  loading.value = false;

  if (error) {
    errorMsg.value = error.message;
    return;
  }

  name.value = "";
  comment.value = "";
  await loadComments();
}

onMounted(loadComments);
</script>

<style scoped>
.comments-title{
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.2px;
  text-align: center;
}

.comments-layout{
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 18px;
  align-items: start;
}

.comments-list{
  display: grid;
  gap: 12px;
}

.comment-card{
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 14px;
  padding: 12px;
}

.comment-name{
  display: block;
  font-size: 14px;
}

.comment-text{
  margin: 6px 0 0;
  font-size: 13px;
  color: rgba(229,231,235,0.85);
  white-space: pre-wrap;
}

.empty{
  font-size: 13px;
  color: rgba(229,231,235,0.7);
}

.comment-box{
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 14px;
  padding: 12px;
}

.box-title{
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 800;
}

.label{
  display: block;
  margin: 8px 0 4px;
  font-size: 12px;
  color: rgba(229,231,235,0.75);
}

.input, .textarea{
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 10px;
  padding: 10px 10px;
  background: rgba(0,0,0,0.25);
  color: rgba(229,231,235,0.95);
  outline: none;
}

.textarea{ min-height: 90px; resize: vertical; }

.btn{
  margin-top: 10px;
  width: 100%;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 10px;
  padding: 10px 12px;
  background: #fff;
  color: #111;
  font-weight: 700;
  cursor: pointer;
}

.btn:disabled{ opacity: .6; cursor: not-allowed; }

.error{
  margin: 10px 0 0;
  font-size: 12px;
  color: #ffb4b4;
}

/* responsive (mobile) */
@media (max-width: 820px){
  .comments-layout{ grid-template-columns: 1fr; }
}
</style>