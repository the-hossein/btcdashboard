// export const BaseUrl: string = "https://localhost:7061/";
export const BaseUrl: string = "https://api.asanbtc.com/";
export const Login: (username: string, pass: string) => string = (username, pass) => (
    `api/User/AdminLogin?UserName=${username}&Passwod=${pass}`);

export const GetProfile: (username: string) => string = (username) => `api/User/GetAdminProfile?userName=${username}`
export const GetContentItems: string = "api/Content/GetContentTypeItems";
export const GetTableContent: (type: string | number, page?: string | number, perPage?: string | number) => string =
    (type, page, perPage) => `api/Content/GetConfirmContent?ContentType=${type}${(typeof page === "number" || typeof page === "string") && "&PageNumber=" + page}${perPage && "&Count=" + perPage}`;
export const GetAuthors: string = "api/User/GetAuthors";
export const GetLabels: string = "api/Content/GetContentTags";

export const CreateContentUrl: string = "api/Content/CreateContent";


