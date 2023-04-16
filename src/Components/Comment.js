import React from "react";
import profile from "./Assests/profile-user.png";

const Commentdata = [
  {
    name: "Barry1",
    text: "nice video lorem ipsum jhsdhjsh",
    reply: [
      {
        name: "barry",
        text: " nice viededopsd dfkjdkjnvk",
        reply: [],
      },
    ],
  },
  {
    name: "Barry2",
    text: "nice video lorem ipsum jhsdhjsh",
    reply: [
      {
        name: "Barry ",
        text: "nice video lorem ipsum jhsdhjsh",
        reply: [
          {
            name: "Barry ",
            text: "nice video lorem ipsum jhsdhjsh",
            reply: [],
          },
        ],
      },
      {
        name: "Barry ",
        text: "nice video lorem ipsum jhsdhjsh",
        reply: [],
      },
      {
        name: "Barry ",
        text: "nice video lorem ipsum jhsdhjsh",
        reply: [],
      },
      {
        name: "Barry ",
        text: "nice video lorem ipsum jhsdhjsh",
        reply: [],
      },
    ],
  },
  {
    name: "Barry ",
    text: "nice video lorem ipsum jhsdhjsh",
    reply: [],
  },
  {
    name: "Barry ",
    text: "nice video lorem ipsum jhsdhjsh",
    reply: [],
  },
  {
    name: "Barry ",
    text: "nice video lorem ipsum jhsdhjsh",
    reply: [],
  },
];

const Commentlist = ({ data }) => {
  const { name, text, reply } = data;
  // console.log(data);
  return (
    <div className="flex bg-gray-200 p-2 m-2 rounded-md">
      <img src={profile} alt="user" className="w-12 h-12 mr-2" />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const Commentprint = ({ Comment }) => {
  //   console.log(Comment);
  return Comment.map((Commments, index) => (
    <div key={index}>
      <Commentlist data={Commments} />
      {/* {console.log(Commments.reply)} */}
      <div className="pl-5 border border-white border-l-black  ml-5">
        <Commentprint Comment={Commments.reply} />
      </div>
    </div>
  ));
};

const Comments = () => {
  //   console.log(Commentdata);
  return (
    <div className="pl-5 m-5 ">
      <div className="font-bold text-2xl">Comment:</div>
      <Commentprint Comment={Commentdata} />
    </div>
  );
};

export default Comments;
