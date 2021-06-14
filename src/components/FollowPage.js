import React, { Component } from "react";
import FollowContainer from "../containers/FollowContainer";

import { fetchUsersSuccess } from "../actions/userActions";

import { connect } from "react-redux";

const API = "http://localhost:3001/api/v1/users";

class FollowPage extends Component {
  componentDidMount() {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        this.props.fetchUsersSuccess(resObj);
      });
  }
  render() {
    return (
      <div className="flex">
        <div className="w-1/4 overflow-hidden h-screen bg-gray-200"></div>
        <FollowContainer users={this.props.users} />
        <div className="w-1/4 overflow-hidden h-screen bg-gray-200"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  fetchUsersSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowPage);
