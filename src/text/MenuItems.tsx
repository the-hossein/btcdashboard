import { Book, Category, InfoCircle } from "iconsax-react";
import { IMenuText } from "../viewModel/types/IMenuText";

export const MenuItems: Array<IMenuText> = [
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
    path: "/",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
    children: [
      {
        id: 10,
        name: "بلاگ ها",
        path: "/blog",
        icon: <Book size={22} />,
      },
      {
        id: 11,
        name: "پست ها",
        path: "/blog",
        icon: <Book size={22} />,
      },
      {
        id: 12,
        name: "پست ها",
        path: "/blog",
        icon: <Book size={22} />,
      },
      {
        id: 13,
        name: "پست ها",
        path: "/blog",
        icon: <Book size={22} />,
      },
    ],
  },
  {
    id: 3,
    name: "مدیریت ارزها",
    path: "/",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
  {
    id: 4,
    name: "مدیریت صرافی ها",
    path: "/",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
  {
    id: 5,
    name: "مدیریت نطرها",
    path: "/",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
  {
    id: 6,
    name: "مدیریت کاربران",
    path: "/",
    icon: (
      <>
        <InfoCircle size="22" />
      </>
    ),
  },
];
