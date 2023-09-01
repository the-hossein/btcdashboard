import { ITokenObject } from "../../viewModel/types/IToken";

export const SaveTokenLocal: (token: string, expire: string, userName: string) => void = (token, expire, userName) => {
    let obj: ITokenObject = {
        token,
        expire,
        userName
    };
    localStorage.setItem("UserToken", JSON.stringify(obj));
};

export const DeleteTokenLocal: () => void = () => {
    localStorage.removeItem("UserToken");
};


export const GetTokenLocal: () => false | ITokenObject = () => {
    if (localStorage.getItem("UserToken") == null) {
        return false;
    } else {
        const localValue: string | null = localStorage.getItem("UserToken");
        let obj ;

        if (localValue !== null) {
            obj = JSON.parse(localValue);
        }

        const expireDate = new Date(obj.expire).getTime();
        const nowDate = new Date().getTime();

        if (expireDate > nowDate) {
            return obj;
        } else {
            DeleteTokenLocal();
            return false;
        }
    }
};


