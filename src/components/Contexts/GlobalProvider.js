import React, { useContext, useState } from "react";
import UsersAPI from "./UsersAPI";

const GlobalContext = React.createContext();

export function useGlobal() {
  return useContext(GlobalContext);
}

export default function GlobalProvider({ children }) {
  const value = { ...UsersAPI() };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
