import React, { FC } from "react";
import Style from "./DashboardSection.module.scss";
import { Item } from "../dashboardLayout/ItemDashboard";

interface IProps {
  title: string;
}

const DashboardSection: FC<IProps> = ({ title }) => {
  return (
    <section className={`${Style.main_section}`}>
      <h1>{title}</h1>
      <div className={`${Style.flex_container}`}>
        <div className={`${Style.square_item}`}></div>
        <div className={`${Style.square_item}`}></div>
        <div className={`${Style.square_item}`}></div>
        <div className={`${Style.square_item}`}></div>
        <div className={`${Style.square_item}`}></div>
      </div>

      <div className={`${Style.flex_container} ${Style.mt}`}>
        <Item width="60%">
          <div className={`${Style.square_item} ${Style.rectangle}`}></div>
        </Item>
        <Item width="40%">
          <div className={`${Style.square_item} ${Style.rectangle}`}></div>
        </Item>
      </div>
    </section>
  );
};

export default DashboardSection;
