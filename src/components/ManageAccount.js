import React, { useState } from "react";

export const ManageAccount = ({ loggedUser, setLoggedUser, setPlaylists }) => {
  const [isIsMakeAccForm, setIsMakeAccForm] = useState(false);
  const [isIsLoginForm, setIsLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onLoginSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const loggedUser = users.find(
      (user) => user.name === username && user.password === password
    );
    if (users && loggedUser) {
      users.shift();
      users.unshift({ loggedUser: loggedUser });
      localStorage.setItem("users", JSON.stringify(users));
      setLoggedUser(loggedUser);
    }
  }
  function onMakeAccSubmit() {
    console.log("make acc submit");
    const users = JSON.parse(localStorage.getItem("users"));
  }
  function displayMakeAccForm() {
    return (
      <div>
        <div>Make a new account.</div>
        <form onSubmit={() => onMakeAccSubmit()}>
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
        <button onClick={() => setIsMakeAccForm(false)}>Exit</button>
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
        <button
          onClick={() => {
            {
              localStorage.removeItem("loggedUser");
              setLoggedUser(undefined);
            }
          }}
        >
          Log out
        </button>
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
