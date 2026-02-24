<template>
  <div class="wrap">
    <h1 class="title">Visitor Feedback</h1>

    <form class="form" @submit.prevent="submitComment">
      <input v-model.trim="name" class="input" placeholder="Name" required />
      <textarea v-model.trim="comment" class="textarea" placeholder="Comment" required />
      <button class="btn" type="submit" :disabled="loading">
        {{ loading ? "Posting..." : "Post Comment" }}
      </button>
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </form>

    <div class="list">
      <div v-for="c in comments" :key="c.id" class="card">
        <div class="meta">
          <span class="n">{{ c.name }}</span>
          <span class="d">{{ formatDate(c.created_at) }}</span>
        </div>
        <p class="msg">{{ c.comment }}</p>
      </div>
    </div>
  </div>
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
  errorMsg.value = "";
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("id", { ascending: false });

  if (error) errorMsg.value = error.message;
  comments.value = data ?? [];
}

async function submitComment() {
  errorMsg.value = "";
  loading.value = true;

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

function formatDate(v) {
  if (!v) return "";
  return new Date(v).toLocaleString();
}

onMounted(loadComments);
</script>

<style scoped>
.wrap { max-width: 520px; margin: 0 auto; padding: 28px 16px; }
.title { text-align: center; letter-spacing: .5px; margin: 0 0 18px; }
.form { display: grid; gap: 10px; margin-bottom: 18px; }
.input, .textarea {
  width: 100%;
  border: 1px solid #111;
  border-radius: 12px;
  padding: 10px 12px;
  background: #fff;
  color: #111;
}
.textarea { min-height: 90px; resize: vertical; }
.btn {
  border: 1px solid #111;
  border-radius: 12px;
  padding: 10px 12px;
  background: #111;
  color: #fff;
  cursor: pointer;
}
.btn:disabled { opacity: .6; cursor: not-allowed; }
.error { margin: 0; font-size: 12px; }
.list { display: grid; gap: 10px; }
.card { border: 1px solid #111; border-radius: 14px; padding: 12px; }
.meta { display: flex; justify-content: space-between; gap: 10px; font-size: 12px; opacity: .8; }
.msg { margin: 8px 0 0; white-space: pre-wrap; }
</style>