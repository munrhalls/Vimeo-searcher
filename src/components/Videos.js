import { Video } from "./Video";

function Videos({ items, playlists }) {
  return (
    <ul className="Videos">
      {items && items.data
        ? items.data.map((item, i) => {
            return (
              <Video
                key={item.uri}
                playlists={playlists}
                iFrame={item.embed.html}
              />
            );
          })
        : "This playlist or collection of search results is currently empty."}
    </ul>
  );
}

export default Videos;
