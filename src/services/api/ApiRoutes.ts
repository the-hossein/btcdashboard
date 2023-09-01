export const BaseUrl: string = "http://65.108.156.106/";
export const Login: (username: string, pass: string) => string = (username, pass) => (
    `api/User/AdminLogin?UserName=${username}&Passwod=${pass}`);

export const GetProfile: (username: string) => string = (username) => `api/User/GetAdminProfile?userName=${username}`