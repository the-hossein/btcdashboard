import React, { ReactElement } from "react";
import Style from "./TextField.module.scss";

interface Props {
  icon?: ReactElement;
  lable?: string;
  placeHolder?: string;
  value?: string;
  onChangeMethod?: (param?: any) => void;
  status?: 1 | 2 | 3;
}
const TextField: React.FC<Props> = ({
  icon,
  lable,
  onChangeMethod,
  placeHolder,
  status = 1,
}) => {
  return (
    <div className={Style.asanBtc_field}>
      <div>
        {icon}
        <span>{lable}</span>
      </div>
      <input
        onChange={onChangeMethod}
        placeholder={placeHolder}
        className={
          status === 1 ? "" : status === 2 ? Style.error : Style.success
        }
      />
    </div>
  );
};

export default TextField;
