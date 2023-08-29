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
import { setLoader } from "../../redux/slices/userSlice";
import { ShowToast } from "../../tools/toast/toastify";
import { StatusEnumToast } from "../../viewModel/enums/StatusToastEnum";
import { ResultModel } from "../../viewModel/types/IApi";

const Login = () => {
  //! From Redux => user
  const [loading, setloading] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const navigate = useNavigate();

  //! login request to backend
  const loginRequest: () => void = async () => {
    setloading(true);
    const userLoginResult: ResultModel<UserLoginResponse> =
      await CallApi<UserLoginResponse>(
        LoginPathApi(username, password),
        null,
        false,
        "GET",
        false
      );

    if (userLoginResult.statusCode === 200) {
      ShowToast(StatusEnumToast.success, "با موفقیت وارد حساب کاربری خود شدید");
      SaveTokenLocal(
        userLoginResult.data?.data?.token.token ?? "",
        userLoginResult.data?.data?.token.tokenExpire ?? ""
      );
      navigate("/");
    } else {
      ShowToast(StatusEnumToast.error, userLoginResult.data?.message ?? "");
    }

    setloading(false);
  };

  const CheckUserLogin = async () => {
    //* authorization user
    alert("moz")
    if (username === "" || password === "") {
      ShowToast(StatusEnumToast.error, "باید تمام فیلد ها را پر کنید");
      return;
    }

    loginRequest();
  };

  useEffect(() => {
    if (GetTokenLocal() !== false) {
      navigate("/");
    }
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
              {loading === true ? (
                <div className={Style.circularProgress}>
                  <CircularProgress />
                </div>
              ) : (
                <Button text={"ورود"} clickMethod={CheckUserLogin} />
              )}
            </div>
          </div>
        </div>
      </AlignCenterContainer>
    </BeforeLoginContainer>
  );
};

export default Login;
