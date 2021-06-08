import React from "react";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

const PostsContainer = (props) => {
  return (
    <div className="flex flex-col items-center overflow-auto">
      {props.posts.map((post, index) => {
        return <PostCard {...post} key={index} />;
      })}
    </div>
  );
};

export default PostsContainer;
