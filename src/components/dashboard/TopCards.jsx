import React from "react";
import { BsCurrencyDollar, BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";

import { earningData } from "../../data/dummyData";
import { MdOutlineSupervisorAccount } from "react-icons/md";
const TopCards = () => {
  

  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly ">
        <div className="bg-white h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 ">
          <div className="flex justify-between items-center" >
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl ">$ 6,344</p>
            </div>
            <button
              type="button"
              // style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-green-600 hover:drop-shadow-xl rounded-full bg-green-200 p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
           <button className=" bg-orange-400 p-2 rounded-xl hover:shadow-xl my-2 text-white"> Download</button>
        </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44  md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
               {item.title === 'Customers' && <MdOutlineSupervisorAccount />}
               {item.title === 'Products' && <BsBoxSeam />}
               {item.title === 'Sales' && <FiBarChart/>}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCards;
