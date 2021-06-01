import React, { useState } from "react";
import DeletePostModal from "./DeletePostModal";
import { connect } from "react-redux";

import { toggleDeletePostModal } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/users/";

const PostCard = (props) => {
  const [like, setLike] = useState(props.liked_by_current_user);

  const toggleDeletePostModal = () => {
    props.toggleDeletePostModal(!props.deletePostModal.show, props.id);
  };

  const unlikepost = (id) => {
    fetch(API + props.authUserId + `/likes/${id}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => {
        setLike(!like);
      });
  };

  const likePost = () => {
    const ids = {
      user: {
        user_id: props.authUserId,
        post_id: props.id,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ids),
      credentials: "include",
    };

    fetch(API + props.authUserId + "/likes", payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.status === "ALREADY_LIKED") {
          unlikepost(resObj.like_id);
        } else {
          setLike(!like);
        }
      });
  };

  return (
    <div className="border-gray-200 w-full flex pt-2 pl-2  border-b">
      <div>
        <i className="fas fa-user-circle fa-3x text-gray-400 pl-2"></i>
      </div>
      <div className="p-2 flex flex-col w-full">
        <div className="pl-2 text-gray-500">@{props.post_user}</div>

        <p className="pl-2 break-all">{props.content}</p>

        <div className="flex pt-4 pl-2 justify-around items-center ">
          <i className="far fa-comment text-gray-500"></i>
          {like ? (
            <i
              onClick={() => likePost()}
              className="far fas fa-heart text-red-500 cursor-pointer hover:text-red-500 hover:bg-pink-100 p-2 rounded-full transition duration-200 ease-in-out"
            ></i>
          ) : (
            <i
              onClick={() => likePost()}
              className="far fa-heart text-gray-500 cursor-pointer hover:text-red-500 hover:bg-pink-100 p-2 rounded-full transition duration-200 ease-in-out"
            ></i>
          )}
          {props.authUserId === props.user_id ? (
            <button
              onClick={() => toggleDeletePostModal()}
              className="fas fa-trash text-gray-500 cursor-pointer focus:outline-none hover:text-red-600"
            ></button>
          ) : null}
        </div>
      </div>
      {props.deletePostModal.show && <DeletePostModal />}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    authUserId: state.authUser.id,
    deletePostModal: state.deletePostModal,
  };
};

const mapDispatchToProps = {
  toggleDeletePostModal,
};

export default connect(mapStatetoProps, mapDispatchToProps)(PostCard);
