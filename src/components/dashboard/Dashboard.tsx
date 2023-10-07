import { FC } from "react";
import { MainLayoutDashboard } from "../../tools/dashboardLayout/DashboardLayout";
import { DashboardContainer } from "../../tools/dashboardLayout/DashboardContainer";
import { Item } from "../../tools/dashboardLayout/ItemDashboard";
import Menu from "../../tools/menu/Menu";
import DashboardBody from "../../tools/dashboardBody/DashboardBody";
import NavBar from "../../tools/navigationBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { DashboardScroll } from "../../tools/dashboardLayout/DashboardScrollBody";
import Style from "../../tools/dashboardBody/DashboardBody.module.scss";

interface IProps {}

const Dashboard: FC<IProps> = () => {
  const { pathname } = useLocation();

  return (
    <MainLayoutDashboard>
      <DashboardContainer>
        <Item width="22.5%">
          <Menu />
        </Item>
        <Item width="100%">
          <DashboardBody>
            <NavBar />
            <DashboardScroll
              bg_none={pathname !== "/" ? false : true}
              mt="2rem"
              className={Style.scrollbar_theme}
            >
              <Outlet />
            </DashboardScroll>
          </DashboardBody>
        </Item>
      </DashboardContainer>
    </MainLayoutDashboard>
  );
};

export default Dashboard;
