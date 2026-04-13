let currentRoom = "lobby";

function switchRoom(room) {
  currentRoom = room;
  document.getElementById("chat").innerHTML = "";
}

function send() {
  const user = document.getElementById("username").value || "Inkling";
  const text = document.getElementById("msg").value;

  if (!text) return;

  window.fb.push(
    window.fb.ref(window.fb.db, "messages"),
    {
      user,
      text,
      room: currentRoom,
      time: Date.now()
    }
  );

  document.getElementById("msg").value = "";
}

// RECEIVE MESSAGES
window.fb.onChildAdded(
  window.fb.ref(window.fb.db, "messages"),
  (snap) => {
    const msg = snap.val();

    if (msg.room === currentRoom) {
      addMessage(msg);
    }
  }
);
