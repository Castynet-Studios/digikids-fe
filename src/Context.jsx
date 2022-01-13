import React, { useContext, useState } from "react";

const Context = React.createContext();

export function useApp() {
  return useContext(Context);
}

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        user,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
