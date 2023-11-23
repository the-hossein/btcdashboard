import React, { InputHTMLAttributes } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { TickCircle } from "iconsax-react";
import {
  useController,
  UseControllerProps,
  FieldValues,
  Control,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  label?: string;
  defaultChecked?: boolean;
  control: Control<T, object>;
}

type CombinedProps<T extends FieldValues> = IProps<T> &
  UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement>;

const CheckField = <T extends FieldValues>({
  label,
  defaultChecked = false,
  ...props
}: CombinedProps<T>) => {
  const {
    field,
    fieldState: { error, isTouched, invalid },
  } = useController(props);

  return (
    <>
      <FormControlLabel
        sx={{
          margin: 0,
          flexDirection: "row-reverse",
          ".MuiFormControlLabel-label": {
            color: "var(--main-pen)",
            fontSize: "14px",
          },
        }}
        control={
          <Checkbox
            color="primary"
            icon={<TickCircle />}
            checked={field.value}
            {...field}
            checkedIcon={<TickCircle variant="Bold" />}
            defaultChecked={defaultChecked}
          />
        }
        label={label}
      />
    </>
  );
};

export default CheckField;
