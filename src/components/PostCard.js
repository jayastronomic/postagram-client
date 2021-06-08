import React, { useState } from "react";
import DeletePostModal from "./DeletePostModal";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { toggleDeletePostModal } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/users/";

const PostCard = (props) => {
  const [like, setLike] = useState(props.liked_by_current_user);
  const [count, setCount] = useState(props.number_of_likes);

  const toggleDeletePostModal = () => {
    props.toggleDeletePostModal(!props.deletePostModal.show, props.id);
  };

  const unlikePost = (id) => {
    fetch(API + props.authUserId + `/likes/${id}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => {
        setLike(!like);
        setCount(count - 1);
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
          unlikePost(resObj.like_id);
        } else {
          setLike(!like);
          setCount(count + 1);
        }
      });
  };

  return (
    // <Link
    //   to={{
    //     pathname: `/${props.post_user}/post/${props.id}`,
    //     state: {
    //       post: {
    //         username: props.post_user,
    //         fullName: props.user_full_name,
    //         content: props.content,
    //         numOfLikes: props.number_of_likes,
    //       },
    //     },
    //   }}
    //   className="w-full"
    // >
    <div className="border-gray-200 w-full flex pt-2 pl-2  border-b hover:bg-gray-100 transition duration-200 ease-in-out">
      <div>
        <i className="fas fa-user-circle fa-3x text-gray-400 pl-2"></i>
      </div>
      <div className="p-2 flex flex-col w-full">
        <span>
          <Link
            disable
            className="text-gray-500"
            to={
              props.authUserId === props.user_id
                ? "/profile"
                : {
                    pathname: `/${props.post_user}`,
                    state: {
                      username: props.post_user,
                      fullName: props.user_full_name,
                      userID: props.user_id,
                    },
                  }
            }
          >
            @{props.post_user}
          </Link>
        </span>

        <p className="pl-2 break-all">{props.content}</p>

        <div className="flex pt-4 pl-2 justify-around items-center ">
          <i className="far fa-comment text-gray-500"></i>
          <div className="flex items-center hover:text-red-500  space-x-2">
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
            {count > 0 ? <p className="text-sm">{count}</p> : null}
          </div>
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
    // </Link>
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
