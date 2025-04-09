import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="flex">
          <div className="w-60">
            <Sidebar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
