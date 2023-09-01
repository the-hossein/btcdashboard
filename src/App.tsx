import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      {/* <Route  path="/" element={<Login />}></Route> */}
      <Route path="/log-in" element={<Login />}></Route>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
