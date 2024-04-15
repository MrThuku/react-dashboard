import React from "react";
// import  logoImage  from '/assets/dashboard_1991103.png'
import { GoGraph } from "react-icons/go";
import { DashboardLinks } from "../navigation";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  return (
    <>
      {activeMenu && (
        <>
          <div className=" flex flex-col bg-sky-200  w-80 p-7 sm:  md:overflow-hidden    ">
            <div className="">
              <div className="flex flex-row justify-between">
                <div className="flex">
                  <GoGraph size={27} />
                  <span className=" px-1 text-2xl font-bold">PiStore</span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                  className=" "
                >
                  <MdOutlineCancel size={20} />
                </button>
              </div>
              <div className=" flex flex-col py-6 text-cyan-500">
              <span className=" border border-black " />
                {DashboardLinks.map((item) => (
                  <SidebarLink key={item.key} item={item}/>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

function SidebarLink({ item }) {
  const handleCloseBar = () => {
    if (activeMenu && screenSize <= 700) {
      setActiveMenu(false);
    }
  };
  return (
    <NavLink
      to={item.path}
      onClick={handleCloseBar}
      style={{ marginTop : '10px'}}
      className={({ isActive }) =>
        isActive
          ? " font-bold px-4 py-2 rounded-lg bg-cyan-200"
          : " hover:text-sky-700 px-4 py-2 rounded" 
          
      }
    >
      <div className=" flex gap-3 py-3 ">
        <span className=" text-2xl"> {item.icon}</span>
        {item.label}
      </div>
    </NavLink>
  );
}

export default Sidebar;
