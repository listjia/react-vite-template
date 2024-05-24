import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import lazyLoad from "./lazyLoad";
import manageRoutes from "./manage";
import BasicLayout from "@/components/Layout";
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));

const routes = [
  {
    path: "/",
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/home" replace />,
      // },
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: "login",
        element: lazyLoad(<Login />),
      },
      {
        path: "about",
        element: lazyLoad(<About />),
      },
      {
        path: "manage",
        children: manageRoutes,
      },
    ],
  },
];

export default createBrowserRouter(routes, {
  basename: "/",
});
