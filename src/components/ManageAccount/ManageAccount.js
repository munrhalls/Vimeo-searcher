import React, { useState } from "react";

export const ManageAccount = ({ loggedUser, setLoggedUser }) => {
  const [isIsMakeAccForm, setIsMakeAccForm] = useState(false);
  const [isIsLoginForm, setIsLoginForm] = useState(false);
  const [isEditAccForm, setIsEditAccForm] = useState(false);
  const [isDelAccForm, setIsDelAccForm] = useState(false);
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
      localStorage.setItem("logged", JSON.stringify(userLogged));
      setLoggedUser(userLogged);
    }
    if (users && !userLogged) {
      setFormError(
        "Username or password you entered do not match. Please enter proper username and password."
      );
    }
  }

  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("logged");
    setLoggedUser(undefined);
  }

  function onDelAccSubmit(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    users = users.filter(
      (user) =>
        user.name !== loggedUser.name && user.password !== loggedUser.password
    );
    localStorage.setItem("logged", null);
    localStorage.setItem("users", JSON.stringify(users));
    setLoggedUser(undefined);
    setIsEditAccForm(false);
    setIsDelAccForm(false);
    setFormError("");
  }

  function onEditAccSubmit(e) {
    e.preventDefault(e);
    if (loggedUser) {
      const users = JSON.parse(localStorage.getItem("users"));
      const user = users.find(
        (user) =>
          user.name === loggedUser.name && user.password === loggedUser.password
      );
      if ([...users.filter((user) => user.name === username)].length) {
        setFormError(
          "Account with this name already exists. Please choose a different name."
        );
      } else if (password.length < 3 || password.length > 24) {
        setFormError(
          "Password is a bit too short. Please make it at least 3 characters long, and not longer than 24 characters."
        );
      } else {
        user.name = username;
        user.password = password;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged", JSON.stringify(user));
        setLoggedUser(user);
        setIsEditAccForm(false);
      }
    }
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
        <div className="MakeAccount">Make a new account.</div>
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
        {formError ? <div>{formError}</div> : ""}
        <div>
          No account? Make a new one in 5 seconds.{" "}
          <button
            onClick={() => {
              setFormError("");
              setIsLoginForm(false);
              setIsMakeAccForm(true);
            }}
          >
            Make account
          </button>
        </div>
        <button
          onClick={() => {
            setFormError("");
            setIsLoginForm(false);
          }}
        >
          Exit
        </button>
      </div>
    );
  }

  function displayEditAccForm() {
    return (
      <div>
        <form onSubmit={(e) => onEditAccSubmit(e)}>
          <label>Edit account name:</label>
          <input
            value={username}
            placeholder="Username..."
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Edit password:</label>
          <input
            placeholder="Password..."
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEditAccForm(false);
              setFormError("");
              setIsDelAccForm(true);
            }}
          >
            Delete account
          </button>
          <input type="submit" />
        </form>
        {formError ? <div>{formError}</div> : ""}
        <button onClick={() => setIsEditAccForm(false)}>Exit</button>
      </div>
    );
  }


  function displayDelAccForm() {
    return (
      <form onSubmit={(e) => onDelAccSubmit(e)}>
        <div>Username: {loggedUser.name}</div>
        <div>Password: {loggedUser.password}</div>
        <label>This action will delete this account. Are you sure?</label>
        <button
          onClick={(e) => {
            setIsDelAccForm(false);
            setIsEditAccForm(true);
          }}
        >
          Go back
        </button>
        <input type="submit" />
      </form>
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
          {loggedUser.name}!
        </span>
        <button onClick={() => setIsEditAccForm(true)}>Edit account</button>
        <button onClick={(e) => logOut(e)}>Log out</button>
      </div>
    );
  }
  function manageAccDisplay() {
    if (loggedUser && !isEditAccForm) {
      return displayLogged();
    }
    if (loggedUser && isDelAccForm) {
      return displayDelAccForm();
    }
    if (loggedUser && isEditAccForm) {
      return displayEditAccForm();
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
