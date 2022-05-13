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
    </div>
  );
};
