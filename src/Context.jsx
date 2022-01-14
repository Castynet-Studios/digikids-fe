import React, { useContext, useState, useEffect } from "react";
import { auth, usr } from "adapters";

const Context = React.createContext();
export const useApp = () => useContext(Context);

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const user = await usr.getUser();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const registerEmail = (email, pass) => {
    try {
      auth.cUsrWithEAndP(email, pass);
    } catch (error) {
      console.log(error);
    }
  };

  const signInEmail = (email, pass) => {
    try {
      auth.sInWithEAndP(email, pass);
    } catch (error) {
      console.log(error);
    }
  };

  const signInGoogle = () => {
    auth.signInWithRedirect();
  };

  const signOut = () => {
    try {
      auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        setIsLoading,
        isLoading,
        registerEmail,
        signInEmail,
        signInGoogle,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};
