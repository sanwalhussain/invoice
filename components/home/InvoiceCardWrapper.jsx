import React from "react";
import InvoiceCard from "./InvoiceCard";
import InvoiceNotFound from "./InvoiceNotFound";

const InvoiceCardWrapper = () => {
  return (
    <div className="mt-14">
      {/* <InvoiceCard />
     */}
      <InvoiceNotFound />
    </div>
  );
};

export default InvoiceCardWrapper;
