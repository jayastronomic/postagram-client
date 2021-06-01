import React, { Component } from "react";
import PostsContainer from "../containers/PostsContainer";
import { connect } from "react-redux";

import { fetchPostsSuccess } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/posts";

class Home extends Component {
  componentDidMount() {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj) {
          this.props.fetchPostsSuccess(resObj);
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.props.posts.length > 0) {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <PostsContainer posts={this.props.posts} />
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          {/* <PostsContainer posts={this.props.posts} /> */}
        </div>
      );
    } else {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="text-2xl text-gray-500">There are no posts</div>
          </div>
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  fetchPostsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
