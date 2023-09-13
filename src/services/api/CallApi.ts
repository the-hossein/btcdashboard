import { BaseUrl } from "./ApiRoutes";
import { GetTokenLocal } from "../token/Token";
import { IResponseDataModel, ResultModel } from "../../viewModel/types/IApi";
import { ITokenObject } from "../../viewModel/types/IToken";
import { StatusCode } from "../../viewModel/enums/StatusCode";

export const CallApi = async <T>(
  Url: string,
  Body: RequestInit["body"],
  Auth: boolean,
  Method: string,
  File: boolean
): Promise<ResultModel<T>> => {
  const myHeaders = new Headers();

  let contentType: string = File ? "multipart/form-data" : "application/json";
  if (Auth === false) {
    myHeaders.append("Content-Type", contentType);
  } else {
    const userToken: ITokenObject = GetTokenLocal();
    if (userToken.isValid) {
      myHeaders.append("Content-Type", contentType);
      myHeaders.append("Authorization", "Bearer " + userToken.token);
    } else {
      const ResponseResult: ResultModel<T> = {
        data: null,
        statusCode: StatusCode.Unauthorized,
      };

      return ResponseResult;
    }
  }
  let options: RequestInit;
  if (Body === null) {
    options = {
      method: Method,
      headers: myHeaders,
      redirect: "follow",
    };
  } else {
    options = {
      method: Method,
      headers: myHeaders,
      redirect: "follow",
      body: Body,
    };
  }

  const urlReq: string = BaseUrl + Url;
  const response = await fetch(urlReq, options);
  const _data: IResponseDataModel<T> = await response.json();
  const status = await response.status;

  const ResponseResult: ResultModel<T> = {
    data: _data,
    statusCode: status,
  };

  return ResponseResult;
};
