import { Video } from "./Video";

function Videos({ videos, playlists, setPlaylists }) {
  return (
    <ul className="Videos">
      {videos
        ? videos.map((video, i) => {
            return (
              <Video
                key={video.uri}
                playlists={playlists}
                setPlaylists={setPlaylists}
                iFrame={video.embed.html}
              />
            );
          })
        : "This playlist or collection of search results is currently empty."}
    </ul>
  );
}

export default Videos;
