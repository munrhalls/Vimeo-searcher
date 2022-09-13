import React from "react";

export const SearchVideos = ({
  searchInput: searchInput,
  setSearchInput: setSearchInput,
  searchVideos: searchVideos,
  setSearchVideos: setSearchVideos,
  search: search,
  setSearch: setSearch,
}) => {
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
        onClick={() =>
          setSearch(() => {
            return searchInput;
          })
        }
      >
        Search videos
      </button>
    </div>
  );
};
