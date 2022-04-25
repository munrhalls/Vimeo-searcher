import React from "react";

export const Video = ({ videoId }) => {
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + videoId}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />{" "}
    </div>
  );
};
