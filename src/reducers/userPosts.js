export default function userPosts(state = [], action) {
  switch (action.type) {
    case "FETCH_USER_POSTS_SUCCESS":
      return action.userPosts;
    default:
      return state;
  }
}
