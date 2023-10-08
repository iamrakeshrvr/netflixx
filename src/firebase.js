import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZZT2KPXslVDwz4-eFSEMvEeIVDu3tMJ8",
    authDomain: "netflix-clone-d75ce.firebaseapp.com",
    projectId: "netflix-clone-d75ce",
    storageBucket: "netflix-clone-d75ce.appspot.com",
    messagingSenderId: "476032377714",
    appId: "1:476032377714:web:4bbea587804b2819baf3eb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;