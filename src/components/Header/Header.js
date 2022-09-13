import React from "react";
import { ManageAccount } from "../ManageAccount/ManageAccount";
import { useGlobal } from "../Contexts/GlobalProvider";
import IMG__SAILINGSHIP from "./../../Assets/sailing-ship.png";

export default function Header() {
  const { currentUser, setCurrentUser } = useGlobal();

  return (
    <div className="Header">
      <h1 className="Header__title"> VIMEO SEARCHER</h1>
      <img
        className="Header__icon"
        src={IMG__SAILINGSHIP}
        alt="SAILING SHIP ICON"
      />
      {/* <ManageAccount loggedUser={currentUser} setLoggedUser={setCurrentUser} /> */}
    </div>
  );
}
