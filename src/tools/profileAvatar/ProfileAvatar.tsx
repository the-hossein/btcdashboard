import React, { FC } from "react";
import Style from "./ProfileAvatar.module.scss";
import Profile from "../../assets/images/user.png";
import useAuth from "../../Hooks/useAuth";

interface IProps {}

const ProfileAvatar: FC<IProps> = () => {
  //! For getProfile and authenticate
  const [profileInfo] = useAuth();

  return (
    <>
      <div className={`${Style.profile_container}`}>
        <img src={Profile} alt="user profile" />
        <div className={`${Style.user_info}`}>
          <span>عرفان حسینی</span>
          <span>مدیر</span>
        </div>
      </div>
    </>
  );
};

export default ProfileAvatar;
