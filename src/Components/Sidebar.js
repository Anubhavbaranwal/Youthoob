import React from "react";
import { homesvg, shortssvg, videosvg, Livesvg } from "../utils/Constants";
// import store from "./../utils/Store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.Menu.isMenuopen);
  console.log(isMenuopen);
  if (isMenuopen) return null;

  return (
    <div className=" px-2 pt-2 shadow-lg max-md:fixed max-md:bg-white max-md:h-full">
      <ul>
        <li className="flex flex-auto w-48  hover:bg-slate-400 rounded-lg">
          {" "}
          <span className="pt-3 pl-1">{homesvg}</span>
          <Link to="/">
            <p className="px-4 py-2"> Home</p>
          </Link>
        </li>
        <li className="flex  hover:bg-slate-400 rounded-lg">
          <span className="pt-3 pl-1 ">{shortssvg}</span>
          <p className="px-4 py-2 hover:bg-slate-400">
            <Link to="/shorts">Shorts</Link>
          </p>
        </li>
        <li className="flex  hover:bg-slate-400 rounded-lg">
          <span className="pt-3 pl-1">{videosvg}</span>
          <Link to="/trending">
            <p className="px-4 py-2"> Trending </p>
          </Link>
        </li>

        <li className="flex hover:bg-slate-400 rounded-lg ">
          <span className="pt-3 pl-1">{Livesvg}</span>
          <p className="px-4 py-2">Live</p>
        </li>
      </ul>
      <ul className="mb-3">
        <li className="font-bold py-2 pl-1  hover:bg-slate-400 rounded-lg">
          <Link to="/subscription">Subscriptions</Link>
        </li>

        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <ul className="mb-5 border-t-2 border-grey-400">
        <li className="font-bold pt-2">
          <Link to="/watchlater">Watch Later</Link>
        </li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
