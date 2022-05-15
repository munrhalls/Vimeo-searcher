import "./styles//App.css";
import React, { useEffect, useState } from "react";
import Videos from "./components/Videos";
import { PlaylistBtn } from "./components/PlaylistBtn.js";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { DisplayManager } from "./components/DisplayManager";
import { SearchVideos } from "./components/SearchVideos";
import { ManageAccount } from "./components/ManageAccount";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [activePlaylist, setActivePlaylist] = useState(undefined);
  const [playlists, setPlaylists] = useState([]);
  const [loggedUser, setLoggedUser] = useState(false);

  // const users = [{ name: "Jailian", password: "Burmakha" }, { name: "Bamikia", password: "Vulraghn" }];
  // localStorage.setItem('users', JSON.stringify(users))
  //SET VIA CONSOLE
  const users = JSON.parse(localStorage.getItem("users"));

  // const user_formatLS = JSON.stringify(user);
  // localStorage.setItem("loggedUser", user_formatLS);
  // make acc func

  let displayProps = {
    searchVideos: searchVideos,
    activePlaylist: activePlaylist,
    setPlaylists: setPlaylists,
    playlists: playlists,
    exitPlaylist: exitPlaylist,
    Loader: Loader,
    isLoaded: isLoaded,
    search: search,
    error: error,
  };

  let searchProps = {
    searchInput: searchInput,
    setSearchInput: setSearchInput,
    searchVideos: searchVideos,
    setSearchVideos: setSearchVideos,
    search: search,
    setSearch: setSearch,
  };

  function determineUserStatus() {
    const LSloggedUser = localStorage.getItem("loggedUser");

    if (LSloggedUser) {
      setLoggedUser(JSON.parse(LSloggedUser));
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

  function getVidsFromLS() {
    setIsLoaded(true);
    setSearchVideos(
      JSON.parse(localStorage.getItem("LOCAL_STORAGE_" + search))
    );
  }
  function getVidsFromAPI(result) {
    console.log("API CALL");
    setIsLoaded(true);
    setSearchVideos(result);
    let localStorageKey = "LOCAL_STORAGE_" + search;
    localStorage.setItem(localStorageKey, JSON.stringify(result));
  }

  useEffect(() => {
    determineUserStatus();
  }, [loggedUser]);

  useEffect(() => {
    if (search && !localStorage.getItem("LOCAL_STORAGE_" + search)) {
      fetch(
        "https://api.vimeo.com/videos?&width=480&height=360&query=" + search,
        {
          headers: new Headers({
            Authorization: `Bearer ceb8f8f94bfe86435e2261118fb7bf30`,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            getVidsFromAPI(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    if (search && localStorage.getItem("LOCAL_STORAGE_" + search)) {
      getVidsFromLS();
    }
  }, [search]);

  function togglePlaylist(playlist) {
    setActivePlaylist(playlist);
  }
  function exitPlaylist() {
    setActivePlaylist(undefined);
  }

  return (
    <div className="App">
      <div className="Title">Make your personal Vimeo playlists.</div>

      <div className="Container--vert">
        <ManageAccount
          loggedUser={loggedUser}
          setPlaylists={() => setPlaylists}
          setLoggedUser={setLoggedUser}
        />
        <SearchVideos {...searchProps} />
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
        <DisplayManager {...displayProps} />
      </div>
    </div>
  );
}

export default App;
