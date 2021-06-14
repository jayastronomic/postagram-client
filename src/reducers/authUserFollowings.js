export default function authUserFollowings(state = null, action) {
  switch (action.type) {
    case "LOAD_FOLLOWINGS":
      state = action.followings;
      return state;
    case "ADD_FOLLOWING":
      state += action.addFollowing;
      return state;
    default:
      return state;
  }
}
