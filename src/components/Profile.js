import react from "react";
import ProfileContainer from "../containers/ProfileContainer";

const Profile = (props) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-r"></div>
      <ProfileContainer {...props.user} />
      <div className="w-1/4 border-l "></div>
    </div>
  );
};
export default Profile;