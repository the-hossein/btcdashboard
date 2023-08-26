interface TokenObject {
    token: string;
    expire: string;
}


export const saveTokenLocal: (token: string, expire: string) => void = (token, expire) => {
    let obj: TokenObject = {
        token,
        expire,
    };
    localStorage.setItem("UTA", JSON.stringify(obj));
};

export const deleteTokenLocal: () => void = () => {
    localStorage.removeItem("UTA");
};


export const getTokenLocal: () => false | string = () => {
    if (localStorage.getItem("UTA") == null) {
        return false;
    } else {
        const localValue: string | null = localStorage.getItem("UTA");
        let obj;

        if (localValue !== null) {
            obj = JSON.parse(localValue);
        }

        const expireDate = new Date(obj.expire).getTime();
        const nowDate = new Date().getTime();

        if (expireDate > nowDate) {
            return obj.token;
        } else {
            deleteTokenLocal();
            return false;
        }
    }
};


