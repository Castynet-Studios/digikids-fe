import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  browserSessionPersistence,
  setPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
const authProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const firebase = {
  auth: getAuth(firebaseApp),

  signInWithRedirect: () => signInWithRedirect(this.auth, authProvider),
  setPersistence: () => setPersistence(this.auth, browserSessionPersistence),
  cUsrWithEAndP: (e, p) => createUserWithEmailAndPassword(this.auth, e, p),
  sInWithEAndP: (e, p) => signInWithEmailAndPassword(this.auth, e, p),
  signOut: () => signOut(this.auth),

  onAuthStateChanged,
};
