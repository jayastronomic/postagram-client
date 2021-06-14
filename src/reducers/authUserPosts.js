export default function authUserPosts(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_POSTS_SUCCESS":
      return action.authUserPosts;
    case "CREATE_AUTH_USER_POST_SUCCESS":
      const newAuthUserPost = action.authUserPost;
      return [newAuthUserPost, ...state];
    case "DELETE_AUTH_USER_POST_SUCCESS":
      const filterdAuthUserPosts = state.filter(
        (p) => p.id !== action.deletedAuthUserPost.id
      );
      return filterdAuthUserPosts;
    default:
      return state;
  }
}
