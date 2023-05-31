"use client";
import InvoiceContainer from "@/components/home/InvoiceContainer";
import SideNav from "@/components/home/SideNav";
const page = () => {
  return (
    <div className="bg-background h-screen">
      <SideNav />
      <InvoiceContainer />
    </div>
  );
};

export default page;
