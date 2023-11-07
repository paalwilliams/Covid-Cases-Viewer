import { ReactNode } from "react";
import ResponsiveHeader from "../components/Header/Header";

import { Outlet } from "react-router-dom";
const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <ResponsiveHeader />
      <Outlet />
    </>
  );
};

export default Layout;
