import React from "react";
import ReturnToHome from "./ReturnToHome";
import InvoiceDetailsHeader from "./InvoiceDetailsHeader";

const InvoiceDetailsContainer = () => {
  return (
    <div className="w-container mx-auto pt-20">
      <ReturnToHome />
      <InvoiceDetailsHeader />
    </div>
  );
};

export default InvoiceDetailsContainer;
