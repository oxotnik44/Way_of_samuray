import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo
          auth={props.auth}
          profile={props.profile}
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <div>
        <MyPostsContainer />
      </div>
    </div>
  );
};
export default Profile;
