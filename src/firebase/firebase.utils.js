import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8f2U22ULDFXQcUhBSH1fmI9RQ06H2TcE",
  authDomain: "crwn-db-dc821.firebaseapp.com",
  projectId: "crwn-db-dc821",
  storageBucket: "crwn-db-dc821.appspot.com",
  messagingSenderId: "903511130808",
  appId: "1:903511130808:web:b2fceb6e7478455734ea4d",
  measurementId: "G-59FMV4TTFD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
