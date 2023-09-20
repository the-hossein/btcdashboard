import { Book, Category, InfoCircle } from "iconsax-react";
import { IMenuText } from "../viewModel/types/IMenuText";

export const MenuItems: IMenuText[] = [
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
