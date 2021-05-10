import React from "react";
import { connect } from "react-redux";

import { deletePostSuccess } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/posts/";

const PostCard = (props) => {
  const handleDelete = () => {
    fetch(API + props.id, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => props.deletePostSuccess(resObj));
  };

  return (
    <div className="border-gray-200 w-full flex pt-2 pl-2  border-b">
      <div>
        <i class="fas fa-user-circle fa-3x text-gray-400 pl-2"></i>
      </div>
      <div className="p-2 flex flex-col w-full">
        <div className="pl-2 text-gray-500">@{props.post_user}</div>

        <p className="pl-2 break-all">{props.content}</p>

        <div className="flex pt-4 pl-2 justify-around items-center ">
          <i className="far fa-comment text-gray-500"></i>
          {/* <i className="fas fa-retweet text-gray-500"></i> */}
          <i className="far fa-heart text-gray-500 cursor-pointer"></i>
          {props.authUserId === props.user_id ? (
            <button
              onClick={() => handleDelete()}
              className="fas fa-trash text-gray-500 cursor-pointer active:text-gray-400 focus:outline-none"
            ></button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    authUserId: state.authUser.id,
  };
};

const mapDispatchToProps = {
  deletePostSuccess,
};

export default connect(mapStatetoProps, mapDispatchToProps)(PostCard);
