import { Video } from "./Video";

function Videos({ items }) {
  return (
    <ul className="Videos">
      <>
        {items &&
          items.data.map((item, i) => {
            return <Video key={item.uri} iFrame={item.embed.html} />;
          })}
      </>
    </ul>
  );
}

export default Videos;
