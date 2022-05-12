import React, { useState } from "react";

export const VideoMenu = ({ iFrameHtml, playlists, setPlaylists }) => {
  const vid = iFrameHtml;
  function toggleVidInPlaylist(e) {
    let clickedPlist = playlists.filter(
      (playlist) => playlist.id == e.target.id
    )[0];
    const hasVid = clickedPlist.items.find((item) => item === vid);
    hasVid
      ? (clickedPlist.items = clickedPlist.items.filter((item) => item !== vid))
      : (clickedPlist.items[clickedPlist.items.length] = vid);

    setPlaylists(() => {
      return playlists.map((playlist) => {
        if (playlist === clickedPlist) {
          console.log(clickedPlist, playlist);
        }
        return playlist;
      });
    });
  }

  // btn knows if its playlist has this vid or not
  // btn checks if playlist items has iframe
  return (
    <>
      {playlists
        ? playlists.map((playlist) => {
            return (
              <button
                id={playlist.id}
                style={{
                  background: `${
                    playlist.items.find((item) => item === vid)
                      ? "green"
                      : "silver"
                  }`,
                }}
                key={Math.random()}
                onClick={(e) => toggleVidInPlaylist(e)}
              >
                {playlist.name}
              </button>
            );
          })
        : "Zero playlists. Add a playlist, then you can add videos to it."}
    </>
  );
};
