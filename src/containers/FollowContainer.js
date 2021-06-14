import React from "react";
import FollowCard from "../components/FollowCard";

const FollowContainer = (props) => {
  return (
    <div className="w-1/2 flex flex-col">
      <div className="py-4 flex justify-center border-b border-gray-200">
        <h1 className="text-3xl font-bold">Who to follow</h1>
      </div>
      {props.users.map((user, index) => {
        return <FollowCard {...user} key={index} />;
      })}
    </div>
  );
};

export default FollowContainer;
