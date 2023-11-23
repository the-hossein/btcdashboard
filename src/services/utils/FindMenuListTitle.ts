import { IMenuText } from "../../viewModel/types/IMenuText";

export const fundedMenu = (menus: IMenuText[], id: number): string => {
    const findIndex = menus.findIndex(menu => menu.unid === id);
    if (findIndex >= 0) {
        return `لیست ${menus[findIndex].name} ها`
    } else {
        return ""
    }
}