import React, { FC, ReactElement, CSSProperties } from "react";
import Style from "./SearchBox.module.scss";

interface IProps {
  icon?: ReactElement;
  placeHolder?: string;
  value?: string;
  onChangeMethod?: (param?: any) => void;
  style?: CSSProperties;
}

const SearchBox: FC<IProps> = ({
  icon,
  placeHolder,
  value,
  onChangeMethod,
  style,
}) => {
  return (
    <>
      <div className={Style.container_box} style={style}>
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
