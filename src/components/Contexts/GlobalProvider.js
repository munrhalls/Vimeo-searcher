import React, { useContext, useState } from "react";
import UsersAPI from "./UsersAPI";
import VimeoAPI from "./VimeoAPI";

const GlobalContext = React.createContext();

export function useGlobal() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading, ...UsersAPI(), ...VimeoAPI() };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
