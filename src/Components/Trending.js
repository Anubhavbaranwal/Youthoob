import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { options } from "../utils/Constants";

const Trending = () => {
  const [trendingVid, setTrendingVid] = useState("");

  useEffect(() => {
    const trendingvideo = async () => {
      const data = await fetch(
        "https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=in&section=Now",
        options
      );
      const json = await data.json();
      const ytTrend = json.videos;
      console.log(json);
      console.log(ytTrend);
      setTrendingVid(ytTrend);
    };
    trendingvideo();
  }, []);

  if (trendingVid?.length === 0) return <h1 className="font-bold text-2xl text-red-500">Loading </h1>;
  return (
    <div>
      <h1 className="font-bold text-3xl mt-5 mb-2">Trending Videos</h1>
      {trendingVid &&
        trendingVid.map((vid, index) => (
          <Link to={"/watch?v=" + vid?.video_id} key={index}>
            <div className="flex my-3 ml-1">
              <img
                src={vid?.thumbnails[0]?.url}
                className="h-32"
                alt="thumbnail"
              />
              <div className="ml-5">
                <p className="font-bold">{vid?.title}</p>
                <p className="pt-1">
                  <span className="pr-1">{vid?.author}</span>|
                  <span className="px-1">{vid?.published_time}</span>|
                  <span className="pl-1"> {vid?.number_of_views}views</span>
                </p>
                <p className="pt-3 max-md:hidden">{vid?.description?.slice(0, 200)}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Trending;
