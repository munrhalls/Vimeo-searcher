import React from "react";

export const Video = ({ videoId, iFrame }) => {
  let iFrameHtml;
  function handleStrParams(str) {
    const iFrameArr = iFrame.split('"');
    // iFrameArr[12] = "";
    // const iAtWidth = str.search('width="');
    // const paramValStart = iAtWidth + 'width="'.length;
    // str length 3 or 4, checking
    // if 4, 4 to ""
    const valWidthPos = iFrameArr.indexOf(" width=") + 1;
    iFrameArr[valWidthPos] = 640;

    const valHeightPos = iFrameArr.indexOf(" height=") + 1;
    iFrameArr[valHeightPos] = 360;
    iFrameHtml = iFrameArr.join("");
  }
  if (iFrame) {
    handleStrParams(iFrame);
  }
  console.log(iFrameHtml);
  return (
    <div className="Video">
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
