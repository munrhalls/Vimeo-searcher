import { Video } from "./Video";

function Videos({ items, playlists }) {
  return (
    <ul className="Videos">
      <>
        {items &&
          items.data.map((item, i) => {
            return (
              <Video
                key={item.uri}
                iFrame={item.embed.html}
                playlists={playlists}
              />
            );
          })}
      </>
    </ul>
  );
}

export default Videos;
