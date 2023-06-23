import SideNav from "@/components/home/SideNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <SideNav />
      <div>{children}</div>
    </>
  );
};

export default layout;
