import React, { useContext } from "react";

const Context = React.createContext();

export function useApp() {
  return useContext(Context);
}

export const StateProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
