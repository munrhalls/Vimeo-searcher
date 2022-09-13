import { Video } from "./Video";

function Videos({ videos }) {
  return (
    <ul className="Videos">
      {videos
        ? videos.map((video, i) => {
            console.log(video);
            return <Video key={video} video={video} />;
          })
        : "This playlist or collection of search results is currently empty."}
    </ul>
  );
}

export default Videos;
