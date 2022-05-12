import "./styles//App.css";
import React, { useEffect, useState } from "react";
import Videos from "./components/Videos";
import { PlaylistBtn } from "./components/PlaylistBtn.js";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [activePlaylist, setActivePlaylist] = useState(undefined);
  const [playlists, setPlaylists] = useState([]);
  // const [playlistItems, setPlaylistItems] = useState(undefined);
  let displayAvailables = [
    "Hello-page",
    "Loader",
    "SearchVideos",
    "PlaylistVideos",
  ];
  function whatToDisplayLogic() {
    if (!isLoaded && !search) {
      return displayAvailables[0];
    }
    if (isLoaded && error) {
      return <Loader />;
    }
    if (isLoaded && !error && !activePlaylist) {
      return (
        <Videos
          setPlaylists={(playlists) => setPlaylists(playlists)}
          playlists={playlists}
          items={searchItems}
        />
      );
    }
    if (isLoaded && !error && activePlaylist) {
      return (
        <div>
          <Videos
            setPlaylists={() => setPlaylists(playlists)}
            playlists={playlists}
            items={activePlaylist.items}
          />
          <button onClick={() => exitPlaylist()}>Exit playlist</button>
        </div>
      );
    }
  }
  const addPlaylist = () => {
    setPlaylists([
      ...playlists,
      {
        id: playlists.length,
        name: "Playlist " + playlists.length,
        items: [],
      },
    ]);
  };

  useEffect(() => {
    if (search && !localStorage.getItem("LOCAL_STORAGE_" + search)) {
      const query =
        "https://api.vimeo.com/videos?&width=480&height=360&query=" + search;
      fetch(query, {
        headers: new Headers({
          Authorization: `Bearer ceb8f8f94bfe86435e2261118fb7bf30`,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log("API CALL");
            setIsLoaded(true);
            setSearchItems(result);
            let localStorageKey = "LOCAL_STORAGE_" + search;
            localStorage.setItem(localStorageKey, JSON.stringify(result));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    if (search && localStorage.getItem("LOCAL_STORAGE_" + search)) {
      console.log("LOCAL STORAGE");
      setIsLoaded(true);
      setSearchItems(
        JSON.parse(localStorage.getItem("LOCAL_STORAGE_" + search))
      );
    }
  }, [search]);
  function togglePlaylist(playlist) {
    console.log("toggle", playlist);
    setActivePlaylist(playlist);
  }
  function exitPlaylist() {
    setActivePlaylist(undefined);
  }
  return (
    <div className="App">
      <div className="Title">Make your personal Vimeo playlists.</div>
      <input
        className="Search"
        placeholder="Type here..."
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="Button"
        onClick={() =>
          setSearch(() => {
            return searchInput;
          })
        }
      >
        Search videos
      </button>
      <div className="Container--horiz">
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
        {whatToDisplayLogic()}
      </div>
    </div>
  );
}

export default App;
