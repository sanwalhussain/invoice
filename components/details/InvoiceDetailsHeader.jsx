import React from "react";

const InvoiceDetailsHeader = () => {
  return (
    <div className="bg-secondary flex items-center justify-between py-6 px-8 rounded-lg">
      <div className="flex items-center">
        <p className="text-sm text-light">Status</p>
        <div className="flex items-center bg-status_green bg-status_green_light py-3 px-7 rounded-lg ml-4">
          <div className="rounded-full w-2 h-2 bg-status_green mr-3"></div>
          <p className="text-sm text-status_green">Paid</p>
        </div>
      </div>
      <div>
        <button className="text-sm bg-dropdownBg text-light py-3 px-5 rounded-3xl">
          Edit
        </button>
        <button className="text-sm bg-brightRed py-3 px-5 rounded-3xl text-white ml-2">
          Delete
        </button>
        <button className="text-sm bg-primary py-3 px-5 rounded-3xl text-white ml-2">
          Mark as paid
        </button>
      </div>
    </div>
  );
};

export default InvoiceDetailsHeader;
