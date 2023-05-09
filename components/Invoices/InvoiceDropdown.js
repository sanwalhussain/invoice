import React from "react";

const InvoiceDropdown = () => {
  return (
    <div className="text-white absolute right-36 top-12 w-52 bg-secondary rounded-lg p-4 text-sm">
      <div className="flex items-center">
        <input type="checkbox" className="mr-3" />
        Draft
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="mr-3" />
        Pending
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="mr-3" />
        Paid
      </div>
    </div>
  );
};

export default InvoiceDropdown;
