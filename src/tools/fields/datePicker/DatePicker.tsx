import React, { FC } from "react";
import Style from "./DatePicker.module.scss";
import { Calendar } from "iconsax-react";
import DatePickerLib from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

interface IProps {}

const DatePicker: FC<IProps> = () => {
  return (
    <>
      <div className={`${Style.main_container}`}>
        <div className={`${Style.date_picker}`}>
          <DatePickerLib
            value={new DateObject()}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-left"
          />
        </div>
        <Calendar size={22} color="var(--main-pen)" />
      </div>
    </>
  );
};

export default DatePicker;
