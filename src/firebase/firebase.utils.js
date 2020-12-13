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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt =  new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      })
    } catch (err) {
      console.error('ERROR CREATING USER', err.message);
    }
  }

  return userRef;
};

export default firebase;
