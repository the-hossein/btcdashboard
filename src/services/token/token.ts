interface TokenObject {
    token: string;
    expire: string;
}


export const SaveTokenLocal: (token: string, expire: string) => void = (token, expire) => {
    let obj: TokenObject = {
        token,
        expire,
    };
    localStorage.setItem("UserToken", JSON.stringify(obj));
};

export const DeleteTokenLocal: () => void = () => {
    localStorage.removeItem("UserToken");
};


export const GetTokenLocal: () => false | string = () => {
    if (localStorage.getItem("UserToken") == null) {
        return false;
    } else {
        const localValue: string | null = localStorage.getItem("UserToken");
        let obj;

        if (localValue !== null) {
            obj = JSON.parse(localValue);
        }

        const expireDate = new Date(obj.expire).getTime();
        const nowDate = new Date().getTime();

        if (expireDate > nowDate) {
            return obj.token;
        } else {
            DeleteTokenLocal();
            return false;
        }
    }
};


