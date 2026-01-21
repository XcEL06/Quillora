// js/jobs.js
import { supabase } from "./app.js";

const jobsContainer = document.getElementById("jobs");
const jobForm = document.getElementById("jobForm");

async function loadJobs() {
  const { data } = await supabase.from("jobs").select("*").order("created_at", { ascending: false });

  jobsContainer.innerHTML = "";
  data.forEach(job => {
    jobsContainer.innerHTML += `
      <div class="job">
        <h3>${job.title}</h3>
        <p>${job.description}</p>
      </div>
    `;
  });
}

jobForm?.addEventListener("submit", async e => {
  e.preventDefault();
  const title = jobForm.title.value;
  const description = jobForm.description.value;

  const user = (await supabase.auth.getUser()).data.user;

  await supabase.from("jobs").insert({
    title,
    description,
    user_id: user.id
  });

  jobForm.reset();
  loadJobs();
});

loadJobs();
