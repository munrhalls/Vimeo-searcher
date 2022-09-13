import React from "react";
import Videos from "./Videos";

export const DisplayManager = ({ searchVideos, search }) => {
  let videos = [];

  if (searchVideos?.length) {
    for (const [key, value] of Object.entries(searchVideos?.data)) {
      videos?.push(value?.embed?.html);
    }
  }

  return <Videos videos={videos} />;
};
