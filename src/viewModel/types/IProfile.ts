export interface IProfileUser {
    id: number;
    userName: string;
    pass: string;
    email: string;
    accessLevel: string;
    isAdmin: boolean;
    nationalCode: string;
    tel: string;
    cellPhone: string;
    nationalCardImage: string;
    bankCardImage: string;
    bankCardNo: string;
    avatar: null | string;
    fname: string;
    lname: string;
    creditPoint: number,
    insertDate: string;
    lastUpdate: string;
    isActive: boolean;
    address: string;
    telNumberVerified: boolean;
    cellNumberVerified: boolean;
    addressVerified: boolean;
    identityVerified: boolean;
    identityImage: string;
    newsPaper: boolean;
    telegramTel: string;
}