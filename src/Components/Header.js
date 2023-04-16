import React, { useEffect, useState } from "react";
import youtube from "./Assests/youtube.png";
import menu from "./Assests/menu.png";
import search1 from "./Assests/search.png";
import profile from "./Assests/profile-user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Headermenu";
import { Search_api } from "../utils/Constants";
import { CacheResult } from "../utils/searchSlice";
import SearchResult from "./searchResult";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const togglemenuhandler = () => {
    dispatch(toggleMenu());
  };
  // const navigate = useNavigate();
  const [searchhandle, setSearchhandle] = useState("");
  const [sugestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const SearchCache = useSelector((store) => store.Search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchCache[searchhandle]) {
        setSuggestion(SearchCache[searchhandle]);
      } else {
        search();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchhandle]);
  const search = async () => {
    const searchdata = await fetch(Search_api + searchhandle);
    const json = await searchdata.json();
    setSuggestion(json[1]);
    dispatch(
      CacheResult({
        [searchhandle]: json[1],
      })
    );
  };
  const SearchquaryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchhandle?.length > 0
    ) {
      console.log(searchhandle);
      <a href={"/search?v" + searchhandle} key={searchhandle}>
        <SearchResult />
      </a>;

      // navigate("/search/" + searchhandle);
      console.log("clicked");
    }
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg max-md:flex max-md:justify-between max-md:mr-0 max-md:pr-0">
      <div className="col-span-1">
        <div className="flex ">
          <img
            onClick={() => togglemenuhandler()}
            src={menu}
            alt="menu"
            className="h-7 mt-2 cursor-pointer"
          />
          <a href="/">
            <img src={youtube} alt="logo" className="h-10 pt-1 ml-2" />
          </a>
        </div>
      </div>

      <div className=" col-span-10 max-md:col-span-11  max-md:pr-10 ">
        <div>
          <div className="flex pl-64">
            <input
              type="text"
              className="w-1/2 h-9 pl-5 border border-gray-400 rounded-l-full"
              placeholder="Search"
              value={searchhandle}
              onChange={(e) => setSearchhandle(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              onKeyUp={SearchquaryHandler}
            />
            <button onClick={() => SearchquaryHandler}>
              <img
                src={search1}
                alt="search"
                className="w-[52px] px-2 border border-gray-400 rounded-r-full"
              />
            </button>
          </div>
          {showSuggestion && (
            <div className=" absolute bg-white w-[30.5rem] rounded-lg ml-[16rem] border border-gray-100">
              <ul className=" ">
                {sugestion &&
                  sugestion.map((s) => (
                    <li
                      key={s}
                      className="  pl-4 py-2 rounded-lg hover:bg-gray-100 "
                      onClick={(s) => setSearchhandle(s)}
                    >
                      🔍 {s}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className=" w-11 col-span-1 max-md:hidden">
        <img src={profile} alt="user" className="w-8" />
      </div>
    </div>
  );
};

export default Header;
