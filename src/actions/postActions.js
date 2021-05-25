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
