import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Footer from "./pages/Shared/Footer";

const App = () => {
  return (
    <div className="font-lexend">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
