export default function authUserFollowers(state = 0, action) {
  switch (action.type) {
    case "LOAD_FOLLOWERS":
      return (state = action.followers);
    case "ADD_FOLLOWER":
      return (state += action.addFollower);
    default:
      return state;
  }
}
