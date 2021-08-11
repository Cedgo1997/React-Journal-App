import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCSr8xrCP55jfKHLElOO3RYFDr0c5oOV0A',
	authDomain: 'journal-app-f7277.firebaseapp.com',
	projectId: 'journal-app-f7277',
	storageBucket: 'journal-app-f7277.appspot.com',
	messagingSenderId: '725594399567',
	appId: '1:725594399567:web:9f4fe1e1b267e77050db3a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
