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
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
// 	{
// 		key: 'settings',
// 		label: 'Settings',
// 		path: '/settings',
// 		icon: <HiOutlineCog />
// 	},
// 	{
// 		key: 'support',
// 		label: 'Help & Support',
// 		path: '/support',
// 		icon: <HiOutlineQuestionMarkCircle />
// 	}
// ]