// js/gallery.js
import { supabase } from "./app.js";

const uploadInput = document.getElementById("upload");
const gallery = document.getElementById("gallery");

uploadInput?.addEventListener("change", async () => {
  const file = uploadInput.files[0];
  const filePath = `gallery/${Date.now()}_${file.name}`;

  await supabase.storage.from("gallery").upload(filePath, file);

  const url = supabase.storage.from("gallery").getPublicUrl(filePath).data.publicUrl;
  saveOffline(url);
  renderImage(url);
});

function renderImage(url) {
  const img = document.createElement("img");
  img.src = url;
  gallery.appendChild(img);
}

// Offline saving
function saveOffline(url) {
  let offline = JSON.parse(localStorage.getItem("gallery")) || [];
  offline.push(url);
  localStorage.setItem("gallery", JSON.stringify(offline));
}
