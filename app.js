let currentRoom = "lobby";

const config = {
  apiKey: "DEIN_KEY",
  databaseURL: "DEINE_URL"
};

firebase.initializeApp(config);
const db = firebase.database();

function switchRoom(room) {
  currentRoom = room;
  document.getElementById("chat").innerHTML = "";
  loadMessages();
}

function send() {
  const user = document.getElementById("username").value || "Inkling";
  const text = document.getElementById("msg").value;

  db.ref("messages").push({
    room: currentRoom,
    user: user,
    text: text
  });
}

function loadMessages() {
  db.ref("messages").on("child_added", snap => {
    const msg = snap.val();

    if (msg.room === currentRoom) {
      const div = document.getElementById("chat");

      div.innerHTML += `
        <div class="message">
          <b>${msg.user}:</b> ${msg.text}
        </div>
      `;
    }
  });
}

loadMessages();
