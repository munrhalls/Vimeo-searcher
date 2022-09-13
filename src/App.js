import "./App.css";
import React, { useEffect, useState } from "react";
import { DisplayManager } from "./components/DisplayManager/DisplayManager";
import { SearchVideos } from "./components/SearchVideos/SearchVideos";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useGlobal } from "./components/Contexts/GlobalProvider";
import useWindowHeight from "./components/Hooks/useWindowHeight";

function App() {
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const { setIsLoading, getVidsFromVIMEO } = useGlobal();

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
  async function handleSubmit() {
    try {
      const res = await getVidsFromVIMEO(search);
      const videos = await res.json();

      setSearchVideos(() => videos);
      localStorage.setItem("LOCAL_STORAGE_" + search, JSON.stringify(videos));
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    if (search && !localStorage.getItem("LOCAL_STORAGE_" + search)) {
      handleSubmit();
    }

    if (search && localStorage.getItem("LOCAL_STORAGE_" + search)) {
      getVidsFromLS();
    }
  }, [search]);

  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        minHeight: `${useWindowHeight()}px`,
        maxHeight: `${useWindowHeight()}px`,
      }}
    >
      <Header />
      <main className="Main">
        <SearchVideos {...searchProps} />
        <DisplayManager searchVideos={searchVideos} search={search} />
      </main>

      <Footer />
    </div>
  );
}

export { App };
