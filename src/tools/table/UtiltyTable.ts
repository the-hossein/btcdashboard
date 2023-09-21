import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";


export const convertDateToPersian = (date: Date): string => {
    const persianDate = new DateObject({ date: date, calendar: persian, locale: persian_en });
    return persianDate.format()
}