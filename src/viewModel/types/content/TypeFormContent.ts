import { ITableDropDown } from "../TableTypes/IIsActiveDropDown";
import { ICreateContentRequest } from "./ICreateContent";

export type ContentFormType = Omit<ICreateContentRequest, "contentTypeId" | "label"> & { label: ITableDropDown[] | []; }