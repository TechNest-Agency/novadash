import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
