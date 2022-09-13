import React from "react";
import { VideoMenu } from "./VideoMenu";

export const Video = ({ video }) => {
  function getVidSrc() {
    const videoArr = video.split('"');
    const src = videoArr[1];
    return src;
  }

  return (
    <div className="Video">
      {video ? (
        <>
          <iframe
            className="Video__iFrame"
            src={getVidSrc()}
            controls
            preload="metadata"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            height="100%"
            width="100%"
          ></iframe>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
