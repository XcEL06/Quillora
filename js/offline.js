const db = indexedDB.open("quillora", 1);

db.onupgradeneeded = e => {
  const store = e.target.result.createObjectStore("offline", { autoIncrement: true });
};

function saveOfflinePost(post) {
  const tx = db.result.transaction("offline", "readwrite");
  tx.objectStore("offline").add(post);
}
