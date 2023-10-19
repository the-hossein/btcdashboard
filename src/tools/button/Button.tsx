import React from "react";
import Style from "./Button.module.scss";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  clickMethod?: () => void;
  link?: string;
  outline?: boolean;
}
const Button: React.FC<Props> = ({
  text,
  link,
  clickMethod,
  outline = false,
}) => {
  return (
    <>
      <div className={outline ? Style.button_sec : Style.button}>
        {link != null ? (
          <Link to={link}>{text}</Link>
        ) : (
          <a onClick={clickMethod}>{text}</a>
        )}
      </div>
    </>
  );
};

export default Button;
