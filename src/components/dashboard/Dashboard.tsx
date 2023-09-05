import { FC } from "react";
import { Container } from "../../tools/container/customeContainer/Container";
import { MainLayoutDashboard } from "../../tools/dashboardLayout/DashboardLayout";
import { DashboardContainer } from "../../tools/dashboardLayout/DashboardContainer";
import { Item } from "../../tools/dashboardLayout/ItemDashboard";
import Menu from "../../tools/menu/Menu";
import DashboardBody from "../../tools/dashboardBody/DashboardBody";
import NavBar from "../../tools/navigationBar/NavBar";
import DashboardSection from "../../tools/dashboardSection/DashboardSection";
import { MenuItems } from "../../text/MenuItems";

interface IProps {}

const Dashboard: FC<IProps> = () => {
  return (
    <MainLayoutDashboard>
      <DashboardContainer>
        <Item width="22.5%">
          <Menu />
        </Item>
        <Item width="100%">
          <DashboardBody>
            <NavBar />
            <DashboardSection title={MenuItems[0].name} />
          </DashboardBody>
        </Item>
      </DashboardContainer>
    </MainLayoutDashboard>
  );
};

export default Dashboard;
