import React, { FC, ReactNode } from "react";
import Style from "./MainLayout.module.scss";
import SearchBox from "../fields/searchBox/SearchBox";
import { PlaceHolderContent } from "../../contents/PlaceHolders";
import { SearchNormal1 } from "iconsax-react";
import DatePicker from "../fields/datePicker/DatePicker";
import { Item } from "../dashboardLayout/ItemDashboard";

interface IProps {
  title: string;
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ title, children }) => {
  return (
    <>
      <div className={`${Style.container}`}>
        <div className={`${Style.row_title}`}>
          <h1>{title}</h1>
          <div className={`${Style.row_tools}`}>
            <Item width="220px">
              <SearchBox
                placeHolder={PlaceHolderContent.search}
                icon={<SearchNormal1 size={"22"} color="var(--main-pen)" />}
                style={{ backgroundColor: "#fff" }}
              />
            </Item>
            <DatePicker />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
