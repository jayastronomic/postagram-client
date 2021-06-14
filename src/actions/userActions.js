export const fetchAuthUserSuccess = (obj) => {
  return {
    type: "FETCH_AUTH_USER_SUCCESS",
    authUser: obj,
  };
};

export const loggedIn = (bool) => {
  return {
    type: "LOGGED_IN",
    bool: bool,
  };
};

export const removeAuthUser = (obj) => {
  return {
    type: "REMOVE_AUTH_USER",
    authUser: obj,
  };
};

export const toggleEditProfileModal = (bool) => {
  return {
    type: "TOGGLE_EDIT_PROFILE_MODAL",
    bool: bool,
  };
};

export const updateAuthUserSuccess = (obj) => {
  return {
    type: "UPDATE_AUTH_USER_SUCCESS",
    updatedAuthUser: obj,
  };
};

export const fetchUsersSuccess = (array) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    users: array,
  };
};

export const loadFollowers = (n) => {
  return {
    type: "LOAD_FOLLOWERS",
    followers: n,
  };
};

export const loadFollowings = (n) => {
  return {
    type: "LOAD_FOLLOWINGS",
    followings: n,
  };
};

export const addFollowing = (n) => {
  return {
    type: "ADD_FOLLOWING",
    addFollowing: n,
  };
};
