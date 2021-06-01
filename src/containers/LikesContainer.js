import React from "react";
import LikeCard from "../components/LikeCard";

const LikesContainer = (props) => {
  return (
    <div className="flex flex-col items-center overflow-auto  w-1/2">
      {props.likes.map((post, index) => {
        return <LikeCard {...post} key={index} />;
      })}
    </div>
  );
};

export default LikesContainer;
