import React from "react";
import { VideoMenu } from "./VideoMenu";

export const Video = ({ video, playlists, setPlaylists }) => {
  let vidHtmlAndParams;
  function handleStrParams(video) {
    const videoArr = video?.split('"');
    videoArr[videoArr?.indexOf(" width=") + 1] = "";
    videoArr[videoArr?.indexOf(" height=") + 1] = "";
    vidHtmlAndParams = videoArr?.join("");
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
