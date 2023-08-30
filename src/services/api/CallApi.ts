import { BaseUrl } from "./ApiRoutes";
import { GetTokenLocal } from "../token/Token";
import { IResponseDataModel, ResultModel } from "../../viewModel/types/IApi";

export const CallApi = async <T>(
  Url: string,
  Body: RequestInit["body"],
  Auth: boolean,
  Method: string,
  File: boolean
): Promise<ResultModel<T>> => {
  let headerApi: RequestInit["headers"];
  let contentType: string = File ? "multipart/form-data" : "application/json";
  if (Auth === false) {
    // headerApi = { "Content-Type": contentType };
  } else {
    const userToken = GetTokenLocal();
    headerApi = {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": contentType,
    };
  }

  let requestOptions: RequestInit;
  if (Body === null) {
    requestOptions = {
      method: Method,
      headers: headerApi,
      redirect: "follow",
      credentials: "same-origin",
    };
  } else {
    requestOptions = {
      method: Method,
      headers: headerApi,
      redirect: "follow",
      credentials: "same-origin",
      body: Body,
    };
  }

  const response = await fetch(BaseUrl + Url, requestOptions);
  const _data: IResponseDataModel<T> = await response.json();
  const status = await response.status;

  const ResponseResult: ResultModel<T> = {
    data: _data,
    statusCode: status,
  };

  return ResponseResult;
};
