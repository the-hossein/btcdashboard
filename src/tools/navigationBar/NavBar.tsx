import React from "react";
import Style from "./NavBar.module.scss";
import TextField from "../fields/textField/TextField";
import { SearchNormal, SearchNormal1 } from "iconsax-react";
import { PlaceHolderContent } from "../../contents/PlaceHolders";
import SearchBox from "../fields/searchBox/SearchBox";
import ProfileAvatar from "../profileAvatar/ProfileAvatar";

const NavBar = () => {
  return (
    <>
      <nav className={`${Style.navigation_header}`}>
        <div className={`${Style.container_nav}`}>
          <div className={`${Style.search_container}`}>
            <SearchBox
              icon={<SearchNormal1 size={"22"} color="var(--main-pen)" />}
              placeHolder={PlaceHolderContent.search}
            />
          </div>
          <ProfileAvatar />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
