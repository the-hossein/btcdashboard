export interface ITableRow {
    [key: string]: any;
    uuid: number;
    title: string;
    date: Date;
    location: number;
    isActive: boolean;
}

export const TableData: ITableRow[] = [
    {
        uuid: 12,
        title: "بلومبرگ: ETF اسپات بیت کوین تهدیدی برای صرافی‌ها است",
        date: new Date(),
        location: 6,
        isActive: false,
    },
    {
        uuid: 43,
        title: "بانک مرکزی آمریکا افزایش نرخ بهره را متوقف کرد",
        date: new Date("Wed Sep 5 2022"),
        location: 7,
        isActive: true,
    },
]