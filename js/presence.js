import { supabase } from "./app.js";

async function updatePresence(online) {
  const user = (await supabase.auth.getUser()).data.user;
  await supabase.from("presence").upsert({
    user_id: user.id,
    online,
    last_seen: new Date()
  });
}

window.addEventListener("load", () => updatePresence(true));
window.addEventListener("beforeunload", () => updatePresence(false));
