export interface ICreateContentRequest {
    contentTypeId: number;
    titr: string;
    lead: string;
    contentText: string;
    picFile: string;
    releaseTime: Date | null;
    label: string;
    favorite: boolean;
    visitNo: number;
    confirmed: boolean;
    telegram: boolean;
    telegramSent: boolean;
    files: string;
    sourceTitle: string;
    sourceLink: string;
    authorUserAccountId: number | null;
    likeNum: number;
    disLikeNum: number;
    insertDate: Date | string | null;
    lastUpdate: Date | string | null;
    videoFile: string;
    voiceFile: string;
    expireDate: Date | null;
    newsPaper: boolean,
    picAlt: string;
    keyword: string;
    title: string;
    adLocation: number;
    englishTitr: string;
    showLocation: number;
    showAuthor: boolean;
}