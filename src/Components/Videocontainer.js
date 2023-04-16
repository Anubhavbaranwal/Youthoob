import React, { useEffect, useState } from "react";
import { YOUTUBe_api } from "../utils/Constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import Shimmerbody from "./Shimmerbody";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  //   console.log(YOUTUBe_api);
  const getVideo = async () => {
    const data = await fetch(YOUTUBe_api);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  if (videos.length === 0) return <Shimmerbody />;
  return (
    <div className=" px-2 mx-2 flex flex-wrap justify-start ">
      {videos.map((videos) => (
        <Link to={"/watch?v=" + videos.id} key={videos.id}>
          <Videocard info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
