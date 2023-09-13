import { BaseUrl } from "./ApiRoutes";
import { GetTokenLocal } from "../token/Token";
import { IResponseDataModel, ResultModel } from "../../viewModel/types/IApi";
import { ITokenObject } from "../../viewModel/types/IToken";

export const CallApi = async <T>(
  Url: string,
  Body: RequestInit["body"],
  Auth: boolean,
  Method: string,
  File: boolean
): Promise<ResultModel<T>> => {
  let headers: RequestInit["headers"];
  let contentType: string = File ? "multipart/form-data" : "application/json";
  if (Auth === false) {
    // headers = { "Content-Type": contentType };
  } else {
    const userToken: ITokenObject | false = GetTokenLocal();
    // headers = {
    //   "Authorization": `Bearer ${userToken !== false && userToken?.userName}`,
    // };
  }

  let options: RequestInit;
  if (Body === null) {
    options = {
      method: Method,
      headers: headers,
      redirect: "follow",
      credentials: "same-origin",
    };
  } else {
    options = {
      method: Method,
      headers: headers,
      redirect: "follow",
      credentials: "same-origin",
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
