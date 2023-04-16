import React from "react";

const Videocard = ({ info }) => {
  // console.log(info);
  const { snippet } = info;

  return (
    <div className="shadow-md w-56 m-2 p-2 ">
      <img
        src={snippet.thumbnails.medium.url}
        className="rounded"
        alt="thumbnail"
      />
      {
        <ul>
          {/* <span><img src=""/></span> */}
          <li className="font-bold ">
            {info.snippet.title.length > 30
              ? info.snippet.title.slice(0, 30) + "..."
              : info.snippet.title}
          </li>
          <li>{info.snippet.channelTitle}</li>
          <li>{info.statistics.viewCount}views</li>
        </ul>
      }
    </div>
  );
};

export default Videocard;
