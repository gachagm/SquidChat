let currentRoom = "lobby";

// Raum wechseln
function switchRoom(room) {
  currentRoom = room;
  document.getElementById("chat").innerHTML = "";
}

// Nachricht senden
function send() {
  const user = document.getElementById("username").value || "Inkling";
  const text = document.getElementById("msg").value;

  if (!text) return;

  db.ref("messages").push({
    user,
    text,
    room: currentRoom,
    time: Date.now()
  });

  document.getElementById("msg").value = "";
}

// Nachrichten laden
db.ref("messages").on("child_added", snap => {
  const msg = snap.val();

  if (msg.room === currentRoom) {
    addMessage(msg);
  }
});
