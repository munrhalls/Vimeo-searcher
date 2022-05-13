import React, { useState } from "react";

export const ManageAccount = ({ isUserLoggedIn, setPlaylists }) => {
  const [isForm, setIsForm] = useState(false);
  function toggleAccForm() {}
  function onSubmit() {}
  function manageAccDisplay() {
    if (isUserLoggedIn) {
      console.log("set user playlists");
      return <div>Welcome Username</div>;
    }
    if (!isUserLoggedIn && !isForm) {
      return (
        <div>
          <button onClick={() => setIsForm(true)}>Make an account</button>
          <span>No e-mail registration required!</span>
        </div>
      );
    }
    if (!isUserLoggedIn && isForm) {
      return (
        <form onSubmit={onSubmit}>
          <input type="submit" />
        </form>
      );
    }
  }
  return <>{manageAccDisplay()}</>;
};
