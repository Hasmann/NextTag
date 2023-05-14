import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBYw6cXxmbo4sKjkJczEBiP7UJmvoy8rE",
  authDomain: "react-frontend-ecomm.firebaseapp.com",
  projectId: "react-frontend-ecomm",
  storageBucket: "react-frontend-ecomm.appspot.com",
  messagingSenderId: "280630284469",
  appId: "1:280630284469:web:93838b4b0eec992a47eefc",
  measurementId: "G-4PB6E2QCRN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, otherOptions) => {
  if (!userAuth) return;

  const checkUser = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await checkUser.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await checkUser.set({
        displayName,
        email,
        createdAt,
        ...otherOptions,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return checkUser;
};

export default firebase;
