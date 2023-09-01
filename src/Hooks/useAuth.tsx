import React, { useEffect, useState } from "react";
import { ITokenObject } from "../viewModel/types/IToken";
import { GetTokenLocal } from "../services/token/Token";
import { useDispatch } from "react-redux";
import { ResultModel } from "../viewModel/types/IApi";
import { CallApi } from "../services/api/CallApi";
import { GetProfile } from "../services/api/ApiRoutes";

const useAuth = () => {
  const [auth, setAuth] = useState<null>(null);
  const tokenLocal: false | ITokenObject = GetTokenLocal();
  const authorization = async () => {
    if (tokenLocal === false) {
      setAuth(null);
    } else {
      const userProfileResult: ResultModel<any> = await CallApi(
        GetProfile(tokenLocal?.userName),
        null,
        true,
        "GET",
        false
      );
      console.log(userProfileResult);
      //! if success req set auth data
      //! if failed req set auth null
    }
  };

  useEffect(() => {
    // if (tokenLocal === false) {
    //   setAuth(null);
    // } else {
    // }
    authorization();
  }, []);

  return [auth];
};

export default useAuth;
