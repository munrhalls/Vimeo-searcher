import React, { useEffect, useState } from "react";
import { Video } from "./Video";

function Videos() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const LOCAL_STORAGE_LATEST_QUERY = "LOCAL_STORAGE_LATEST_QUERY";
  localStorage.setItem(
    LOCAL_STORAGE_LATEST_QUERY,
    JSON.stringify({
      kind: "youtube#searchListResponse",
      etag: "qEHiHVc1QUrf3QdiYgEYiDJlOjY",
      nextPageToken: "CAUQAA",
      regionCode: "PL",
      pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 5,
      },
      items: [
        {
          kind: "youtube#searchResult",
          etag: "nFGBxnyxkqvPkmVe5AgjtF2Ufgo",
          id: {
            kind: "youtube#video",
            videoId: "1qrhnK6FGr0",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "ZXjMy1uj95g-ttAOgAPdyjtM6ss",
          id: {
            kind: "youtube#video",
            videoId: "hxhj2PFExMg",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "K1S16yOeVtUIzZt3ZqB1jAo1LIs",
          id: {
            kind: "youtube#video",
            videoId: "OmKbGOARXao",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "8rRBWAeI0BI4nXtmWA_L2d-FDy8",
          id: {
            kind: "youtube#video",
            videoId: "rZCEBibnRM8",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "3xR1nuNhxJ0oLJoKGiKMz_5dXY4",
          id: {
            kind: "youtube#video",
            videoId: "XcDCYb0gt48",
          },
        },
      ],
    })
  );
  const savedItem = localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY);
  console.log(JSON.parse(savedItem));

  useEffect(() => {
    if (!savedItem) {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCeQZ_MjmHNlaK67QI5thMNWGhQQHvTK48"
      )
        .then((res) => res)
        .then(
          (result) => {
            setIsLoaded(true);
            console.log("ALERT ANOTHER REQUEST!!!!");
            localStorage.setItem(LOCAL_STORAGE_LATEST_QUERY, result);

            setItems(result);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    if (savedItem) {
      console.log("RUNNING FROM LOCAL STORAGE INSTEAD OF FETCH");
      console.log(savedItem);
      setItems(savedItem);
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
          {items.items.map((item, i) => {
            // console.log(items);
            return <div key={item.id.videoId}>{item.id.videoId}</div>;
          })}
          <Video />
        </>
      </ul>
    );
  }
}

export default Videos;
