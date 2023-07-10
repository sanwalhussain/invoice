import InvoiceCreateForm from "@/components/details/InvoiceCreateForm";
import SideNav from "@/components/home/SideNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <SideNav />
      <InvoiceCreateForm />
      <div>{children}</div>
    </>
  );
};

export default layout;
