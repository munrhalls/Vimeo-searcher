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
  function displaySearchVideos() {
    let videos = [];
    for (const [key, value] of Object.entries(searchVideos.data)) {
      videos.push(value.embed.html);
    }
    return (
      <Videos
        setPlaylists={(playlists) => setPlaylists(playlists)}
        playlists={playlists}
        videos={videos}
      />
    );
  }
  function displayPlaylistVideos() {
    let videos = [];
    for (const [key, value] of Object.entries(activePlaylist.items)) {
      videos.push(value);
    }

    return (
      <div>
        <Videos
          setPlaylists={(playlists) => setPlaylists(playlists)}
          playlists={playlists}
          videos={activePlaylist.items}
        />
        <button onClick={() => exitPlaylist()}>Exit playlist</button>
      </div>
    );
  }
  function whatToDisplayLogic() {
    if (!isLoaded && !search) {
      return "Hello-page";
    }
    if (isLoaded && error) {
      return <Loader />;
    }
    if (isLoaded && !error && !activePlaylist) {
      return displaySearchVideos();
    }
    if (isLoaded && !error && activePlaylist) {
      return displayPlaylistVideos();
    }
  }

  return <div> {whatToDisplayLogic()}</div>;
};
