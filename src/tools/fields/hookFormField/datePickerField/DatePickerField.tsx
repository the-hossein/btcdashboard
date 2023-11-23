import React, { InputHTMLAttributes, ReactElement, useEffect } from "react";
import Style from "./DatePickerField.module.scss";
import DatePickerLib from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import {
  useController,
  UseControllerProps,
  FieldValues,
  Control,
} from "react-hook-form";
import {
  convertDateToPersian,
  convertPersianDateToMilady,
} from "../../../table/UtiltyTable";

interface IProps<T extends FieldValues> {
  icon?: ReactElement;
  label?: string;
  placeholder?: string;
  control: Control<T, object>;
}

type CombinedProps<T extends FieldValues> = IProps<T> &
  UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement>;

const DatePickerField = <T extends FieldValues>({
  icon,
  label,
  placeholder,
  ...props
}: CombinedProps<T>) => {
  const {
    field,
    fieldState: { error, isTouched, invalid },
  } = useController(props);

  console.log(convertDateToPersian(field.value, true), "ready data")
  
  return (
    <>
      <div className={Style.dropdown_field}>
        <div className={Style.container_label}>
          {icon}
          <span>{label}</span>
        </div>
        <div
          className={`${Style.main_container}  ${
            !invalid && isTouched
              ? Style.success
              : invalid && isTouched
              ? Style.error
              : invalid
              ? Style.error
              : ""
          }`}
        >
          <div className={`${Style.date_picker}`}>
            <DatePickerLib
              calendar={persian}
              locale={persian_fa}
              placeholder={placeholder}
              calendarPosition="bottom-left"
              value={convertDateToPersian(field.value)}
              render={<input onBlur={field.onBlur} readOnly />}
              onChange={(e) => {
                const timeStamp = e?.valueOf();
                if (typeof timeStamp === "number") {
                  field.onChange(convertPersianDateToMilady(timeStamp));
                }
              }}
            />
          </div>
        </div>
        <p className={Style.error_box}>{error?.message ?? ""}</p>
      </div>
    </>
  );
};

export default DatePickerField;
