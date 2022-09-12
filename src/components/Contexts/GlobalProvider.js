import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobal() {
  return useContext(GlobalContext);
}
export default function GlobalProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const value = {currentUser}

  return <GlobalContext.Provider value={...value}>{children}</GlobalContext.Provider>;
}
