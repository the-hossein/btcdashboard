import React, { FC } from "react";
import style from "./Paper.module.scss";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
}

const Paper: FC<IProps> = ({ children }) => {
  return <div className={style.paper}>{children}</div>;
};

export default Paper;
