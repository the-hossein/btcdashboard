import React, { FC } from "react";
import Style from "./Table.module.scss";
import { CloseCircle, Edit, TickCircle, Trash } from "iconsax-react";
import { convertDateToPersian } from "./UtiltyTable";

interface IProps {
  value: string | number | boolean | Date;
  name: string;
}

const ItemCell: FC<IProps> = ({ value, name }) => {
  switch (name) {
    case "actions":
      return (
        <div className={Style.action_container}>
          <Edit size="22" color="var(--dark-icon)" />
          <Trash size="22" color="var(--dark-icon)" variant="Bold" />
        </div>
      );

    case "date":
      return <>{value instanceof Date && convertDateToPersian(value)}</>;

    case "isActive":
      return (
        <>
          {value ? (
            <TickCircle size="22" color="var(--success)" />
          ) : (
            <CloseCircle size="22" color="var(--error)" />
          )}
        </>
      );

    default:
      return <>{value}</>;
  }
};

export default ItemCell;
