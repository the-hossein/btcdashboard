import React, { FC, ReactElement } from "react";
import Style from "./SearchBox.module.scss";

interface IProps {
  icon?: ReactElement;
  placeHolder?: string;
  value?: string;
  onChangeMethod?: (param?: any) => void;
}

const SearchBox: FC<IProps> = ({
  icon,
  placeHolder,
  value,
  onChangeMethod,
}) => {
  return (
    <>
      <div className={Style.container_box}>
        <div>{icon}</div>
        <input
          type="text"
          placeholder={placeHolder}
          value={value}
          onChange={onChangeMethod}
        />
      </div>
    </>
  );
};

export default SearchBox;
