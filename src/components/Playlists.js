import React, { useState } from "react";
import { Playlist } from "./Playlist";

export const Playlists = ({ setItems }) => {
  const [playlists, setPlaylists] = useState([]);
  const addPlaylist = () => {
    console.log("add playlist");
    setPlaylists(() => {
      return [
        ...playlists,
        { id: playlists.length, name: "Playlist " + playlists.length },
      ];
    });
  };
  return (
    <div className="Playlists">
      <button className="Button" onClick={() => addPlaylist()}>
        Add new playlist
      </button>
      {playlists.map((playlist) => {
        return <Playlist key={Math.random()} playlist={playlist} />;
      })}
    </div>
  );
};
