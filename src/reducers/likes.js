export default function likes(state = [], action) {
  switch (action.type) {
    case "FETCH_LIKES_SUCCESS":
      return action.likes;
    case "DELETE_LIKE_SUCCESS":
      const filteredLikes = state.filter((p) => p.id !== action.deletedLike.id);
      return filteredLikes;
    default:
      return state;
  }
}
