import React from "react";
import Videos from "./Videos";

export const DisplayManager = ({ searchVideos, search }) => {
  // let videos = [];
  // console.log("vids from API ", searchVideos);
  // if (searchVideos?.data?.length) {
  //   for (const [key, value] of Object.entries(searchVideos?.data)) {
  //     videos?.push(value?.embed?.html);
  //   }
  // }
  // debugger;
  console.log("videos in display manager", searchVideos);
  return <Videos videos={searchVideos} />;
};
