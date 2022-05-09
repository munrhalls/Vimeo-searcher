import React from "react";
import { Playlist } from "./Playlist";

export const Playlists = ({ playlists, addPlaylist, togglePlaylist }) => {
  return (
    <div className="Playlists">
      <button className="Button" onClick={() => addPlaylist()}>
        Add new playlist
      </button>
      {playlists
        ? playlists.map((playlist) => {
            return (
              <Playlist
                key={Math.random()}
                playlist={playlist}
                onClick={() => togglePlaylist(playlist)}
              />
            );
          })
        : ""}
    </div>
  );
};
