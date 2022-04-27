import React, { useEffect, useState } from "react";
import { Video } from "./Video";

function Videos() {
  // 1 history of api responses, stores in localstorage; all of them
  // 2 history of search terms; in same entry as api response;
  // new search = check if the search term is in localstorage
  // if it is, serve matching response from localstorage
  // only if it's not there, proceed further
  // 3 if it's not in localstorage, it's a new term
  // running the code part that takes in api call string + search term
  // that code part also saves both to localstorage right after
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
