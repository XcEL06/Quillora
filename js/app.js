

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://rvmfytutdqaetnqftzhv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bWZ5dHV0ZHFhZXRucWZ0emh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NTM3NDksImV4cCI6MjA4NDIyOTc0OX0.CkjaPzb_j4Q_CHDEO3laH7dizxLENpFmJBy82L4NXwg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🔐 Check user session
supabase.auth.getSession().then(({ data }) => {
  if (!data.session && location.pathname !== "/login.html") {
    console.log("No active session");
  }
});

// 🌗 Dark / Light mode
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.className);
  });
}

// Restore theme
document.body.className = localStorage.getItem("theme") || "";

// 📦 PWA Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

// ✍️ Local AI Writing Assist (simple)
window.aiAssist = function (textAreaId) {
  const textarea = document.getElementById(textAreaId);
  const ideas = [
    "Expand this idea with emotional depth.",
    "Add stronger imagery and metaphors.",
    "Improve flow and clarity.",
    "Make the opening more engaging."
  ];
  textarea.value += "\n\nAI Suggestion: " + ideas[Math.floor(Math.random() * ideas.length)];
};
