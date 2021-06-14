export const fetchPostsSuccess = (array) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    posts: array,
  };
};

export const togglePostModal = (bool) => {
  return {
    type: "TOGGLE_POST_MODAL",
    bool: bool,
  };
};

export const createPostSuccess = (obj) => {
  return {
    type: "CREATE_POST_SUCCESS",
    newPost: obj,
  };
};

export const deletePostSuccess = (obj) => {
  return {
    type: "DELETE_POST_SUCCESS",
    deletedPost: obj,
  };
};

export const toggleDeletePostModal = (bool, postID) => {
  return {
    type: "TOGGLE_DELETE_POST_MODAL",
    obj: { show: bool, postID: postID },
  };
};

export const fetchLikesSuccess = (array) => {
  return {
    type: "FETCH_LIKES_SUCCESS",
    likes: array,
  };
};

export const deleteLikeSuccess = (obj) => {
  return {
    type: "DELETE_LIKE_SUCCESS",
    deletedLike: obj,
  };
};

export const fetchUserPostsSuccess = (array) => {
  return {
    type: "FETCH_USER_POSTS_SUCCESS",
    userPosts: array,
  };
};

export const fetchAuthUserPostsSuccess = (array) => {
  return {
    type: "FETCH_AUTH_USER_POSTS_SUCCESS",
    authUserPosts: array,
  };
};

export const createAuthUserPostsSuccess = (obj) => {
  return {
    type: "CREATE_AUTH_USER_POST_SUCCESS",
    authUserPost: obj,
  };
};

export const deleteAuthUserPostSuccess = (obj) => {
  return {
    type: "DELETE_AUTH_USER_POST_SUCCESS",
    deletedAuthUserPost: obj,
  };
};
