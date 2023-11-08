import { ReactNode } from "react";
import ResponsiveHeader from "../components/layout/Header/Header";

import { Outlet } from "react-router-dom";
import Toolbar from "../components/layout/Toolbar/Toolbar";
const Layout = ({
  children,
  setShouldShowLatest,
  shouldShowLatest,
  range,
  setRange,
}: {
  children?: ReactNode;
  setShouldShowLatest: React.Dispatch<React.SetStateAction<boolean>>;
  shouldShowLatest: boolean;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <ResponsiveHeader />
      <Toolbar
        range={range}
        shouldShowLatest={shouldShowLatest}
        onSliderChange={(e) => {
          const value = parseInt(e.target.value);
          setRange(value);
        }}
        onCheckboxChange={() => setShouldShowLatest(!shouldShowLatest)}
      />
      <Outlet />
    </>
  );
};

export default Layout;
