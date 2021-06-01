import React, { Component } from "react";
import { connect } from "react-redux";
import LikesContainer from "../containers/LikesContainer";

import { fetchLikesSuccess } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/users/";

class Likes extends Component {
  componentDidMount() {
    fetch(API + this.props.authUser.id + "/likes", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => this.props.fetchLikesSuccess(resObj));
  }

  render() {
    if (this.props.likes.length > 0) {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <LikesContainer likes={this.props.likes} />
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
        </div>
      );
    } else {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="text-2xl text-gray-500">You have no likes</div>
          </div>
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
  };
};

const mapDispatchToProps = {
  fetchLikesSuccess,
};
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
