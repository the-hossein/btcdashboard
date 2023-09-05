import React, {
  FC,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IMenuText } from "../../viewModel/types/IMenuText";
import Style from "./Menu.module.scss";
import { ArrowDown2 } from "iconsax-react";
import { DynamicMenuItems } from "./DynamicMenu";
import ItemMenu from "./ItemMenu";
import { AnimateMenu } from "../animations/AnimationMenu";

interface IProps {
  name: string;
  icon?: ReactNode;
  path?: string;
  childItem?: IMenuText[];
  isOpen?: boolean;
  clickOpen?: () => void;
}

const DynamicItemMenu: FC<IProps> = ({
  name,
  icon,
  path,
  childItem,
  isOpen,
  clickOpen,
}) => {
  const [height, setHeight] = useState<number>(0);
  const dynamicMenuRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (dynamicMenuRef?.current != null) {
      setHeight(dynamicMenuRef?.current?.clientHeight);
    }

    window.addEventListener("resize", () => {
      if (dynamicMenuRef?.current != null) {
        setHeight(dynamicMenuRef?.current?.clientHeight);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (dynamicMenuRef?.current != null) {
          setHeight(dynamicMenuRef?.current?.clientHeight);
        }
      });
    };
  }, [dynamicMenuRef]);

  return (
    <li className={Style.dyn_item}>
      <div className={Style.item_menu} onClick={clickOpen}>
        {icon}
        <span>{name}</span>
        <span className={`${Style.arrow_child} ${isOpen ? Style.rotate : ""}`}>
          <ArrowDown2
            size={15}
            style={{ flex: "1", textAlign: "right" }}
          />
        </span>
      </div>
      <AnimateMenu open={isOpen ?? false} height={height}>
        <DynamicMenuItems ref={dynamicMenuRef}>
          {childItem?.map((child) => (
            <ItemMenu
              key={child.id}
              name={child.name}
              icon={child.icon}
              path={child.path}
            />
          ))}
        </DynamicMenuItems>
      </AnimateMenu>
    </li>
  );
};

export default DynamicItemMenu;
