import React, { useState } from "react";

export const ManageAccount = ({ isUserLoggedIn, setPlaylists }) => {
  const [isForm, setIsForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function toggleAccForm() {}
  function onSubmit() {}

  function displayForm() {
    return (
      <form onSubmit={onSubmit}>
        <input
          value={username}
          placeholder="Username..."
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password..."
          value={password}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
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
      return displayLogged();
    }
    if (!isUserLoggedIn && !isForm) {
      return displayUnlogged();
    }
    if (!isUserLoggedIn && isForm) {
      return displayForm();
    }
  }
  return <>{manageAccDisplay()}</>;
};
