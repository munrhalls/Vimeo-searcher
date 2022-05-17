import React, { useState } from "react";

export const ManageAccount = ({ loggedUser, setLoggedUser, setPlaylists }) => {
  const [isIsMakeAccForm, setIsMakeAccForm] = useState(false);
  const [isIsLoginForm, setIsLoginForm] = useState(false);
  const [formError, setFormError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onLoginSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const userLogged = users.find(
      (user) => user.name === username && user.password === password
    );
    if (users && userLogged) {
      localStorage.setItem("loggedUser", JSON.stringify(userLogged));
      setLoggedUser(userLogged);
    }
  }
  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("loggedUser");
    setLoggedUser(undefined);
  }
  function onMakeAccSubmit(e) {
    e.preventDefault(e);
    const users = JSON.parse(localStorage.getItem("users"));
    if ([...users.filter((user) => user.name === username)].length) {
      setFormError(
        "Account with this name already exists. Please choose a different name."
      );
    } else if (password.length < 3 || password.length > 24) {
      setFormError(
        "Password is a bit too short. Please make it at least 3 characters long, and not longer than 24 characters."
      );
    } else {
      users.push({ name: username, password: password });
      users.unshift(
        JSON.stringify({ logged: { name: username, password: password } })
      );
      localStorage.setItem("users", JSON.stringify(users));
      setLoggedUser({ name: username, password: password });
      setIsMakeAccForm(false);
    }
  }
  function displayMakeAccForm() {
    return (
      <div>
        <div>Make a new account.</div>
        <form onSubmit={(e) => onMakeAccSubmit(e)}>
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
        {formError ? <div className="FormError">{formError}</div> : ""}
        <button
          onClick={() => {
            setIsMakeAccForm(false);
            setFormError("");
          }}
        >
          Exit
        </button>
      </div>
    );
  }
  function displayLoginForm() {
    return (
      <div>
        <form onSubmit={(e) => onLoginSubmit(e)}>
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
        <div>
          No account? Make a new one in 5 seconds.{" "}
          <button
            onClick={() => {
              setIsLoginForm(false);
              setIsMakeAccForm(true);
            }}
          >
            Make account
          </button>
        </div>
        <button onClick={() => setIsLoginForm(false)}>Exit</button>
      </div>
    );
  }
  function displayUnlogged() {
    return (
      <>
        <div>
          <div>
            <button onClick={() => setIsMakeAccForm(true)}>
              Make an account
            </button>
            <span>No e-mail registration required!</span>
          </div>
          <button onClick={() => setIsLoginForm(true)}>Log in</button>
        </div>
      </>
    );
  }
  function displayLogged() {
    return (
      <div>
        Welcome{" "}
        <span style={{ fontWeight: "bold", letterSpacing: "1px" }}>
          {username}!
        </span>
        <button onClick={(e) => logOut(e)}>Log out</button>
      </div>
    );
  }
  function manageAccDisplay() {
    if (loggedUser) {
      return displayLogged();
    }
    if (!loggedUser && !isIsMakeAccForm && !isIsLoginForm) {
      return displayUnlogged();
    }
    if (!loggedUser && isIsMakeAccForm) {
      return displayMakeAccForm();
    }
    if (!loggedUser && isIsLoginForm) {
      return displayLoginForm();
    }
  }
  return <>{manageAccDisplay()}</>;
};
