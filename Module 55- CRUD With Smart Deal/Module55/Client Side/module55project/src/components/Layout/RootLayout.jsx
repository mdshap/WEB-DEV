import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

const RootLayout = () => {
    const {loading} = use(AuthContext)
  return (
    <>
    { loading ||
    <div>
      <Navbar />
      <div className="w-[1440px] mx-auto flex justify-center">
        <Outlet></Outlet>
      </div>
    </div>
}
    </>
  );
};

export default RootLayout;
