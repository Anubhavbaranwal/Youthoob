import React, { useEffect, useState } from "react";
import { options3 } from "../utils/Constants";
import { Link } from "react-router-dom";

const Sidewatchpage = ({ recommend }) => {
  console.log(recommend);
  const [recommendVid, setRecommendVid] = useState([]);

  useEffect(() => {
    const getytdata = async () => {
      const data = await fetch(
        "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=" +
          recommend +
          "&part=id%2Csnippet&type=video&maxResults=50",
        options3
      );
      const json = await data.json();
      console.log(json);
      console.log(json.items);
      setRecommendVid(json.items);
    };
    getytdata();
  }, [recommend]);

  console.log(recommendVid);
  return (
    <div className="mt-4">
      {recommendVid.map((v) => (
        <Link to={"/watch?v=" + v?.id?.videoId} key={v.id.videoId}>
          <div className="flex rounded-lg bg-gray-50 border mt-2 mx-2">
            <img
              src={v?.snippet.thumbnails?.default.url}
              className="m-5"
              alt="thumbnail"
            />
            <div>
              <p className="font-bold pt-5">{v?.snippet.title}</p>
              <p>{v.snippet.channelTitle}</p>
              <p>{v?.snippet.description.slice(0, 50)}...</p>
              <p>{v?.snippet.published_time}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidewatchpage;
