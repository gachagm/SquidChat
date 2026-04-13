let currentRoom = "lobby";

function switchRoom(room) {
  currentRoom = room;
  document.getElementById("chat").innerHTML = "";
}

function send() {
  const user = document.getElementById("username").value || "Inkling";
  const text = document.getElementById("msg").value;

  db.ref("messages").push({
    room: currentRoom,
    user,
    text,
    time: Date.now()
  });

  document.getElementById("msg").value = "";
}

db.ref("messages").on("child_added", snap => {
  const msg = snap.val();

  if (msg.room === currentRoom) {
    addMessage(msg);
  }
});
