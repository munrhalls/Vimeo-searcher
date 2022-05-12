import { Video } from "./Video";

function Videos({ items, playlists, setPlaylists}) {
  return (
    <ul className="Videos">
      {items && items.data
        ? items.data.map((item, i) => {
            return (
              <Video
                key={item.uri}
                playlists={playlists}
                setPlaylists={setPlaylists}
                iFrame={item.embed.html}
              />
            );
          })
        : "This playlist or collection of search results is currently empty."}
    </ul>
  );
}

export default Videos;
