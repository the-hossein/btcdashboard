export interface UserLoginInterface {
    username: string;
    password: string;
};

export interface UserLoginResponse {
    code: number;
    data: null | {
        userName: string;
        token: {
            token: string;
            tokenExpire: string;
        }
    };
    message: string;
    result: null;
}