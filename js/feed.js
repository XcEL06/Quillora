// js/feed.js
import { supabase } from "./app.js";

const feedContainer = document.getElementById("feed");

async function loadFeed() {
  const { data } = await supabase
    .from("posts")
    .select("content, created_at");

  feedContainer.innerHTML = "";
  data.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<p>${post.content}</p><small>${new Date(post.created_at).toLocaleString()}</small>`;
    feedContainer.appendChild(div);
  });
}

loadFeed();
