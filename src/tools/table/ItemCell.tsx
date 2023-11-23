import React, { FC } from "react";
import Style from "./Table.module.scss";
import { CloseCircle, Edit, TickCircle, Trash } from "iconsax-react";
import { convertDateToPersian } from "./UtiltyTable";
import { Link, useLocation } from "react-router-dom";
import { ShowToast } from "../toast/Toastify";
import { StatusEnumToast } from "../../viewModel/enums/StatusToastEnum";

interface IProps {
  value: string | number | boolean | Date;
  name: string;
  id: number;
}

const ItemCell: FC<IProps> = ({ value, name, id }) => {
  const location = useLocation();

  switch (name) {
    case "actions":
      return (
        <div className={Style.action_container}>
          <Link to={`${location.pathname}/edit`}>
            <Edit size="22" color="var(--dark-icon)" />
          </Link>
          <Trash
            size="22"
            color="var(--dark-icon)"
            variant="Bold"
            onClick={() => ShowToast(StatusEnumToast.success, "id :" + id)}
          />
        </div>
      );

    case "ReleaseTime":
      return (
        <>{typeof value == "string" && convertDateToPersian(new Date(value))}</>
      );

    case "IsActive":
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
