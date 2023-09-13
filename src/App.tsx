import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardSection from "./tools/dashboardSection/DashboardSection";
import { MenuItems } from "./text/MenuItems";
import NewsList from "./components/newsList/NewsList";

function App() {
  return (
    <Routes>
      {/* <Route  path="/" element={<Login />}></Route> */}
      <Route path="/log-in" element={<Login />}></Route>
      {/* main layout for spa and better performance */}
      <Route path="/" element={<Dashboard />}>
        {/* the index path for show dashboard */}
        <Route
          path="/"
          element={<DashboardSection title={MenuItems[0].name} />}
        />
        {/* the news-list path for show news list  */}
        <Route path="/news-list" element={<NewsList />} />
      </Route>
    </Routes>
  );
}

export default App;
