import React from "react";
import Preloader from "../../Users/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.contentProfileInfo}>
      <div>
        <img
          className={s.photoUser}
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
        />
      </div>
      <div>
        {props.auth ? (
          <div className={s.statusOnlieBlock}>
            <div className={s.textStatusOnline} style={{ color: "#81DEA6" }}>
              online
            </div>
            <div
              className={s.circleStatusOnline}
              style={{ backgroundColor: "#81DEA6" }}
            ></div>
          </div>
        ) : (
          <div className={s.statusOnlieBlock}>
            <div className={s.textStatusOnline} style={{ color: "#ff0000" }}>
              offline
            </div>
            <div
              className={s.circleStatusOnline}
              style={{ backgroundColor: "#ff0000" }}
            ></div>
          </div>
        )}
        <div className={s.profileName}>Name Surname</div>

        <div className={s.aboutMeInfo}>
          <p>About Me {props.profile.aboutMe}</p>
          <p>Status</p>
          <ProfileStatus
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ProfileInfo;
