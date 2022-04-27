import React from "react";

export const Video = ({ videoId, iFrame }) => {
  console.log(iFrame);
  let iFrameHtml;
  if (iFrame) {
    const iFrameArr = iFrame.split("");
    iFrameArr[12] = "";
    iFrameHtml = iFrameArr.join("");
  }

  return (
    <div>
      {/* <iframe
        // src={"https://www.youtube.com/embed/" + videoId}
        src={"https://player.vimeo.com/video/" + videoId}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />{" "} */}

      {iFrame ? <div dangerouslySetInnerHTML={{ __html: iFrameHtml }} /> : ""}
    </div>
  );
};
