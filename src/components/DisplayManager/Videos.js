import { Video } from "./Video";

function Videos({ videos, playlists, setPlaylists }) {
  return (
    <ul className="Videos">
      {videos
        ? videos.map((video, i) => {
            return (
              <Video
                key={video}
                playlists={playlists}
                setPlaylists={setPlaylists}
                video={video}
              />
            );
          })
        : "This playlist or collection of search results is currently empty."}
    </ul>
  );
}

export default Videos;
