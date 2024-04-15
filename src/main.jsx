import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Products from "./components/Products.jsx";
import { ContextProvider } from "./context/ContextProvider.jsx";
import Customers from "./components/Customers.jsx";
import Calendar from "./components/Calendar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: 'customers',
        element: <Customers/>,
      },
      {
        path: 'calendar',
        element: <Calendar/>,
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
