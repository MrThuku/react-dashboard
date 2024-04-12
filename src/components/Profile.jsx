import React from "react";
import { profileData } from "../data/dummyData";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../assets/alison-wang-mou0S7ViElQ-unsplash.jpg";

const Profile = () => {
  const { setIsClicked } = useStateContext();
  return (
    //<h1>fyeyr</h1>
    <div className="nav-item  absolute right-1 top-16 bg-cyan-100  p-8 rounded-lg w-96 z-50">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg ">User Profile</p>
        <button type="button" onClick={() => setIsClicked(false)} className="">
          <MdOutlineCancel size={20} />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className=" rounded-full w-20 "
          src={avatar}
          alt="profile picture"
        />
        <div>
          <p className="font-semibold text-xl "> Alex Alex </p>
          <p className="text-gray-500 text-sm "> Administrator </p>
          <p className="text-gray-500 text-sm font-semibold ">
            pistore@shop.com{" "}
          </p>
        </div>
      </div>
      <div>
        {profileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4  hover:bg-blue-300 cursor-pointer "
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold  ">{item.title}</p>
              <p className="text-gray-500 text-sm "> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
