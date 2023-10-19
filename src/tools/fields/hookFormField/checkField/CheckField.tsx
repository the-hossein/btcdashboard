import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { TickCircle } from "iconsax-react";

interface IProps {
  label?: string;
  defaultChecked?: boolean;
}

const CheckField = ({ label, defaultChecked = false }: IProps) => {
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
