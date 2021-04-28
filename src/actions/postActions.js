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

