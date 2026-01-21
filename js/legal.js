// js/legal.js
document.getElementById("accept")?.addEventListener("click", () => {
  localStorage.setItem("legalAccepted", "true");
  history.back();
});
