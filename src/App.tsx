import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardSection from "./tools/dashboardSection/DashboardSection";
import MenuItems from "./text/MenuItems";
import NewsList from "./components/newsList/NewsList";
import CreateContent from "./tools/contentManages/createContent/CreateContent";

function App() {
  const [menuItems] = MenuItems();

  return (
    <Routes>
      {/* <Route  path="/" element={<Login />}></Route> */}
      <Route path="/log-in" element={<Login />}></Route>
      {/* main layout for spa and better performance */}
      <Route path="/" element={<Dashboard />}>
        {/* the index path for show dashboard */}
        <Route
          path="/"
          element={<DashboardSection title={menuItems[0].name} />}
        />
        {/* the news-list path for show news list  */}
        <Route path="/content/:id" element={<NewsList />} />
        <Route path="/content/:id/create" element={<CreateContent />} />
      </Route>
    </Routes>
  );
}

export default App;
