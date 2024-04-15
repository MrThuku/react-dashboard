import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";


export const DashboardLinks = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },

  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },

  {
    key: "calendar",
    label: "Calendar",
    path: "/calendar",
    icon: <CiCalendarDate />
    
  },
];


