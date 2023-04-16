import React, { useEffect } from "react";
import { YOUTUBe_api_Searchresult } from "../utils/Constants";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchparam] = useSearchParams();
  console.log(searchparam.get("v"));
  useEffect(() => {
    getSearchReasult();
  }, []);
  const getSearchReasult = async () => {
    const Searchresult = await fetch(YOUTUBe_api_Searchresult + searchparam);
    const json = Searchresult.json();
    console.log(json);
  };
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default SearchResult;
