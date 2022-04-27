import "./styles//App.css";
import React, { useEffect, useState } from "react";
import Videos from "./components/Videos";

function App() {
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

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  // checking search term in localstorage
  //   [zc, zxc, wqe, asdqw]
  // or [{search: asda}, ]
  // or both

  // both
  // localstorage is populated with keys = LOCAL_STORAGE_SEARCHTERM
  // new search = new key in localstorage
  // key value = server response
  // check = if local storage key exists
  // localstorage is []

  // setting key to local storage when the check is that key is not in localstorage
  // checking for key in local storage
  // if key, running local part
  // if no key, running api call part

  useEffect(() => {
    if (search && !localStorage.getItem("LOCAL_STORAGE_" + search)) {
      // fetch(
      //   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20topicDetails&chart=mostPopular&maxResults=1000&key=AIzaSyCeQZ_MjmHNlaK67QI5thMNWGhQQHvTK48"
      // )
      const query =
        "https://api.vimeo.com/videos?&width=480&height=360&query=" + search;
      fetch(query, {
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
            let localStorageKey = "LOCAL_STORAGE_" + search;
            localStorage.setItem(localStorageKey, JSON.stringify(result));
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    if (search && localStorage.getItem("LOCAL_STORAGE_" + search)) {
      console.log(
        "RUNNING FROM LOCAL STORAGE INSTEAD OF FETCH",
        "...",
        JSON.parse(localStorage.getItem("LOCAL_STORAGE_" + search))
      );

      setItems(JSON.parse(localStorage.getItem("LOCAL_STORAGE_" + search)));

      setIsLoaded(true);
    }
  }, [search]);

  return (
    <div className="App">
      <span>Customizable collection of videos.</span>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={() => setSearch(searchInput)}>Search videos</button>
      <Videos error={error} search={search} isLoaded={isLoaded} items={items} />
    </div>
  );
}

export default App;
