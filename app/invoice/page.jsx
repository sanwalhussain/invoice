"use client";
import InvoiceContainer from "@/components/Invoices/InvoiceContainer";
import SideNav from "@/components/Invoices/SideNav";
import React from "react";
const page = () => {
  return (
    <div className="bg-background h-screen">
      <SideNav />
      <InvoiceContainer />
    </div>
  );
};

export default page;
