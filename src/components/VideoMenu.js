import React, { useState } from "react";

export const VideoMenu = ({ playlists }) => {
  return (
    <>
      {playlists
        ? playlists.map((playlist) => {
            return <div>{playlist.name}</div>;
          })
        : "Zero playlists. Add a playlist, then you can add videos to it."}
    </>
  );
};
