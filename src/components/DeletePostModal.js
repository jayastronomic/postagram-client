import React from "react";
import { connect } from "react-redux";

import {
  deletePostSuccess,
  deleteLikeSuccess,
  toggleDeletePostModal,
} from "../actions/postActions";

const API = "http://localhost:3001/api/v1/posts/";

const DeletePostModal = (props) => {
  const handleDelete = () => {
    fetch(API + props.deletePostModal.postID, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => {
        console.log(resObj);
        props.deleteLikeSuccess(resObj);
        props.deletePostSuccess(resObj);
      });

    toggleDeletePostModal();
  };

  const toggleDeletePostModal = () => {
    props.toggleDeletePostModal(!props.deletePostModal.show, null);
  };

  return (
    <div className="inset-0 bg-black bg-opacity-25 absolute flex justify-center items-center">
      <div className="p-10 bg-white flex flex-col w-3/12 items-center rounded-xl">
        <h1 className="text-xl font-bold">Delete Post?</h1>
        <p className="text-gray-500">
          This can’t be undone and it will be removed from your profile, the
          feed of any accounts that follow you, and from Postagram search
          results.
        </p>
        <div className="pt-4 space-x-4">
          <button
            onClick={() => toggleDeletePostModal()}
            className="bg-gray-200 px-8 py-2 font-bold rounded-full focus:outline-none "
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete()}
            className="bg-red-500 px-8 py-2 font-bold rounded-full text-white focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
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
  deletePostSuccess,
  toggleDeletePostModal,
  deleteLikeSuccess,
};

export default connect(mapStatetoProps, mapDispatchToProps)(DeletePostModal);
