import { IAuthors } from "../../viewModel/types/IAuthors";
import { ITableDropDown } from "../../viewModel/types/TableTypes/IIsActiveDropDown";

export const convertToDropDown = <T extends IAuthors>(arr: T[]): ITableDropDown[] => {
    const result: ITableDropDown[] = arr?.map(item => {
        let res: ITableDropDown = { label: "1", value: 1 };
        res.value = item?.id;
        res.label = item?.fname === null ? item?.userName : `${item?.fname} ${item?.lname}`;
        return res
    })

    return result;
}