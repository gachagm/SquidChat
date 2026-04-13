const firebaseConfig = {
  apiKey: "AIzaSyAa4Uk3cHjZWVcRBbNsi3rYYoW-WGXQub4",
  authDomain: "squidchat-chatrooms-ea3cf.firebaseapp.com",
  databaseURL: "https://squidchat-chatrooms-ea3cf-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "squidchat-chatrooms-ea3cf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
