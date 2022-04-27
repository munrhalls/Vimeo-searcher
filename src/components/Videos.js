import { Video } from "./Video";

function Videos({ error, isLoaded, items, search }) {
  if (error) {
    return <div className="Title__subtitle">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return search ? (
      <div className="Title__subtitle">Loading...</div>
    ) : (
      <div className="Title__subtitle">
        Type search term and hit the submit button to display videos list!
      </div>
    );
  } else {
    return (
      <ul className="Videos">
        <>
          {items.data.map((item, i) => {
            // console.log(items);
            return <Video key={item.uri} iFrame={item.embed.html} />;
          })}
        </>
      </ul>
    );
  }
}

export default Videos;
