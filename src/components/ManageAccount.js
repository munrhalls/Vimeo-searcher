import React, { useState } from "react";

export const ManageAccount = ({ isUserLoggedIn, setPlaylists }) => {
  const [isForm, setIsForm] = useState(false);
  function toggleAccForm() {}
  function onSubmit() {}

  function displayForm() {
    return (
      <form onSubmit={onSubmit}>
        <input placeholder="Username..." type="text" />
        <input placeholder="Password..." type="text" />
        <input type="submit" />
      </form>
    );
  }
  function displayUnlogged() {
    return (
      <div>
        <button onClick={() => setIsForm(true)}>Make an account</button>
        <span>No e-mail registration required!</span>
      </div>
    );
  }
  function displayLogged() {
    return <div>Welcome Username</div>;
  }
  function manageAccDisplay() {
    if (isUserLoggedIn) {
      displayLogged();
    }
    if (!isUserLoggedIn && !isForm) {
      displayUnlogged();
    }
    if (!isUserLoggedIn && isForm) {
      displayForm();
    }
  }
  return <>{manageAccDisplay()}</>;
};
