<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDlEfOTljgXRZQfn7bH-zoe1LvwdfBeXnk",
    authDomain: "shortcut-game-4f176.firebaseapp.com",
    projectId: "shortcut-game-4f176",
    storageBucket: "shortcut-game-4f176.firebasestorage.app",
    messagingSenderId: "348992155481",
    appId: "1:348992155481:web:6e4890ed6d26274173e648",
    measurementId: "G-TR0NML50HL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>