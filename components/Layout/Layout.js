import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="h-screen bg-gray-200 overflow-auto">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
