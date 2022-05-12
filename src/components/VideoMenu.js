import React from "react";

export const VideoMenu = ({ video, playlists, setPlaylists }) => {
  function toggleVidInPlaylist(e) {
    let clickedPlist = playlists.filter(
      (playlist) => playlist.id == e.target.id
    )[0];

    const hasVid = clickedPlist.items.find((item) => item == video);
    hasVid
      ? (clickedPlist.items = clickedPlist.items.filter(
          (item) => item != video
        ))
      : clickedPlist.items.push(video);

    setPlaylists(() => {
      return playlists.map((playlist) => {
        if (playlist == clickedPlist) {
          playlist = clickedPlist;
          return playlist;
        } else {
          return playlist;
        }
      });
    });
  }

  return (
    <>
      {playlists
        ? playlists.map((playlist) => {
            return (
              <button
                id={playlist.id}
                style={{
                  background: `${
                    playlist.items.find((item) => item == video)
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
