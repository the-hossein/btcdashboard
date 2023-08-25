import React, { ReactElement, useEffect, useState } from "react";
import Style from "./TextField.module.scss";

interface Props {
  icon?: ReactElement;
  lable?: string;
  placeHolder?: string;
  value?: string;
  onChangeMethod?: (param?: any) => void;
}
const TextField: React.FC<Props> = ({
  icon,
  lable,
  onChangeMethod,
  placeHolder,
}) => {
  return (
    <div className={Style.asanBtc_field}>
      <div>
        {icon}
        <span>{lable}</span>
      </div>
      <input
        //value={value}
        onChange={onChangeMethod}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default TextField;
