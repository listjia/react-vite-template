import { lazy } from "react";
import lazyLoad from "./lazyLoad";
import BasicLayout from "@/components/Layout";

const AntdComponents = lazy(() => import("@/pages/manage/AntdComponents"));
const CustomComponents = lazy(() => import("@/pages/manage/CustomComponents"));

const manageRoutes = [
  {
    path: "/manage",
    element: <BasicLayout />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/home" replace />,
      // },
      {
        path: "antdComponents",
        element: lazyLoad(<AntdComponents />),
      },
      {
        path: "customComponents",
        element: lazyLoad(<CustomComponents />),
      },
    ],
  },
];

export default manageRoutes;
