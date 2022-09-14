import React from "react";
import Videos from "./Videos";

export const DisplayManager = ({ searchVideos }) => {
  // open for extension, closed for modification
  return <Videos videos={searchVideos} />;
};
