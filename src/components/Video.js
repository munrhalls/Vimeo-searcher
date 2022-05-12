import React from "react";
import { VideoMenu } from "./VideoMenu";

export const Video = ({ video, playlists, setPlaylists }) => {
  let vidHtmlAndParams;
  function handleStrParams(video) {
    const videoArr = video.split('"');
    const valWidthPos = videoArr.indexOf(" width=") + 1;
    videoArr[valWidthPos] = 640;
    const valHeightPos = videoArr.indexOf(" height=") + 1;
    videoArr[valHeightPos] = 360;
    vidHtmlAndParams = videoArr.join("");
  }
  if (video) {
    handleStrParams(video);
  }
  return (
    <div className="Video">
      {video ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: vidHtmlAndParams }} />
          <button>Add to playlist</button>
          <VideoMenu
            video={video}
            playlists={playlists}
            setPlaylists={setPlaylists}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
