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
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const { setIsLoading } = useGlobal();

  let searchProps = {
    searchInput: searchInput,
    setSearchInput: setSearchInput,
    setSearch: setSearch,
  };

  function getVidsFromLS() {
    setIsLoading(true);
    setSearchVideos(
      JSON.parse(localStorage.getItem("LOCAL_STORAGE_" + search))
    );
    setIsLoading(false);
  }
  function getVidsFromAPI(result) {
    console.log("API CALL");
    setSearchVideos(() => result);
    let localStorageKey = "LOCAL_STORAGE_" + search;
    localStorage.setItem(localStorageKey, JSON.stringify(result));
  }

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
          (error) => {}
        );
    }

    if (search && localStorage.getItem("LOCAL_STORAGE_" + search)) {
      getVidsFromLS();
    }
  }, [search]);

  return (
    <div className="App">
      <Header />
      <SearchVideos {...searchProps} />

      <DisplayManager searchVideos={searchVideos} search={search} />
    </div>
  );
}

export { App };
