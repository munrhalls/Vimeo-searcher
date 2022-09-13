import React, { useContext, useState } from "react";
import UsersAPI from "./UsersAPI";
import { Loader } from "../Loader/Loader";

const GlobalContext = React.createContext();

export function useGlobal() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading, ...UsersAPI() };
  return (
    <GlobalContext.Provider value={value}>
      <Loader active={isLoading}>{children}</Loader>
    </GlobalContext.Provider>
  );
}
