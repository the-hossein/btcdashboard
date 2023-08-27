import { BaseUrl } from "./ApiRoutes";
import { GetTokenLocal } from "../token/token";


interface IResponse<T> {
    status: number;
    data: T;
}

export const CallApi = async <T>(
    Url: string,
    Body: RequestInit["body"],
    Header: boolean,
    Method: string,
    File: boolean,
): Promise<IResponse<T>> => {
    let headerApi: RequestInit["headers"];
    let contentType: string = File ? "multipart/form-data" : "application/json";
    if (Header === false) {
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
        };
    } else {
        requestOptions = {
            method: Method,
            headers: headerApi,
            redirect: "follow",
            body: Body,
        };
    }

    const response = await fetch(BaseUrl + Url, requestOptions);
    const data: T = await response.json();
    const status = await response.status;

    const RequestResult = {
        data,
        status
    }

    return RequestResult;
}
