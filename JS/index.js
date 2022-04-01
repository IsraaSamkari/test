import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCPFmtE5l8DczGw0jIMZrpRN9QJLTAo_ik",
  authDomain: "csarabwebdictionary.firebaseapp.com",
  projectId: "csarabwebdictionary",
  storageBucket: "csarabwebdictionary.appspot.com",
  messagingSenderId: "905515642923",
  appId: "1:905515642923:web:9253159ffb81f6b5587a6e",
  measurementId: "G-YLPTXT2T81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseConfig);

onAuthStateChanged(auth, user => {
	if(user != null){
		console.log('logged in');
	}else{
		console.log('No user');
	}
});
