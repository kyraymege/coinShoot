import firebase from "firebase";

const firebaseConfig = {
    apiKey: "***********************************",
    authDomain: "***********************************",
    projectId: "***********************************",
    storageBucket: "***********************************",
    messagingSenderId: "***********************************",
    appId: "***********************************",
    measurementId: "***********************************",
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();


  export { db, auth,app };
