import { firebase } from "FirebaseController";

const filterUser = (data) => {
  const user = data.user;
  if (user) {
    const { displayName, email, photoURL, uid } = user;
    const userData = {
      displayName,
      email,
      photoURL,
      uid,
    };
    return userData;
  } else return null;
};

export async function signInWithRedirect() {
  firebase.setPersistence();
  firebase.signInWithRedirect();
  return { status: "redirected" };
}

export function signOut() {
  firebase.auth.signOut();
  window.location.reload();
}

export async function cUsrWithEAndP(email, password) {
  const persist = await firebase.auth.setPersistence();
  const result = await persist(firebase.cUsrWithEAndP(email, password));
  const userData = filterUser(result);
  return userData;
}

export async function sInWithEAndP(email, password) {
  const persist = await firebase.auth.setPersistence();
  const result = await persist(firebase.sInWithEAndP(email, password));
  const userData = filterUser(result);
  return userData;
}
