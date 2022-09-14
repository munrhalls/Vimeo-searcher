import React from "react";
import Videos from "./Videos";

export const DisplayManager = ({ searchVideos }) => {
  return <Videos videos={searchVideos} />;
};
