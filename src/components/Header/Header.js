import React from "react";
import { ManageAccount } from "../ManageAccount";
import { useGlobal } from "../Contexts/GlobalProvider";

export default function Header() {
  const { currentUser, setCurrentUser } = useGlobal();

  return (
    <div className="Header">
      <h1 className="Header__title"> VIMEO SEARCHER</h1>
      <ManageAccount loggedUser={currentUser} setLoggedUser={setCurrentUser} />
    </div>
  );
}
