import axios from "axios";
import { BASE_URL } from "./apiRoutes";
import { getTokenLocal } from "../token/token";

const callApi = async (url: string, header: boolean, body: any, method: string, file: boolean) => {
    let headerApi;
    let contentType = file ? "multipart/form-data" : "application/json";
    if (header === false) {
        headerApi = { "Content-Type": contentType };
    } else {
        const ls = getTokenLocal();
        headerApi = {
            Authorization: `Bearer ${ls}`,
            "Content-Type": contentType,
        };
    }

    let config;

    if (body === "{}") {
        config = {
            method: method,
            url: BASE_URL + url,
            headers: headerApi,
            withCredentials: true,
        };
    } else {
        config = {
            method: method,
            url: BASE_URL + url,
            headers: headerApi,
            data: body,
            withCredentials: true,
        };
    }

    try {
        const { data, status } = await axios(config);
        return { data: data, status: status, error: false };
    } catch (error) {
        return { error };
    }
}

export default callApi;