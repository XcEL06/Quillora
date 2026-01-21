// js/profile.js
import { supabase } from "./app.js";

const nameEl = document.getElementById("profileName");

async function loadProfile() {
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    nameEl.textContent = data.user.email;
  }
}

loadProfile();
