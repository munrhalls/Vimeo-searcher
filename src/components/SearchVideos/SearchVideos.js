import React, { useRef, useEffect } from "react";
import { useGlobal } from "../Contexts/GlobalProvider";

export const SearchVideos = ({
  searchInput: searchInput,
  setSearchInput: setSearchInput,
  setSearch: setSearch,
}) => {
  const inputRef = useRef();
  const { setIsLoading } = useGlobal();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="SearchVideos">
      <div className="SearchVideos__title">SEARCH VIDEOS</div>

      <input
        ref={inputRef}
        className="SearchVideos__input"
        placeholder="Type here..."
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(() => e?.target?.value)}
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
