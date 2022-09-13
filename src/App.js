import "./App.css";
import React, { useEffect, useState } from "react";
// import Videos from "./components/Videos";
import { PlaylistBtn } from "./components/PlaylistBtn.js";
import { Loader } from "./components/Loader/Loader";
// import { Error } from "./components/Error";
import { DisplayManager } from "./components/DisplayManager/DisplayManager";
import { SearchVideos } from "./components/SearchVideos/SearchVideos";
import Header from "./components/Header/Header";
import { useGlobal } from "./components/Contexts/GlobalProvider";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [activePlaylist, setActivePlaylist] = useState(undefined);
  const [playlists, setPlaylists] = useState([]);
  const [loggedUser, setLoggedUser] = useState(false);

  const { determineLoggedStatus, setIsLoading } = useGlobal();
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
  // const users = JSON.parse(localStorage.getItem("users"));
  //commit

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
    setSearch: setSearch,
  };

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
    setIsLoading(true);
    setIsLoaded(true);
    setSearchVideos(
      JSON.parse(localStorage.getItem("LOCAL_STORAGE_" + search))
    );
    setIsLoading(false);
  }
  function getVidsFromAPI(result) {
    console.log("API CALL");
    setIsLoaded(true);
    setSearchVideos(result);
    let localStorageKey = "LOCAL_STORAGE_" + search;
    localStorage.setItem(localStorageKey, JSON.stringify(result));
  }

  useEffect(() => {
    console.log(loggedUser);
    determineLoggedStatus();
  }, []);

  useEffect(() => {
    if (search && !localStorage.getItem("LOCAL_STORAGE_" + search)) {
      setIsLoading(true);

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
            setIsLoading(false);
          },
          (error) => {
            setIsLoading(false);
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
      <Header />
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
  );
}

export { App };
