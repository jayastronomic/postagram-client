import React from "react";
import EditProfileForm from "../components/partials/EditProfileForm";

const EditProfileModal = (props) => {
  return (
    <div className="inset-0 bg-black bg-opacity-75 absolute flex justify-center pt-8 pb-8">
      <EditProfileForm {...props} />
    </div>
  );
};

export default EditProfileModal;