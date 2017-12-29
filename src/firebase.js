import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDXQa17Kx8Ua4fakIXDKktAiB1ZA_D__qg",
  authDomain: "smashing-magazine-demo.firebaseapp.com",
  databaseURL: "https://smashing-magazine-demo.firebaseio.com",
  projectId: "smashing-magazine-demo",
  storageBucket: "smashing-magazine-demo.appspot.com",
  messagingSenderId: "489454375328"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();
