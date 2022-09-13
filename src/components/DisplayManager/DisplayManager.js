import React from "react";
import Videos from "./Videos";

export const DisplayManager = ({
  searchVideos: searchVideos,
  activePlaylist: activePlaylist,
  setPlaylists: setPlaylists,
  playlists: playlists,
  exitPlaylist: exitPlaylist,
  Loader: Loader,
  isLoaded: isLoaded,
  search: search,
  error: error,
}) => {
  let videos = [];
  if (searchVideos?.length) {
    for (const [key, value] of Object.entries(searchVideos?.data)) {
      videos?.push(value?.embed?.html);
    }
  }

  // function displayPlaylistVideos() {
  //   let videos = [];
  //   for (const [key, value] of Object.entries(activePlaylist.items)) {
  //     videos.push(value);
  //   }

  //   return (
  //     <div>
  //       <Videos
  //         setPlaylists={(playlists) => setPlaylists(playlists)}
  //         playlists={playlists}
  //         videos={activePlaylist.items}
  //       />
  //       <button onClick={() => exitPlaylist()}>Exit playlist</button>
  //     </div>
  //   );
  // }

  return (
    <Videos
      setPlaylists={(playlists) => setPlaylists(playlists)}
      playlists={playlists}
      videos={videos}
    />
  );
};
