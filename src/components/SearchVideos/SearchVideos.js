import React, { useState } from "react";
import { useGlobal } from "../Contexts/GlobalProvider";

export const SearchVideos = ({
  searchInput: searchInput,
  setSearchInput: setSearchInput,
  setSearch: setSearch,
}) => {
  const { setIsLoading } = useGlobal();

  return (
    <div className="SearchVideos">
      <div className="SearchVideos__title">SEARCH VIDEOS</div>

      <input
        className="SearchVideos__input"
        placeholder="Type here..."
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e?.target?.value)}
      />
      <button
        className="SearchVideos__btn"
        onClick={() => setSearch(() => searchInput)}
      >
        Search videos
      </button>
    </div>
  );
};
