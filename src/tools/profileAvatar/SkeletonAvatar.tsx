import React from "react";
import Style from "./ProfileAvatar.module.scss";

const SkeletonAvatar = () => {
  return (
    <>
      <div className={`${Style.profile_container}`}>
        <span className={Style.skeleton_avatar}>

        </span>
        <div className={`${Style.user_info} ${Style.skeleton_info}`}>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default SkeletonAvatar;
