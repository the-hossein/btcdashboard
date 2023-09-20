import React, { FC } from "react";
import Style from "./ProfileAvatar.module.scss";
import Profile from "../../assets/images/user.png";
import useAuth from "../../hooks/useAuth";
import { useTypedSelector } from "../../redux/store";
import SkeletonAvatar from "./SkeletonAvatar";
import { AccessLevelAdmin } from "../../viewModel/enums/AccessLevelAdminEnum";

interface IProps {}

const accessLevelHandler = (data: string): string => {
  switch (data) {
    case "Manager":
      return AccessLevelAdmin.Manager;
    default:
      return "";
  }
};

const ProfileAvatar: FC<IProps> = () => {
  //! For getProfile and authenticate
  useAuth();
  const userInformation = useTypedSelector((state) => state.user);

  return (
    <>
      {userInformation.loader ? (
        <SkeletonAvatar />
      ) : (
        <div className={`${Style.profile_container}`}>
          <img src={Profile} alt="user profile" />
          <div className={`${Style.user_info}`}>
            <span>
              {userInformation.userProfile?.fname}{" "}
              {userInformation.userProfile?.lname}
            </span>
            <span>
              {accessLevelHandler(
                userInformation.userProfile?.accessLevel ?? ""
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileAvatar;
