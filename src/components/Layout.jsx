import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useStateContext } from "../context/ContextProvider";

const Layout = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className=" flex flex-row bg-zinc-200 h-screen w-screen overflow-hidden  ">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Navbar />
        <div className=" p-5 mt-8 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
