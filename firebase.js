const firebaseConfig = {
  apiKey: "AIzaSyAa4Uk3cHjZWVcRBbNsi3rYYoW-WGXQub4",
  authDomain: "squidchat-chatrooms-ea3cf.firebaseapp.com",
  databaseURL: "https://squidchat-chatrooms-ea3cf-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "squidchat-chatrooms-ea3cf"
  storageBucket: "squidchat-chatrooms-ea3cf.firebasestorage.app",
  messagingSenderId: "149200968301",
  appId: "1:149200968301:web:2f4ca325229d23c6f53d64"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
