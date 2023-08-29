export interface UserLoginInterface {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  userName: string;
  token: {
    token: string;
    tokenExpire: string;
  };
}
