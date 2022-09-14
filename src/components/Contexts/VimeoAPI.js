// api docs
// https://developer.vimeo.com/api/common-formats#json-filter
// https://developer.vimeo.com/api/reference/videos#search_videos !!!

export default function VimeoAPI() {
  const getVidsFromVIMEO = async (searchTerm) => {
    return fetch(
      "https://api.vimeo.com/videos?&width=480&height=360&query=" + searchTerm,
      {
        headers: new Headers({
          Authorization: `Bearer ceb8f8f94bfe86435e2261118fb7bf30`,
        }),
      }
    );
  };

  const value = { getVidsFromVIMEO };

  return value;
}
