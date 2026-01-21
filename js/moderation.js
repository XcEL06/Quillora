import { supabase } from "./app.js";

const blockBtn = document.getElementById("blockUser");
const reportBtn = document.getElementById("reportUser");

const viewedUserId = sessionStorage.getItem("viewedUser");

blockBtn?.addEventListener("click", async () => {
  const me = (await supabase.auth.getUser()).data.user;
  await supabase.from("blocks").insert({
    blocker_id: me.id,
    blocked_id: viewedUserId
  });
  alert("User blocked");
});

reportBtn?.addEventListener("click", async () => {
  const reason = prompt("Why are you reporting this user?");
  const me = (await supabase.auth.getUser()).data.user;

  await supabase.from("reports").insert({
    reporter_id: me.id,
    reported_id: viewedUserId,
    reason
  });

  alert("Report submitted");
});
