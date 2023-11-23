import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import type { Value } from "react-multi-date-picker";


export const convertDateToPersian = (date: Date, notFormatted: boolean = false): string | Value => {
    const persianDate = new DateObject({ date: date, calendar: persian, locale: persian_en });
    if (notFormatted) {
        return persianDate
    } else {
        return persianDate.format()
    }
}

export const convertPersianDateToMilady = (timestamp: number | Date) => {
    const miladyDate = new DateObject({ date: timestamp });
    return miladyDate.format("YYYY-MM-DDTHH:MM:SS.sssZ");
}

export const getTimeStamp = (date: Date): number => {
    date?.setHours(0, 0, 0, 0);
    // تبدیل به تایم‌استمپ
    const timestamp: number = date.getTime();
    return timestamp;
}