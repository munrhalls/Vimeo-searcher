import React, { useState } from "react";

export const VideoMenu = ({ playlists }) => {
  const [isPlaylistsOpen, setIsPlaylistsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPlaylistsOpen(true)}>Add to playlist</button>
      {isPlaylistsOpen ? (
        <div>
          {playlists.map((playlist) => {
            <div>{playlist.name}</div>;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
