// js/signup.js
import { supabase } from "./app.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }
    }
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Check your email to verify your account.");
    window.location.href = "login.html";
  }
});
