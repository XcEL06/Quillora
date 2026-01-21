// js/settings.js
import { supabase } from "./app.js";

document.getElementById("changeEmail")?.addEventListener("submit", async e => {
  e.preventDefault();
  const email = e.target.email.value;
  await supabase.auth.updateUser({ email });
  alert("Email updated");
});

document.getElementById("changePassword")?.addEventListener("submit", async e => {
  e.preventDefault();
  const password = e.target.password.value;
  await supabase.auth.updateUser({ password });
  alert("Password updated");
});
