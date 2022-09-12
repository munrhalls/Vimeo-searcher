import React, { useState } from "react";

export default function UsersAPI() {
  const [currentUser, setCurrentUser] = useState(null);

  function determineLoggedStatus() {
    const logged = localStorage.getItem("logged");
    if (logged) {
      setCurrentUser(JSON.parse(logged));
    }
  }

  const value = {
    determineLoggedStatus,
    currentUser,
    setCurrentUser,
  };

  return value;
}
