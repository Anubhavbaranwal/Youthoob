import React from "react";
import Button from "./Button";
const List = [
  "All",
  "cricket",
  "Sports",
  "Upsc",
  "Civil Service",
  "News",
  "Live",
  "Song",
  "Travel",
  "Gaming",
];
const Buttonlist = () => {
  return (
    <div className="flex">
      {List.map((value, index) => (
        <Button name={value} key={index} />
      ))}
    </div>
  );
};

export default Buttonlist;
