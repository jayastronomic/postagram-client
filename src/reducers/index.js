import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import posts from "./posts";
import postModal from "./postModal";
import editProfileModal from "./editProfileModal";
import deletePostModal from "./deletePostModal";
import likes from "./likes";
import userPosts from "./userPosts";
import authUserPosts from "./authUserPosts";
import users from "./users";
import authUserFollowers from "./authUserFollowers";
import authUserFollowings from "./authUserFollowings";

export default combineReducers({
  authUser,
  isLoggedIn,
  posts,
  postModal,
  editProfileModal,
  deletePostModal,
  likes,
  userPosts,
  authUserPosts,
  users,
  authUserFollowers,
  authUserFollowings,
});
