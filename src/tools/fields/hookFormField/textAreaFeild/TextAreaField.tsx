import React, { InputHTMLAttributes, ReactElement, useEffect } from "react";
import {
  useController,
  UseControllerProps,
  FieldValues,
  Control,
} from "react-hook-form";
import Style from "./TextArea.module.scss";

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

const TextAreaField = <T extends FieldValues>({
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

  useEffect(() => {
    // console.log(error, isTouched, invalid, props.name);
  }, [field]);

  return (
    <>
      <div className={Style.textarea_field}>
        <div>
          {icon}
          <span>{label}</span>
        </div>
        <textarea
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
        <p className={Style.error_box}>{error?.message}</p>
      </div>
    </>
  );
};

export default TextAreaField;
