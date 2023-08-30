export interface IUserLoginRequest {
  username: string;
  password: string;
}

export interface IUserLoginResponse {
  userName: string;
  token: {
    token: string;
    tokenExpire: string;
  };
}
