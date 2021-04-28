export default function posts(state = [], action) {
    switch (action.type) {
      case "FETCH_POSTS_SUCCESS":
        return action.posts;
      case "CREATE_POST_SUCCESS":
        const newPost = action.newPost;
        return [newPost, ...state];
      default:
        return state;
    }
  }