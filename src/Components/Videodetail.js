import React, { useEffect, useState } from "react";
import { options1 } from "../utils/Constants";

const Videodetail = ({ id }) => {
  console.log(id);
  const [showdescription, setShowDescription] = useState(false);
  const [viddetail, setVidDetail] = useState("");

  useEffect(() => {
    const getdetail = async () => {
      const data = await fetch(
        "https://yt-api.p.rapidapi.com/video/info?id=" + id,
        options1
      );
      const json = await data.json();
      console.log(json);
      setVidDetail(json);
    };
    getdetail();
  }, [id]);
  console.log(viddetail);
  console.log(showdescription);
  const show = () => {
    setShowDescription(!showdescription);
  };
  // if (viddetail.length === 0) return "";
  return (
    <div className="w-[56rem] max-md:w-fit">
      <p>videodeytail</p>
      <p className="font-bold text-xl">{viddetail?.title}</p>
      <p className="border-2 rounded-r-md  px-3 py-5 font-semibold">
        {viddetail?.channelTitle}
      </p>
      <div className="flex mt-3 pr-3 text-xl justify-between">
        <p>Description:</p>
        <button onClick={() => show()}>{showdescription ? "🔼" : "🔽"}</button>
      </div>
      {showdescription ? (
        <p>{viddetail?.description}</p>
      ) : (
        <p>{viddetail?.description?.slice(0, 125)}...</p>
      )}
    </div>
  );
};

export default Videodetail;
