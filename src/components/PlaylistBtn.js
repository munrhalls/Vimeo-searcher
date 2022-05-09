import React from "react";

export const PlaylistBtn = (props) => {
  return (
    <button className="Button" onClick={() => props.onClick()}>
      {props.playlist.name}
    </button>
  );
};
