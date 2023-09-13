import React, { useEffect, useState } from "react";
import { ITokenObject } from "../viewModel/types/IToken";
import { GetTokenLocal } from "../services/token/Token";
import { ResultModel } from "../viewModel/types/IApi";
import { CallApi } from "../services/api/CallApi";
import { GetProfile } from "../services/api/ApiRoutes";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [auth, setAuth] = useState<null>(null);
  const navigate = useNavigate();
  const authorization = async () => {
    const tokenLocal: ITokenObject = GetTokenLocal();
    if (tokenLocal.isValid == false) {
      setAuth(null);
      navigate("/log-in");
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
    authorization();
  }, []);

  return [auth];
};

export default useAuth;
