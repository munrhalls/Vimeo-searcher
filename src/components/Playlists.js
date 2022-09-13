import React from "react";

export default function Playlists() {
  // const [activePlaylist, setActivePlaylist] = useState(undefined);
  // const [playlists, setPlaylists] = useState([]);
  // const [loggedUser, setLoggedUser] = useState(false);

  // const addPlaylist = () => {
  //   setPlaylists([
  //     ...playlists,
  //     {
  //       id: playlists.length,
  //       name: "Playlist " + playlists.length,
  //       items: [],
  //     },
  //   ]);
  // };

  // function togglePlaylist(playlist) {
  //   setActivePlaylist(playlist);
  // }
  // function exitPlaylist() {
  //   setActivePlaylist(undefined);
  // }

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
    <div className="Playlists">
      <button className="Button" onClick={() => addPlaylist()}>
        Add new playlist
      </button>
      {playlists
        ? playlists.map((playlist) => {
            return (
              <PlaylistBtn
                key={Math.random()}
                playlist={playlist}
                onClick={() => togglePlaylist(playlist)}
              />
            );
          })
        : ""}
    </div>
  );
}
