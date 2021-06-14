import React, { Component } from "react";
import EditProfileModal from "../components/EditProfileModal";
import AviUploader from "../components/AviUploader";

import { connect } from "react-redux";
import {
  toggleEditProfileModal,
  loadFollowers,
  loadFollowings,
} from "../actions/userActions";
import { fetchAuthUserPostsSuccess } from "../actions/postActions";
import "../styles/Profile.css";
import PostsContainer from "./PostsContainer";

const API = "http://localhost:3001/api/v1/users/";

class ProfileContainer extends Component {
  componentDidMount() {
    fetch(API + `${this.props.id}/user_posts`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => this.props.fetchAuthUserPostsSuccess(resObj));

    this.props.loadFollowers(this.props.num_of_followers);
    this.props.loadFollowings(this.props.num_of_followings);
  }
  render() {
    return (
      <div className="flex flex-col overflow-auto  w-1/2">
        <div className="pt-4 pb-4 border-b w-full flex justify-between px-8">
          <div>
            {this.props.avatar_attached ? (
              <div
                style={{ backgroundImage: `url(${this.props.avatar_url})` }}
                className="avatar"
              ></div>
            ) : (
              <i className="fas fa-user-circle fa-7x text-gray-500 flex-none"></i>
            )}
            <p className="font-bold text-black text-xl">
              {this.props.full_name}
            </p>
            <p className="text-gray-600">@{this.props.username}</p>
            <div className="flex space-x-6">
              <p className="text-gray-500">
                <span className="text-black font-bold">
                  {this.props.following}
                </span>{" "}
                Following
              </p>
              <p className="text-gray-500">
                <span className="text-black font-bold">
                  {this.props.followers}
                </span>{" "}
                Followers
              </p>
            </div>
          </div>

          <div className="flex items-center ">
            <button
              onClick={() =>
                this.props.toggleEditProfileModal(!this.props.editProfileModal)
              }
              className="text-blue-400 border border-blue-400 h-10 items-center text-white font-bold px-4 py-2 rounded-full focus:outline-none hover:bg-blue-100 transition-colors ease-out delay-75"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {this.props.authUserPosts.length > 0 ? (
          <PostsContainer posts={this.props.authUserPosts} />
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div className="text-2xl text-gray-500">You have no posts</div>
          </div>
        )}
        {this.props.editProfileModal && <EditProfileModal {...this.props} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editProfileModal: state.editProfileModal,
    authUserPosts: state.authUserPosts,
    authUserId: state.authUser.id,
    following: state.authUserFollowings,
    followers: state.authUserFollowers,
  };
};

const mapDispatchToProps = {
  toggleEditProfileModal,
  fetchAuthUserPostsSuccess,
  loadFollowings,
  loadFollowers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
