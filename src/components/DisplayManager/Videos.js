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
          Cannot display results for this search query.
        </li>
      )}
    </ul>
  );
}

export default Videos;
