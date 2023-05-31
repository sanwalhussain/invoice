import React from "react";
import InvoiceCard from "./InvoiceCard";

const InvoiceCardWrapper = () => {
  return (
    <div className="mt-14">
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </div>
  );
};

export default InvoiceCardWrapper;
