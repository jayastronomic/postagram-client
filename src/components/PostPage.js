import React from "react";

const PostPage = (props) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 h-screen  overflow-hidden border-gray-200 border-r"></div>
      <div className="w-1/2 flex flex-col">
        <div className="border-b border-gray-200 p-4  flex flex-col">
          <div className="flex space-x-2">
            <i class="fas fa-user-circle fa-3x text-gray-400"></i>
            <div>
              <p className="font-bold text-lg">{props.state.post.fullName}</p>
              <p className="text-gray-500">@{props.state.post.username}</p>
            </div>
          </div>
          <div className="pt-4 pb-4">
            <p className="text-2xl break-all">{props.state.post.content}</p>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="py-2">
            <div>
              <span className="font-bold">{props.state.post.numOfLikes}</span>{" "}
              <span className="text-gray-500">Likes</span>
            </div>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="pt-4 flex justify-around text-gray-500 text-lg">
            <i className="far fa-comment"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-share-square"></i>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-screen  overflow-hidden border-gray-200 border-l"></div>
    </div>
  );
};

export default PostPage;
