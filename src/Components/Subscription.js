import React, { useEffect, useState } from "react";
import { Subscription_api, options, subscription1 } from "../utils/Constants";
import Videocard from "./Videocard";
import { data } from "../utils/subsdata";
const Subscription = () => {
  const subsdata = data.items;
  console.log(subsdata);
  // console.log(Array.isArray(subscription));
  return (
    <div>
      {subsdata.map((item) => (
        <div key={item.id} className="flex my-4">
          {/* <Link> */}
          <img
            src={item.snippet.thumbnails.default.url}
            className="mx-2 rounded-full"
          />
          <div className="ml-4">
            <p className="font-bold align-middle mt-4">{item.snippet.title}</p>
            <button className="font-bold bg-black text-white rounded-xl px-2 mt-2">
              Subscribe
            </button>
          </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Subscription;
