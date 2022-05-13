import React from "react";

export const ManageAccount = ({ isUserLoggedIn, setPlaylists }) => {
  function manageAccLogic() {
    if (isUserLoggedIn) {
      console.log("set user playlists");
      return <div>Welcome Username</div>;
    }
    if (!isUserLoggedIn) {
      return (
        <div>
          <button>Make an account</button>
          <span>No e-mail registration required!</span>
        </div>
      );
    }
  }
  return <>{manageAccLogic()}</>;
};
