import React, { useEffect, useState } from "react";
import { Video } from "./Video";

function Videos() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const LOCAL_STORAGE_LATEST_QUERY = "LOCAL_STORAGE_LATEST_QUERY";

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY)) {
      // fetch(
      //   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20topicDetails&chart=mostPopular&maxResults=1000&key=AIzaSyCeQZ_MjmHNlaK67QI5thMNWGhQQHvTK48"
      // )
      fetch("https://api.vimeo.com/videos?&width=480&height=360&query=hot", {
        headers: new Headers({
          Authorization: `Bearer ceb8f8f94bfe86435e2261118fb7bf30`,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log("ALERT ANOTHER REQUEST!!!!", result);
            setItems(result);
            localStorage.setItem(
              LOCAL_STORAGE_LATEST_QUERY,
              JSON.stringify(result)
            );
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    if (localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY)) {
      console.log(
        "RUNNING FROM LOCAL STORAGE INSTEAD OF FETCH",
        "...",
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY))
      );

      setItems(JSON.parse(localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY)));

      setIsLoaded(true);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {/* {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))} */}
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
