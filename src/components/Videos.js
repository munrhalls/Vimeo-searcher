import { Video } from "./Video";

function Videos({ items }) {
  return (
    <ul className="Videos">
      {items && items.data
        ? items.data.map((item, i) => {
            return <Video key={item.uri} iFrame={item.embed.html} />;
          })
        : "This playlist is currently empty."}
    </ul>
  );
}

export default Videos;
