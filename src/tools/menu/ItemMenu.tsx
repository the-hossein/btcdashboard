import React, { FC, ReactNode } from "react";
import Style from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  name: string;
  icon?: ReactNode;
  path: string;
}

const ItemMenu: FC<IProps> = ({ name, icon, path }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${Style.item_menu_active}` : ""
        }
      >
        <li className={`${Style.item_menu}`}>
          {icon && icon}
          <span>{name}</span>
        </li>
      </NavLink>
    </>
  );
};

export default ItemMenu;
