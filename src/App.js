import "./App.css";
import React, { useEffect, useState } from "react";
import { DisplayManager } from "./components/DisplayManager/DisplayManager";
import { SearchVideos } from "./components/SearchVideos/SearchVideos";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useGlobal } from "./components/Contexts/GlobalProvider";
import useWindowHeight from "./components/Hooks/useWindowHeight";
import { Loader } from "./components/Loader/Loader";

// import { resJson } from "./mockObj";

function App() {
  const [searchVideos, setSearchVideos] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const { isLoading, setIsLoading, getVidsFromVIMEO } = useGlobal();

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

  useEffect(() => {
    if (!search) return;
    if (!localStorage.getItem("LOCAL_STORAGE_" + search)) {
      console.log("submit search query");
      handleSubmit();
    }
    if (localStorage.getItem("LOCAL_STORAGE_" + search)) {
      console.log("zxc?");
      getVidsFromLS();
    }
  }, [search]);

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const res = await getVidsFromVIMEO(search);
      const resJson = await res.json();
      const vidsDataArr = await resJson?.data;
      const vidsHtmls = await vidsDataArr.map((vidData) => {
        return vidData?.embed?.html;
      });
      console.log(vidsHtmls);
      setIsLoading(false);
      setSearchVideos(() => vidsHtmls);
      console.log(searchVideos);
      localStorage.setItem(
        "LOCAL_STORAGE_" + search,
        JSON.stringify(vidsHtmls)
      );
      console.log(searchVideos);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  }

  console.log("search videos in app", searchVideos);

  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        minHeight: `${useWindowHeight()}px`,
        maxHeight: `${useWindowHeight()}px`,
      }}
    >
      <Loader active={isLoading}>
        <Header />
        <main className="Main">
          <SearchVideos {...searchProps} />
          <DisplayManager searchVideos={searchVideos} search={search} />
        </main>
        <Footer />
      </Loader>
    </div>
  );
}

export { App };
