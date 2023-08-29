import { StatusCode } from "../enums/StatusCode";

export interface ResultModel<T> {
  data: IResponseDataModel<T> | null;
  statusCode: StatusCode;
}
export interface IResponseDataModel<T> {
  code: StatusCode;
  message: string;
  data: T | null;
}
