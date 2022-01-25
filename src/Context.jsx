import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, usr } from "adapters";

const Context = React.createContext();

export const useApp = () => useContext(Context);

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    (async function () {
      try {
        const user = await usr.getUser();
        navigate("/");
        setUser(user);
        getUserProfile(user);
      } catch (error) {
        if (!pathname.includes("auth")) navigate("auth");
      }
    })();
  }, [navigate, pathname]);

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

  const getUserProfile = async (user) => {
    const userProfile = await usr.getProfile(user);
    console.log(userProfile);
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
