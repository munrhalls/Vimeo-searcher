import React, { useState } from "react";
import { Playlist } from "./Playlist";

export const Playlists = ({ playlists, setPlaylists }) => {
  const addPlaylist = () => {
    console.log("add playlist", playlists);
    setPlaylists([
      ...playlists,
      {
        id: playlists.length,
        name: "Playlist " + playlists.length,
        items: [],
      },
    ]);
  };
  return (
    <div className="Playlists">
      <button className="Button" onClick={() => addPlaylist()}>
        Add new playlist
      </button>
      {playlists
        ? playlists.map((playlist) => {
            return <Playlist key={Math.random()} playlist={playlist} />;
          })
        : ""}
    </div>
  );
};
