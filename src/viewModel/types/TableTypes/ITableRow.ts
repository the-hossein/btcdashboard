export interface IRows {
    [key: string]: any;
    actions: null;
    uuid: number;
    title: string;
    date: Date;
    location: number;
    isActive: boolean;
}

export interface ITableContentRow {
    [key: string]: any;
    IntID: number;
    ContentTypeID: number
    Titr: string;
    Lead: string;
    ContentText: string;
    PicFile: string;
    ReleaseTime: Date;
    Label: string;
    Favorite: boolean;
    VisitNo: number;
    Confirmed: boolean;
    Telegram: boolean;
    TelegramSent: boolean;
    Files: null;
    SourceTitle: string;
    SourceLink: string;
    AuthorUserAccountID: number;
    LikeNum: number;
    DisLikeNum: number;
    InsertDate: Date;
    LastUpdate: Date;
    VideoFile: null;
    VoiceFile: null;
    ExpireDate: null;
    NewsPaper: boolean;
    PicAlt: string;
    Keyword: string;
    Title: string;
    AdLocation: number;
    EnglishTitr: string;
    ShowLocation: number;
    ID: number;
    UserName: string;
    Pass: string;
    Email: string;
    AccessLevel: string;
    IsAdmin: boolean;
    NationalCode: string;
    Tel: string;
    CellPhone: string;
    NationalCardImage: null;
    BankCardImage: null;
    BankCardNo: string;
    Avatar: string;
    FName: string;
    LName: string;
    CreditPoint: number;
    IsActive: boolean;
    Address: string;
    TelNumberVerified: boolean;
    CellNumberVerified: boolean;
    AddressVerified: boolean;
    IdentityVerified: boolean;
    IdentityImage: null;
    TelegramTel: null;
}
