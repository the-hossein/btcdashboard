import React, { useEffect, useLayoutEffect, useState } from "react";
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
import PasswordField from "../../tools/fields/passwordField/PasswordField";
import Button from "../../tools/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { PlaceHolderContent } from "../../contents/placeholders";
import { CallApi } from "../../services/api/CallApi";
import { Login as LoginPathApi } from "../../services/api/ApiRoutes";
import { UserLoginResponse } from "../../viewModel/types/UserLoginTypes";
import { GetTokenLocal, SaveTokenLocal } from "../../services/token/token";

const Login = () => {
  //! From Redux => user
  const dispatch = useDispatch();
  const userAdmin = useSelector((state: RootState) => state.user);

  const [loading, setloading] = useState(false);
  const [messageType, setmessageType] = useState<MessageType | null>(null);
  const [messageContent, setmessageContent] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const navigate = useNavigate();

  //! login request to backend
  const loginRequest: () => void = async () => {
    const { data, status } = await CallApi<UserLoginResponse>(
      LoginPathApi(username, password),
      null,
      false,
      "GET",
      false
    );

    if (status === 200) {
      SaveTokenLocal(
        data?.data?.token?.token ?? "",
        data?.data?.token?.tokenExpire ?? ""
      );
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  const CheckUserLogin = async () => {
    //* authorization user
    if (username === "" || password === "") {
      console.log("error");
      return;
    }

    loginRequest();
  };

  useEffect(() => {
    if (GetTokenLocal() !== false) {
      navigate("/");
    };
  }, []);

  return (
    <BeforeLoginContainer>
      <AlignCenterContainer>
        <div className={`${Style.login_box} mb-5`}>
          <div className={Style.header}>
            <a onClick={() => navigate(-1)}>
              <ArrowLeft size="22" color="var(--main-pen)" />
            </a>
          </div>
          <div className={Style.logo}>
            <img src={Logo} />
          </div>

          <MessageHandler type={messageType} message={messageContent} />

          <div className={Style.login_fileds}>
            <TextField
              placeHolder={PlaceHolderContent.username}
              value={username}
              onChangeMethod={(e) => setUsername(e.target.value)}
            />
            <PasswordField
              placeholder={PlaceHolderContent.password}
              onChangeMethod={(e) => setpassword(e.target.value)}
              value={password}
            />
            <div className={`${Style.login_btn}`}>
              <Button text={"ورود"} clickMethod={CheckUserLogin} />
            </div>
          </div>
        </div>
      </AlignCenterContainer>
      {loading === true && <CircularProgress />}
    </BeforeLoginContainer>
  );
};

export default Login;
