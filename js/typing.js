import { supabase } from "./app.js";

const input = document.getElementById("messageInput");
const indicator = document.getElementById("typingStatus");

let user;

(async () => {
  user = (await supabase.auth.getUser()).data.user;
})();

input?.addEventListener("input", async () => {
  await supabase.from("typing").upsert({
    user_id: user.id,
    is_typing: true
  });
});

supabase
  .channel("typing")
  .on("postgres_changes", { event: "*", table: "typing" }, payload => {
    if (payload.new.is_typing) {
      indicator.textContent = "Someone is typing...";
      setTimeout(() => indicator.textContent = "", 1500);
    }
  })
  .subscribe();
