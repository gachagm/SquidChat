import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onChildAdded
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa4Uk3cHjZWVcRBbNsi3rYYoW-WGXQub4",
  authDomain: "squidchat-chatrooms-ea3cf.firebaseapp.com",
  projectId: "squidchat-chatrooms-ea3cf",
  databaseURL: "https://squidchat-chatrooms-ea3cf-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.fb = {
  db,
  ref,
  push,
  onChildAdded
};
