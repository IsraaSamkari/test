import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp({
  apiKey: "AIzaSyCPFmtE5l8DczGw0jIMZrpRN9QJLTAo_ik",
  authDomain: "csarabwebdictionary.firebaseapp.com",
  projectId: "csarabwebdictionary",
  storageBucket: "csarabwebdictionary.appspot.com",
  messagingSenderId: "905515642923",
  appId: "1:905515642923:web:9253159ffb81f6b5587a6e",
  measurementId: "G-YLPTXT2T81"
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


var email="aaa@hotmail.com";
var password="123456";
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
	console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	console.log(errorCode);
    console.log(errorMessage);
  });

