import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1F_0jxkpXIR0MjSDHgd1ycB0WYfeqoU8",
    authDomain: "discord-im.firebaseapp.com",
    databaseURL: "https://discord-im.firebaseio.com",
    projectId: "discord-im",
    storageBucket: "discord-im.appspot.com",
    messagingSenderId: "1052062594683",
    appId: "1:1052062594683:web:95759fcc3df968e0f254de",
    measurementId: "G-Q8MEXNWS0D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }; 
  export default db; 