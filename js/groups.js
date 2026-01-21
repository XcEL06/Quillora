// js/groups.js
import { supabase } from "./app.js";

const groupForm = document.getElementById("groupForm");
const groupsList = document.getElementById("groups");

async function loadGroups() {
  const { data } = await supabase.from("groups").select("*");

  groupsList.innerHTML = "";
  data.forEach(group => {
    groupsList.innerHTML += `
      <div class="group">
        <h4>${group.name}</h4>
        <p>${group.description}</p>
      </div>
    `;
  });
}

groupForm?.addEventListener("submit", async e => {
  e.preventDefault();
  const name = groupForm.name.value;
  const description = groupForm.description.value;

  const user = (await supabase.auth.getUser()).data.user;

  await supabase.from("groups").insert({
    name,
    description,
    user_id: user.id
  });

  groupForm.reset();
  loadGroups();
});

loadGroups();
