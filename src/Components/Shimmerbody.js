import React from "react";
import { SHIMMER_IMAGE_URL } from "../utils/Constants";

const Shimmerbody = () => {
  return (
    <div className="flex flex-wrap m-0 p-0" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((item, index) => (
          <div
            className="w-56 p-4 m-3 shadow-lg rounded-md space-y-3"
            key={index}
          >
            <img
              className="rounded-md"
              src={SHIMMER_IMAGE_URL}
              alt="shimmerimg"
            />
            <img
              className="w-[100%] h-4 rounded"
              src={SHIMMER_IMAGE_URL}
              alt="shimmerimg"
            />
            <img
              className="w-[70%] h-4 rounded"
              src={SHIMMER_IMAGE_URL}
              alt="shimmerimg"
            />
            <img
              className="w-[90%] h-4 rounded"
              src={SHIMMER_IMAGE_URL}
              alt="shimmerimg"
            />
          </div>
        ))}
      ;
    </div>
  );
};

export default Shimmerbody;
