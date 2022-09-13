import { Video } from "./Video";

function Videos({ videos }) {
  return (
    <ul className="Videos">
      {videos?.length ? (
        videos.map((video, i) => {
          console.log(video);
          return <Video key={video} video={video} />;
        })
      ) : (
        <li className="Videos__emptyMsg">
          This playlist or collection of search results is currently empty.
        </li>
      )}
    </ul>
  );
}

export default Videos;
