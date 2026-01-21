window.smartAssist = function (id) {
  const el = document.getElementById(id);
  const text = el.value;

  if (text.length < 30) {
    el.value += "\n\nTry expanding your idea with emotion.";
  } else if (text.includes("I")) {
    el.value += "\n\nConsider varying sentence structure.";
  } else {
    el.value += "\n\nThis piece could benefit from imagery.";
  }
};
