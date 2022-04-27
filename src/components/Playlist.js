import React, { useState } from "react";

export const Playlist = ({ playlist, setPlaylistItems }) => {
  return (
    <button className="Button" onClick={() => setPlaylistItems(playlist.items)}>
      {playlist.name}
    </button>
  );
};
