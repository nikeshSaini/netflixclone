document.getElementById('logo').addEventListener('click', function(){
    window.location.href = '/index.html';
});





// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase,set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

 

const firebaseConfig = {
  apiKey: "AIzaSyCU8OkAA83s5aGNfG06AHGJRFxaVoJwrVQ",
  authDomain: "chit-chatflix.firebaseapp.com",
  databaseURL: "https://chit-chatflix-default-rtdb.firebaseio.com",
  projectId: "chit-chatflix",
  storageBucket: "chit-chatflix.appspot.com",
  messagingSenderId: "1049137693517",
  appId: "1:1049137693517:web:9fe5812a4be3c8bea92d04",
  measurementId: "G-LLPRBJ9C07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth(app);

let registerUser = evt => {
  evt.preventDefault();
  
  // Get form field values when the form is submitted
  const email = document.getElementById('signboxEmail').value;
  const password = document.getElementById('signboxPass').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location.href = '/pages/landingPage/landingPage.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);

      
    });

     console.log('Email:', email);
      console.log('Password:', password);
};

loginfire.addEventListener('submit', registerUser);



