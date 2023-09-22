import React, { useState } from "react";
import Style from "./Menu.module.scss";
import Logo from "../../assets/images/Asset94.png";
import MenuItems from "../../text/MenuItems";
import ItemMenu from "./ItemMenu";
import DynamicItemMenu from "./DynamicItemMenu";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [menuItems] = MenuItems();
  
  const openMenuHandler = (id: number): void => {
    if (openMenu === id) {
      setOpenMenu(null);
    } else {
      setOpenMenu(id);
    }
  };

  return (
    <nav className={`${Style.nav_menu}`}>
      <div className={`${Style.logo_holder}`}>
        <img src={Logo} alt="logo" />
      </div>
      <ul className={`${Style.menu_list}`}>
        {menuItems.map((item) => (
          <>
            {item?.children ? (
              <>
                <DynamicItemMenu
                  key={item.id}
                  name={item.name}
                  icon={item.icon}
                  childItem={item.children}
                  isOpen={openMenu === item.id ? true : false}
                  clickOpen={() => openMenuHandler(item.id)}
                />
              </>
            ) : (
              <ItemMenu
                key={item.id}
                name={item.name}
                icon={item.icon}
                path={item.path}
              />
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
