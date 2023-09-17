import { UserToken } from "../../text/LocalStorage";
import { ITokenObject } from "../../viewModel/types/IToken";

export const SaveTokenLocal: (
  token: string,
  expire: string,
  userName: string
) => void = (token, expire, userName) => {
  let obj: ITokenObject = {
    isValid: true,
    token,
    expire,
    userName,
  };
  localStorage.setItem(UserToken, JSON.stringify(obj));
};

export const DeleteTokenLocal: () => void = () => {
  localStorage.removeItem(UserToken);
};

export const GetTokenLocal: () => ITokenObject = () => {
  var tokenState: ITokenObject = {
    isValid: false,
    token: "",
    expire: "",
    userName: "",
  };
  const userToken = localStorage.getItem(UserToken);

  if (userToken == null) {
    tokenState.isValid = false;
  } else {
    const tokenInfo: ITokenObject = JSON.parse(userToken);
    const expireDate = new Date(tokenInfo.expire).getTime();
    const nowDate = new Date().getTime();

    if (expireDate > nowDate) {
      tokenInfo.isValid = true;
    } else {
      DeleteTokenLocal();
      tokenInfo.isValid = false;
    }
    tokenState = tokenInfo;
  }

  return tokenState;
};
