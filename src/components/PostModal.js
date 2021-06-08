import React from "react";
import PostForm from "./partials/PostForm";

const PostModal = (props) => {
  return (
    <div className="inset-0 bg-black bg-opacity-75 absolute flex justify-center items-center">
      <div className="bg-white w-1/2 rounded">
        <PostForm />
      </div>
    </div>
  );
};

export default PostModal;
