const Google_Api_auth = "AIzaSyAfesWaKaToHHHIJVEfzPPMAt2A11R1WDU";
const Google_Api_auth1 = "AIzaSyASJKfV5EzTrpPweF9zVoi1yWYVNQsYpTY";
export const YOUTUBe_api =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  Google_Api_auth;
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e90120052fmsh215bb5bece0015ap1b5ec6jsn3a498f709093",
    "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
  },
};
// export const Subscription_api =
//   " https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCg6gPGh8HU2U01vaFCAsvmQ";
export const YOUTUBe_api_Searchresult =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  Google_Api_auth;
export const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e90120052fmsh215bb5bece0015ap1b5ec6jsn3a498f709093",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e90120052fmsh215bb5bece0015ap1b5ec6jsn3a498f709093",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};
export const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e90120052fmsh215bb5bece0015ap1b5ec6jsn3a498f709093",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};
export const Subscription_api =
  "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=" +
  Google_Api_auth1;
export const detail_api =
  "https://youtube-v2.p.rapidapi.com/video/details?video_id=";
export const recommend_api =
  "https://youtube-v2.p.rapidapi.com/video/recommendations?video_id=";
export const options4 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e90120052fmsh215bb5bece0015ap1b5ec6jsn3a498f709093",
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
  },
};
export const subscription1 =
  "  https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=" +
  Google_Api_auth;
export const data = fetch(
  "https://youtube-v2.p.rapidapi.com/video/details?video_id=PuQFESk0BrA",
  options
).then((response) => response.json());
export const Trending_api =
  "https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=in&section=Now";

export const SHIMMER_IMAGE_URL =
  "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png";
export const Search_api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const homesvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
      clipRule="evenodd"
    />
  </svg>
);

export const shortssvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
  </svg>
);
export const videosvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
  </svg>
);
export const Livesvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M7.712 4.819A1.5 1.5 0 0110 6.095v2.973c.104-.131.234-.248.389-.344l6.323-3.905A1.5 1.5 0 0119 6.095v7.81a1.5 1.5 0 01-2.288 1.277l-6.323-3.905a1.505 1.505 0 01-.389-.344v2.973a1.5 1.5 0 01-2.288 1.276l-6.323-3.905a1.5 1.5 0 010-2.553L7.712 4.82z" />
  </svg>
);
