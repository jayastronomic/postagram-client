export default function postModal(state = false, action) {
    switch (action.type) {
      case "TOGGLE_POST_MODAL":
        return action.bool;
      default:
        return state;
    }
  }