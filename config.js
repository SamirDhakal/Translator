import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC3JAlIzd5n-aXwsKZT877XbT9Gj3T0eps",
    authDomain: "translator-a27e5.firebaseapp.com",
    projectId: "translator-a27e5",
    storageBucket: "translator-a27e5.appspot.com",
    messagingSenderId: "478715097452",
    appId: "1:478715097452:web:6d0e78488da903550f8349"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();