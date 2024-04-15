// import { BsCurrencyDollar, BsShield, FiCreditCard } from "react-icons/bs";

import moment from "moment/moment";
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

export const ProfileData = [
  {
    //  icon:  ,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    //  icon:   ,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    //  icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
  


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
];

  

  let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD") 
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T10:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}
  
  // {

  //   amount: '39,354',
  //   percentage: '-12%',
  //   title: 'Refunds',
  //   iconColor: 'rgb(0, 194, 146)',
  //   iconBg: 'rgb(235, 250, 242)',
  //   pcColor: 'red-600',
  // },

export const TopSellingData = [
  {
    id:1,
    image: 'https://cdn.dummyjson.com/product-images/1/1.jpg',
    product:'iphone 9',
    price: 345,
    sold:103
  },
  {
    id:2,
    image:'https://cdn.dummyjson.com/product-images/2/1.jpg',
    product:'iphone X',  
    price:409,
    sold:93
  },
  {
    id:3,
    image:'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
    product: 'Samsung Galaxy',
    price:409,
    sold:87
  },
  {
    id:4,
    image:'https://cdn.dummyjson.com/product-images/6/thumbnail.png',
    product:'Macbook ',
    price:7800,
    sold:62
  }
]