import React, { Component } from "react";
import ProfileContainer from "../containers/ProfileContainer";

import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <div className="flex h-screen">
        <div className="w-1/4 border-r bg-gray-200"></div>
        <ProfileContainer {...this.props.authUser} />
        <div className="w-1/4 border-l bg-gray-200"></div>
      </div>
    );
  }
}
export default connect(null, null)(Profile);
