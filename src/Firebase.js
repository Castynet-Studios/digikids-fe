import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  browserSessionPersistence,
  setPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqmNGpmar0vLHgP-d39aIAaTnAUMtsqvI",
  authDomain: "digikids.firebaseapp.com",
  projectId: "digikids",
  storageBucket: "digikids.appspot.com",
  messagingSenderId: "794892226304",
  appId: "1:794892226304:web:276f23b5966b141fee2de5",
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebase = {
  authProvider: new GoogleAuthProvider(),
  auth: getAuth(firebaseApp),
  firestore: getFirestore(firebaseApp),
  storage: getStorage(),
  signInWithRedirect: () => signInWithRedirect(this.authProvider, this.auth),
  setPersistence: () => setPersistence(browserSessionPersistence, this.auth),
  cUsrWithEAndP: (e, p) => createUserWithEmailAndPassword(this.auth, e, p),
  sInWithEAndP: (e, p) => signInWithEmailAndPassword(this.auth, e, p),
  signOut: () => signOut(this.auth),
};
