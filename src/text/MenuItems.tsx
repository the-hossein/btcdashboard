import { Book, Category, InfoCircle } from "iconsax-react";
import { IContentTypes, IMenuText } from "../viewModel/types/IMenuText";
import { useCallback, useEffect, useState } from "react";
import { ResultModel } from "../viewModel/types/IApi";
import { CallApi } from "../services/api/CallApi";
import { GetContentItems } from "../services/api/ApiRoutes";
import { StatusCode } from "../viewModel/enums/StatusCode";
const Menu: IMenuText[] = [
  {
    id: 1,
    name: "داشبورد",
    path: "/",
    icon: (
      <>
        <Category size="22" />
      </>
    ),
  },
  {
    id: 2,
    name: "مدیریت محتوا",
    path: "",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
    children: [
      {
        id: 10,
        name: "اخبار",
        path: "/news-list",
        icon: <Book size={22} />,
      },
      {
        id: 11,
        name: "مقالات",
        path: "/blogs",
        icon: <Book size={22} />,
      },
      {
        id: 12,
        name: "مصاحبه",
        path: "/interviews",
        icon: <Book size={22} />,
      },
    ],
  },
  {
    id: 3,
    name: "مدیریت ارزها",
    path: "/crypto",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
  {
    id: 4,
    name: "مدیریت صرافی ها",
    path: "/test",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
  {
    id: 5,
    name: "مدیریت نطرها",
    path: "",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
    children: [
      {
        id: 51,
        name: "لیست صبح",
        path: "/comments/list",
        icon: (
          <>
            <InfoCircle size="22" />
          </>
        ),
      },
    ],
  },
  {
    id: 6,
    name: "مدیریت کاربران",
    path: "/users",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
];

const MenuItems = (): [IMenuText[]] => {
  const [menuState, setMenuState] = useState<IMenuText[]>(Menu);

  const getContentItemsBack = async () => {
    const contentItemsTypes: ResultModel<IContentTypes[]> = await CallApi(
      GetContentItems,
      null,
      false,
      "GET",
      false
    );
    if (contentItemsTypes.statusCode === StatusCode.Success) {
      const children = contentItemsTypes.data?.data;
      const newChildren = children?.map((child, index) => {
        const newItem = {
          id: Number(`${child.intId + index}${index}`),
          name: child.title,
          path: `/content/${child.intId}`,
          icon: <Book size={22} />,
        };
        return newItem;
      });
      Menu[1].children = newChildren;
      setMenuState(Menu);
    }
  };

  const cachedContent = useCallback(
    async () => await getContentItemsBack(),
    []
  );

  useEffect(() => {
    cachedContent();
  }, []);

  return [menuState];
};

export default MenuItems;
