import React from "react";

const Card = (props) => {
  return (
    <div className="w-[18vw] flex flex-col items-center rounded-xl py-8 px-8 text-center bg-white text-black">
      <img
        className="h-24 w-24 rounded-full object-cover object-center"
        src={props.userimg}
        alt=""
      />
      <h1 className="text-2xl mt-2 font-bold">{props.username}</h1>
      <h5 className="text-lg text-blue-500 font-semibold my-2">
        {props.userrole}
      </h5>
      <p className="text-sm font-medium leading-tight ">{props.userdecs}</p>
      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="px-4 py-2 mt-3 rounded bg-pink-300 font-semibold text-white text-sm cursor-pointer active:scale-95"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
