
import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import posts from "./posts";
import postModal from "./postModal";
import editProfileModal from "./editProfileModal";

export default combineReducers({
  authUser,
  isLoggedIn,
  posts,
  postModal,
  editProfileModal,
});