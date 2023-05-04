import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceCardWrapper from "./InvoiceCardWrapper";

const InvoiceContainer = () => {
  return (
    <div className="w-container mx-auto pt-20">
      <InvoiceHeader />
      <InvoiceCardWrapper />
    </div>
  );
};

export default InvoiceContainer;
