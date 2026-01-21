// js/messages.js
import { supabase } from "./app.js";

const messagesBox = document.getElementById("messages");
const form = document.getElementById("messageForm");

let user;

async function init() {
  user = (await supabase.auth.getUser()).data.user;
  loadMessages();

  supabase
    .channel("messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      payload => renderMessage(payload.new)
    )
    .subscribe();
}

async function loadMessages() {
  const { data } = await supabase
    .from("messages")
    .select("*")
    .order("created_at");

  messagesBox.innerHTML = "";
  data.forEach(renderMessage);
}

function renderMessage(msg) {
  const div = document.createElement("div");
  div.className = msg.sender_id === user.id ? "sent" : "received";
  div.textContent = msg.message;
  messagesBox.appendChild(div);
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  const text = form.message.value;

  await supabase.from("messages").insert({
    sender_id: user.id,
    message: text
  });

  form.reset();
});

init();
