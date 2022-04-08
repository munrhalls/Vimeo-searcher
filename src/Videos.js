import { useEffect, useState } from "react";
import React from "react";
import { Video } from "./Video";

function Videos() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBNujw7CvH2IEOZ0XavXA87nyA7MBmgsT4"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
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
        <Video />
      </ul>
    );
  }
}

export default Videos;
