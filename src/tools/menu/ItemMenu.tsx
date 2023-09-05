import React, { FC, ReactNode } from "react";
import Style from "./Menu.module.scss";

interface IProps {
  name: string;
  icon?: ReactNode;
  path?: string;
}

const ItemMenu: FC<IProps> = ({ name, icon, path }) => {
  return (
    <>
      <li className={`${Style.item_menu}`}>
        {icon && icon}
        <span>{name}</span>
      </li>
    </>
  );
};

export default ItemMenu;
