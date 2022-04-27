import React from "react";
import { Playlist } from "./Playlist";

export const Playlists = () => {
  return (
    <div className="Playlists">
      <button className="Button">Add new playlist</button>
      <Playlist />
    </div>
  );
};
