import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";


function App() {
  return (
    <Routes>
      {/* <Route  path="/" element={<Login />}></Route> */}
      <Route  path="/log-in" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
