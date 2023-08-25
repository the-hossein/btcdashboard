import React, { useState } from "react";
import { BeforeLoginContainer } from "../../tools/container/beforeLoginContainer.tsx/Container";
import { AlignCenterContainer } from "../../tools/container/customeContainer/AlignCenterContainer";
import { CircularProgress } from "@mui/material";
import Logo from "../../assets/images/Asset94.png";
import { MessageHandler } from "../../tools/messagesHandler/MessagesHandler";
import Style from "./Login.module.scss";
import { MessageType } from "../../viewModel/enums/MessageType";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import TextField from "../../tools/fields/textField/TextField";
const Login = () => {
  const [loading, setloading] = useState(false);
  const [messageType, setmessageType] = useState<MessageType | null>(null);
  const [messageContent, setmessageContent] = useState("");
  const navigate = useNavigate();
  return (
    <BeforeLoginContainer>
      <AlignCenterContainer>
        <div className={`${Style.login_box} mb-5`}>
          <div className={Style.header}>
            <a onClick={() => navigate(-1)}>
              <ArrowLeft size="22" color="var(--main-pen)" />
              Back
            </a>
            <img src={Logo} />
          </div>

          <MessageHandler type={messageType} message={messageContent} />
          <TextField />
          <div className={`${Style.login_btn}`}>
            {/* <Button
              text={translate("BUTTON.NEXT")}
              clickMethod={checkUserNameClick}
            /> */}
          </div>
        </div>
      </AlignCenterContainer>
      {loading === true && <CircularProgress />}
    </BeforeLoginContainer>
  );
};

export default Login;
