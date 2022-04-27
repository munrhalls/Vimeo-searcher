import React from "react";

export const Playlist = ({ playlist }) => {


  return (
    <button className="Button">
      {playlist.name}
    </button>
  );
};
