import React, { FC, ReactNode } from "react";
import Style from "./DashboardBody.module.scss";

interface IProps {
  children?: ReactNode;
}

const DashboardBody: FC<IProps> = ({ children }) => {
  return <section className={`${Style.dashboard_body}`}>{children}</section>;
};

export default DashboardBody;
