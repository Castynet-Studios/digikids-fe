import { firebase } from "FirebaseController";

export const getUser = async () => {
  const user = new Promise((resolve, reject) => {
    firebase.onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        resolve(user);
      } else reject(new Error("The user is not logged in"));
    });
  });
  return await user;
};

export const getProfile = async (user) => {};
