export default function deletePostModal(
  state = { show: false, postID: null },
  action
) {
  switch (action.type) {
    case "TOGGLE_DELETE_POST_MODAL":
      return action.obj;
    default:
      return state;
  }
}
