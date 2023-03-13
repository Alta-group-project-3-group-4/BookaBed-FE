import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container flex flex-col bg-white overflow-auto">
      <div className="h-full overflow-auto p-3">{children}</div>
    </div>
  );
};

export default Layout;