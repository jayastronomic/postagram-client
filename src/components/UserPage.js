import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserPostsSuccess } from "../actions/postActions";

import PostsContainer from "../containers/PostsContainer";

const API = "http://localhost:3001/api/v1/users/";

class UserPage extends Component {
  componentDidMount() {
    fetch(API + `${this.props.state.userID}/user_posts`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => this.props.fetchUserPostsSuccess(resObj));
  }

  render() {
    return (
      <div className="flex h-screen">
        <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
        <div className="w-1/2 flex flex-col border">
          <div className="border-b px-8 py-4">
            <div className="flex justify-between items-center">
              <i className="fas fa-7x fa-user-circle text-gray-500"></i>
              <button className="text-blue-400 border border-blue-400 h-10 items-center text-white font-bold px-4 py-2 rounded-full focus:outline-none hover:bg-blue-100 transition-colors ease-out delay-75">
                Follow
              </button>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl">{this.props.state.fullName}</p>
              <p>@{this.props.state.username}</p>
            </div>
          </div>
          <PostsContainer posts={this.props.userPosts} />
        </div>

        <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPosts: state.userPosts,
  };
};

const mapDispatchToProps = {
  fetchUserPostsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
