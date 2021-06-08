import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import posts from "./posts";
import postModal from "./postModal";
import editProfileModal from "./editProfileModal";
import deletePostModal from "./deletePostModal";
import favorites from "./favorites";
import likes from "./likes";
import userPosts from "./userPosts";

export default combineReducers({
  authUser,
  isLoggedIn,
  posts,
  postModal,
  editProfileModal,
  deletePostModal,
  favorites,
  likes,
  userPosts,
});
