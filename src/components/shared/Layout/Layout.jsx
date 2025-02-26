import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex">
        <div className="w-60">
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
