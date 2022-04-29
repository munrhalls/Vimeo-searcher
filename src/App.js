import "./styles//App.css";
import React, { useEffect, useState } from "react";
import Videos from "./components/Videos";
import { Playlists } from "./components/Playlists.js";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  // const [playlists, setPlaylists] = useState([]);
  // const [playlistItems, setPlaylistItems] = useState(undefined);

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
        {/* <Playlists
          playlists={playlists}
          setPlaylists={(playlists) => setPlaylists(playlists)}
          setPlaylistItems={() => setPlaylistItems()}
        /> */}
        {!isLoaded ? <Loader /> : ""}
        {isLoaded && !error ? (
          <Videos search={search} items={searchItems} />
        ) : (
          ""
        )}
        {isLoaded && error ? <Error /> : ""}
      </div>
    </div>
  );
}

export default App;
