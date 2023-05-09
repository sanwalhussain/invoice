"use client";
import InvoiceContainer from "@/components/invoices/InvoiceContainer";
import SideNav from "@/components/invoices/SideNav";
const page = () => {
  return (
    <div className="bg-background h-screen">
      <SideNav />
      <InvoiceContainer />
    </div>
  );
};

export default page;
