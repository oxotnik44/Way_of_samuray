import React from "react";
import Preloader from "../../Users/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div className={s.content}>
      <div>
        <img src={props.profile.photos.large } />
      </div>
      <p>About Me {props.profile.aboutMe}</p>
      <p>{props.profile.contacts.vk}</p>
      <div className={s.discriptionBlock}>ava + discriptione</div>
    </div>
  );
};
export default ProfileInfo;
