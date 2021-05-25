import React from "react";
import ProfileContainer from "../containers/ProfileContainer";

import { connect } from "react-redux";

const Profile = (props) => {
  const AuthUserPosts = props.posts.filter(
    (post) => post.user_id === props.authUser.id
  );

  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-r bg-gray-200"></div>
      <ProfileContainer {...props.authUser} posts={AuthUserPosts} />
      <div className="w-1/4 border-l bg-gray-200"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, null)(Profile);
