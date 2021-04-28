import React from "react";

const PostCard = (props) => {
  return (
    <div className="border-gray-200 border-t w-full flex pt-2 pl-2  ">
      <div>
        <i class="fas fa-user-circle fa-3x text-gray-400 pl-2"></i>
      </div>
      <div className="p-2 flex flex-col ">
        <div className="pl-2 text-gray-500">@{props.post_user}</div>

        <p className="pl-2 break-all">{props.content}</p>

        <div className="flex pt-4 space-x-36 items-center pl-2">
          <i class="far fa-comment text-gray-500"></i>
          <i class="fas fa-retweet text-gray-500"></i>
          <i class="far fa-heart text-gray-500"></i>
          <i class="fas fa-share-square text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default PostCard;