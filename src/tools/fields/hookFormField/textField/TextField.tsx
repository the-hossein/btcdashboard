import React, { InputHTMLAttributes, ReactElement, useEffect } from "react";
import Style from "./TextField.module.scss";
import {
  useController,
  UseControllerProps,
  FieldValues,
  Control,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  icon?: ReactElement;
  label?: string;
  placeHolder?: string;
  status?: 1 | 2 | 3;
  control: Control<T, object>;
}

type CombinedProps<T extends FieldValues> = IProps<T> &
  UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement>;

const TextField = <T extends FieldValues>({
  label,
  icon,
  placeHolder,
  status = 1,
  ...props
}: CombinedProps<T>) => {
  const {
    field,
    fieldState: { error, isTouched, invalid },
  } = useController(props);

  return (
    <div className={Style.asanBtc_field}>
      <div>
        {icon}
        <span>{label}</span>
      </div>
      <input
        {...field}
        placeholder={placeHolder}
        className={
          !invalid && isTouched
            ? Style.success
            : invalid && isTouched
            ? Style.error
            : invalid
            ? Style.error
            : ""
        }
      />
      <p className={Style.error_box}>{error?.message ?? ""}</p>
    </div>
  );
};

export default TextField;
