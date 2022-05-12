import React from "react";
import { VideoMenu } from "./VideoMenu";

export const Video = ({ iFrame, playlists, setPlaylists }) => {
  let iFrameHtml;
  function handleStrParams() {
    const iFrameArr = iFrame.split('"');

    const valWidthPos = iFrameArr.indexOf(" width=") + 1;
    iFrameArr[valWidthPos] = 640;

    const valHeightPos = iFrameArr.indexOf(" height=") + 1;
    iFrameArr[valHeightPos] = 360;
    iFrameHtml = iFrameArr.join("");
  }
  if (iFrame) {
    handleStrParams(iFrame);
  }
  return (
    <div className="Video">
      {iFrame ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: iFrameHtml }} />
          <button>Add to playlist</button>
          <VideoMenu
            iFrameHtml={iFrameHtml}
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
