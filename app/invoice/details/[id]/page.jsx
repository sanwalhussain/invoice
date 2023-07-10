import Overlay from "@/components/details/InvoiceOverlay";
import InvoiceDetailsContainer from "@/components/details/InvoiceDetailsContainer";
import React from "react";
import InvoiceDeletion from "@/components/details/InvoiceDeletion";

const page = () => {
  return (
    <div className="bg-background h-full">
      <InvoiceDetailsContainer />
      <InvoiceDeletion />
    </div>
  );
};

export default page;
