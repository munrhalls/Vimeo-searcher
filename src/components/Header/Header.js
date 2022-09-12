import React from "react";
import { ManageAccount } from "../ManageAccount";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="Header__title"> VIMEO SEARCHER</h1>
      <ManageAccount
        loggedUser={loggedUser}
        setPlaylists={() => setPlaylists}
        setLoggedUser={setLoggedUser}
      />
    </div>
  );
}
