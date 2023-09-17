import React, { useEffect, useState } from "react";
import { ITokenObject } from "../viewModel/types/IToken";
import { GetTokenLocal } from "../services/token/Token";
import { ResultModel } from "../viewModel/types/IApi";
import { CallApi } from "../services/api/CallApi";
import { GetProfile } from "../services/api/ApiRoutes";
import { useNavigate } from "react-router-dom";
import { IProfileUser } from "../viewModel/types/IProfile";
import { useDispatch, useSelector } from "react-redux";
import { StatusCode } from "../viewModel/enums/StatusCode";
import {
  InitialStateUser,
  setLoader,
  setUserProfile,
} from "../redux/slices/UserSlice";
import { ShowToast } from "../tools/toast/Toastify";
import { StatusEnumToast } from "../viewModel/enums/StatusToastEnum";
import { GetProfileMessages } from "../contents/BackendMessages";
import { RootState, useTypedSelector } from "../redux/store";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorization = async () => {
    const tokenLocal: ITokenObject = GetTokenLocal();
    if (tokenLocal.isValid === false) {
      navigate("/log-in");
    } else {
      dispatch(setLoader(true));
      const userProfileResult: ResultModel<IProfileUser> = await CallApi(
        GetProfile(tokenLocal?.userName),
        null,
        true,
        "GET",
        false
      );
      //! if success req set auth data
      if (userProfileResult.statusCode === StatusCode.Success) {
        dispatch(setUserProfile(userProfileResult?.data?.data));
      } else {
        //! if failed req set auth null
        ShowToast(StatusEnumToast.error, GetProfileMessages.NotRegistered);
      }
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    authorization();
  }, []);
};

export default useAuth;
