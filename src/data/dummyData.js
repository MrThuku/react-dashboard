// import { BsCurrencyDollar, BsShield, FiCreditCard } from "react-icons/bs";

import { HiOutlineRefresh } from "react-icons/hi";
import { MdOutlineSupervisorAccount } from "react-icons/md";

// import React from "react";
export const messageData = [
  {
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const profileData = [
  {
    //   icon: ()=> {<BsCurrencyDollar />},
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    //  icon: () => {<BsShield />},
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    //  icon: () => {<FiCreditCard />},
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
  
// export  const  getProducts = async () => {
//   try{
//  const res = await fetch('https://dummyjson.com/products')
//  const data = await res.json();
//   setRows(data)
//   }catch(error) {
//   console.error('Error fetching data:', error);
//   }
//  }
 

export const earningData = [
  {
   
    amount: '19',
    percentage: '-5%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: '#ea580c',
  },
  {
    amount: '396',
    percentage: '+12%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    amount: '4,239',
    percentage: '+24%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  // {

  //   amount: '39,354',
  //   percentage: '-12%',
  //   title: 'Refunds',
  //   iconColor: 'rgb(0, 194, 146)',
  //   iconBg: 'rgb(235, 250, 242)',
  //   pcColor: 'red-600',
  // },
];
