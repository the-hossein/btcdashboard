import React, { FC } from "react";
import Style from "./DatePicker.module.scss";
import { Calendar, Trash } from "iconsax-react";
import DatePickerLib from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";

interface IProps {
  value: Value;
  onChangeMethod: (e: Value) => void;
}

const DatePicker: FC<IProps> = ({ value, onChangeMethod }) => {
  return (
    <>
      <div className={`${Style.main_container}`}>
        <div className={`${Style.date_picker}`}>
          <DatePickerLib
            value={value}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-left"
            onChange={onChangeMethod}
          />
        </div>
        {value === null ? (
          <Calendar size={22} color="var(--main-pen)" />
        ) : (
          <Trash
            size={22}
            color="var(--main-pen)"
            onClick={(e) => onChangeMethod(null)}
          />
        )}
      </div>
    </>
  );
};

export default DatePicker;
