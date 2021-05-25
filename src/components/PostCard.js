import React from "react";
import DeletePostModal from "./DeletePostModal";
import { connect } from "react-redux";

import { toggleDeletePostModal } from "../actions/postActions";

const PostCard = (props) => {
  const toggleDeletePostModal = () => {
    props.toggleDeletePostModal(!props.deletePostModal.show, props.id);
  };

  return (
    <div className="border-gray-200 w-full flex pt-2 pl-2  border-b">
      <div>
        <i className="fas fa-user-circle fa-3x text-gray-400 pl-2"></i>
      </div>
      <div className="p-2 flex flex-col w-full">
        <div className="pl-2 text-gray-500">@{props.post_user}</div>

        <p className="pl-2 break-all">{props.content}</p>

        <div className="flex pt-4 pl-2 justify-around items-center ">
          <i className="far fa-comment text-gray-500"></i>
          <i className="far fa-heart text-gray-500 cursor-pointer"></i>
          {props.authUserId === props.user_id ? (
            <button
              onClick={() => toggleDeletePostModal()}
              className="fas fa-trash text-gray-500 cursor-pointer focus:outline-none hover:text-red-600"
            ></button>
          ) : null}
        </div>
      </div>
      {props.deletePostModal.show && <DeletePostModal />}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    authUserId: state.authUser.id,
    deletePostModal: state.deletePostModal,
  };
};

const mapDispatchToProps = {
  toggleDeletePostModal,
};

export default connect(mapStatetoProps, mapDispatchToProps)(PostCard);
