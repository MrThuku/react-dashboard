import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { IoMenu } from "react-icons/io5";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../assets/alison-wang-mou0S7ViElQ-unsplash.jpg";
import Message from "./Message";
import Profile from "./Profile";
import Notification from "./Notification";
import { MdArrowDropDown } from "react-icons/md";
import { Tooltip } from "@mui/material";

const Navbutton = ({ icon, func, title }) => {
  return (
    <button
      title={title}
      onClick={func}
      type="button"
      className=" relative text-xl rounded-full p-3 hover:bg-sky-300 "
      style={{ color: " #8b5cf6" }}
    >
      {icon}
    </button>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();
  // console.log(activeMenu);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);
    };

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 700) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <>
      <nav className=" bg-sky-100 h-16 px-4 flex items-center  justify-between">
        <div className="">
          <Navbutton
            icon={<IoMenu size={30} />}
            func={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            title="Menu"
          />
        </div>
        <div className="flex justify-between items-center ">
          <Navbutton
            icon={<BsChatLeftQuoteFill size={20} />}
            func={() => handleClick("message")}
            title="Message"
          />

          <Navbutton
            icon={<IoMdNotificationsOutline size={23} />}
            func={() => handleClick(" notification ")}
            title="Notification"
          />

          <div
            className=" flex items-center gap-2 p-1 rounded-lg hover:cursor-pointer"
            onClick={() => handleClick("profile")}
          >
            <img
              className=" rounded-full w-10 "
              src={avatar}
              alt="profile picture"
            />
            <p>
              <span className=" text-gray-600">Hello,</span>{" "}
              <span className=" font-bold ml-1">Alex</span>
            </p>
            <MdArrowDropDown size={20} className=" text-cyan-700" />
          </div>
        </div>
      </nav>
      {isClicked.message && console.log("yeeeeeeee") && <Message />}
      {isClicked.profile && <Profile />}
      {isClicked.notification && <Notification />}
    </>
  );
};

export default Navbar;
