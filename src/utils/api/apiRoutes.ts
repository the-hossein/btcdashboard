export const BASE_URL: string = "http://65.108.156.106/";
export const LOGIN: (username: string, pass: string) => string = (username, pass) => (
    `api/User/AdminLogin?UserName=${username}&Passwod=${pass}`);