import React from "react";
// import Sbutton from "./Sbutton";

const Button = ({ name }) => {
  return (
    <div className="mt-2">
      <button className="px-2 mx-2 rounded-lg border bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
