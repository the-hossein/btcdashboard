import React, { ReactElement, useState } from "react";
import Style from "./PasswordField.module.scss";
import { Eye, EyeSlash } from "iconsax-react";
import { PasswrodTypeEnum } from "../../../viewModel/enums/PasswordTypeEnum";
interface Props {
  icon?: ReactElement;
  lable?: string;
  onChangeMethod: (param?: any) => void;
  placeholder?: string;
}
const PasswordField: React.FC<Props> = ({
  icon,
  lable,
  onChangeMethod,
  placeholder = "Password",
}) => {
  const [passwordType, setpasswordType] = useState<PasswrodTypeEnum>(
    PasswrodTypeEnum.Password
  );
  const ChangeFildType = () => {
    if (passwordType === PasswrodTypeEnum.Password) {
      setpasswordType(PasswrodTypeEnum.Text);
    } else {
      setpasswordType(PasswrodTypeEnum.Password);
    }
  };
  return (
    <div className={Style.asanBtc_pass_field}>
      <div>
        {icon}
        <span>{lable}</span>
      </div>
      <div>
        <input
          type={passwordType}
          placeholder={placeholder}
          onChange={onChangeMethod}
        />

        <a onClick={ChangeFildType}>
          {passwordType === PasswrodTypeEnum.Password ? (
            <Eye size="20" color="var(--main-pen)" />
          ) : (
            <EyeSlash size="20" color="var(--main-pen)" />
          )}
        </a>
      </div>
    </div>
  );
};

export default PasswordField;
