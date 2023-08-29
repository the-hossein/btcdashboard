import React from "react";
import Style from "./Button.module.scss";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  clickMethod?: () => void;
  link?: string;
}
const Button: React.FC<Props> = ({ text, link, clickMethod }) => {
  return (
    <>
      <div className={Style.button}>
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
