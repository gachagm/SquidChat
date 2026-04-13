function addMessage(msg) {
  const div = document.getElementById("chat");

  const el = document.createElement("div");
  el.className = "message";

  el.innerHTML = `<b>${msg.user}</b>: ${msg.text}`;

  div.appendChild(el);
  div.scrollTop = div.scrollHeight;
}
