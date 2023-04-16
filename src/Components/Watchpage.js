import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/Headermenu";
import Comment from "./Comment";
import Sidewatchpage from "./Sidewatchpage";
import Videodetail from "./Videodetail";

const Watchpage = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex max-md:flex-col">
      <div>
        <div className="pl-10 mt-5">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="max-md:h-fit max-md:w-fit"
          ></iframe>
          <Videodetail id={params.get("v")} />
        </div>
        <div>
          <Comment />
        </div>
      </div>
      <div>
        <Sidewatchpage recommend={params.get("v")} />
      </div>
    </div>
  );
};

export default Watchpage;
