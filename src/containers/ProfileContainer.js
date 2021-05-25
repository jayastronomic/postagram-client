import React from "react";
import EditProfileModal from "../components/EditProfileModal";
import AviUploader from "../components/AviUploader";

import { connect } from "react-redux";
import { toggleEditProfileModal } from "../actions/userActions";

import "../styles/Profile.css";

const ProfileContainer = (props) => {
  return (
    <div className="flex flex-col items-center overflow-auto  w-1/2">
      <div className="pt-4 pb-4 border-b w-full flex justify-between px-8">
        <div>
          {props.avatar_attached ? (
            <div
              style={{ backgroundImage: `url(${props.avatar_url})` }}
              className="avatar"
            ></div>
          ) : (
            <i className="fas fa-user-circle fa-7x text-gray-500 flex-none"></i>
          )}

          {/* <div
            style={{ backgroundImage: `url(${props.avatar_url})` }}
            className="avatar"
          ></div> */}
          {/* <i className="fas fa-user-circle fa-7x text-gray-500 flex-none"></i> */}
          <p className="font-bold text-black text-xl">{props.full_name}</p>
          <p className="text-gray-600">@{props.username}</p>
        </div>

        <div className="flex items-center ">
          <button
            onClick={() =>
              props.toggleEditProfileModal(!props.editProfileModal)
            }
            className="text-blue-400 border border-blue-400 h-10 items-center text-white font-bold px-4 py-2 rounded-full focus:outline-none hover:bg-blue-100 transition-colors ease-out delay-75"
          >
            Edit Profile
          </button>
        </div>
      </div>
      {props.editProfileModal && <EditProfileModal {...props} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editProfileModal: state.editProfileModal,
  };
};

const mapDispatchToProps = {
  toggleEditProfileModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
