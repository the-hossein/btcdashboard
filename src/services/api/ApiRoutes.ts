// export const BaseUrl: string = "https://localhost:7061/";
export const BaseUrl: string = "https://api.asanbtc.com/";
export const Login: (username: string, pass: string) => string = (username, pass) => (
    `api/User/AdminLogin?UserName=${username}&Passwod=${pass}`);

export const GetProfile: (username: string) => string = (username) => `api/User/GetAdminProfile?userName=${username}`