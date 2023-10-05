import React, { ChangeEvent, FC, ReactNode } from "react";
import Style from "./MainLayout.module.scss";
import SearchBox from "../fields/searchBox/SearchBox";
import { PlaceHolderContent } from "../../contents/PlaceHolders";
import { AddSquare, SearchNormal1 } from "iconsax-react";
import DatePicker from "../fields/datePicker/DatePicker";
import { Item } from "../dashboardLayout/ItemDashboard";
import type { Value } from "react-multi-date-picker";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  title: string;
  children: ReactNode;
  search: string;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  datePicker: Value;
  onchangeDate: (e: Value) => void;
}

const MainLayout: FC<IProps> = ({
  title,
  children,
  search,
  onChangeSearch,
  datePicker,
  onchangeDate,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={`${Style.container}`}>
        <div className={`${Style.row_title}`}>
          <div className={`${Style.navigation_help}`}>
            <h1>{title}</h1>
            <Link to={`${pathname}/create`}>
            <AddSquare size="24" color="var(--main-pen)" />
            </Link>
          </div>
          <div className={`${Style.row_tools}`}>
            <Item width="220px">
              <SearchBox
                placeHolder={PlaceHolderContent.search}
                icon={<SearchNormal1 size={"22"} color="var(--main-pen)" />}
                style={{ backgroundColor: "#fff" }}
                value={search}
                onChangeMethod={onChangeSearch}
              />
            </Item>
            <DatePicker value={datePicker} onChangeMethod={onchangeDate} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
