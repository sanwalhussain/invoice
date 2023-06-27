import React from "react";
import ReturnToHome from "./ReturnToHome";
import InvoiceDetailsHeader from "./InvoiceDetailsHeader";
import InvoiceDetailsBody from "./InvoiceDetailsBody";

const InvoiceDetailsContainer = () => {
  return (
    <div className="w-container mx-auto pt-20">
      <ReturnToHome />
      <InvoiceDetailsHeader />
      <InvoiceDetailsBody />
    </div>
  );
};

export default InvoiceDetailsContainer;
