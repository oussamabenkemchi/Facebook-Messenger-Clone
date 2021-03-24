import Firebase from "firebase"


const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCM2FEhELarm9MANlZbqwkr8kEypEsU0vA",
    authDomain: "facebook-messenger-clone-39222.firebaseapp.com",
    projectId: "facebook-messenger-clone-39222",
    storageBucket: "facebook-messenger-clone-39222.appspot.com",
    messagingSenderId: "3600058398",
    appId: "1:3600058398:web:d0ca92ca8f174e5561460f",
    measurementId: "G-07BB2QQX6E"
  });

const db = firebaseApp.firestore();

export default db;

