import React, { useState } from "react";

import { connect } from "react-redux";
import { addFollowing } from "../actions/userActions";

const API = "http://localhost:3001/api/v1/users/";

const FollowCard = (props) => {
  const [followed, setFollowed] = useState(props.followed_user);

  const unfollowUser = (id) => {
    fetch(API + `${props.authUserId}/follows/${id}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => {
        setFollowed(!followed);
      });
  };

  const followUser = () => {
    const follow = {
      user: {
        follower_id: props.authUserId,
        followed_user_id: props.id,
      },
    };
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(follow),
      credentials: "include",
    };

    fetch(API + `${props.authUserId}/follows`, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.status === "ALREADY_FOLLOWED") {
          unfollowUser(resObj.follow_id);
        } else {
          setFollowed(!followed);
          props.addFollowing(1);
        }
      });
  };

  return (
    <div className="flex border-b border-gray-200 p-4">
      <div>
        <i className="fas fa-user-circle fa-3x text-gray-400 pl-2"></i>
      </div>
      <div className="flex flex-col pl-2 w-full">
        <p className="font-bold">{props.full_name}</p>
        <div className="flex items-center space-x-1">
          <p className="text-gray-500">@{props.username}</p>
          {props.followed_you ? (
            <p className="text-sm bg-gray-200 rounded px-1 text-gray-500">
              Follows you
            </p>
          ) : null}
        </div>
      </div>
      <div className="">
        {followed ? (
          <button
            onClick={() => followUser()}
            className="hover:bg-red-500 rounded-full px-4 py-1 text-blue-500 border-blue-500 font-bold border transition focus:outline-none hover:bg-blue-200"
          >
            Following
          </button>
        ) : (
          <button
            onClick={() => followUser()}
            className="rounded-full px-4 py-1 text-blue-500 border-blue-500 font-bold border transition focus:outline-none hover:bg-blue-200"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUserId: state.authUser.id,
  };
};

const mapDispatchToProps = {
  addFollowing,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowCard);
