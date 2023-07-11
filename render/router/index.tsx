import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Main from "@/views/Main";
import LandingPage from "@/views/LandingPage";

type IAddiRouteParam = {
  hidden?: boolean;
  name?: string;
};
type ICdExtends<T, F> = Omit<T, "children"> & {
  children?: ICdExtends<T, F>[];
} & F;
export type IRoute = ICdExtends<RouteObject, IAddiRouteParam>;

const routes: IRoute[] = [];

const wrapRoutes: IRoute[] = [
  {
    name: "首页",
    path: "/LandingPage",
    element: <LandingPage></LandingPage>,
  },
  {
    name: "主页",
    path: "/",
    element: <Main />,
    children: routes,
  },
];

export const MainRoutes = () => useRoutes(wrapRoutes as RouteObject[])!;
