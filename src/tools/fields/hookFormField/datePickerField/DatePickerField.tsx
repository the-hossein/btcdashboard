import React, { ReactElement } from "react";
import Style from "./DatePickerField.module.scss";
import DatePickerLib from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";

interface IProps {
  icon?: ReactElement;
  label?: string;
  placeholder?: string;
  value: Value;
  onChangeMethod: (e: Value) => void;
}

const DatePickerField = ({ icon, label, placeholder, value, onChangeMethod }: IProps) => {
  return (
    <>
      <div className={Style.dropdown_field}>
        <div className={Style.container_label} >
          {icon}
          <span>{label}</span>
        </div>
        <div className={`${Style.main_container}`}>
          <div className={`${Style.date_picker}`}>
            <DatePickerLib
              value={value}
              calendar={persian}
              locale={persian_fa}
              placeholder={placeholder}
              calendarPosition="bottom-left"
              
              onChange={onChangeMethod}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePickerField;
