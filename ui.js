function addMessage(msg) {
  const chat = document.getElementById("chat");

  const el = document.createElement("div");
  el.className = "message";

  el.innerHTML = `<b>${msg.user}</b><br>${msg.text}`;

  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
}
