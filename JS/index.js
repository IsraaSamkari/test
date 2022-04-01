import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

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




export function moduleSignIn(){
	var email= document.getElementById("username").value;
	var password= document.getElementById("password").value;
	console.log(password);
	
  
  signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		console.log("has email");
		// ...
	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log("error code");
		console.log("errorMessage");
	});
}

