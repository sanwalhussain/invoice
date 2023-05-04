import React from "react";
import Image from "next/image";
import iconPlus from "../assets/icon-plus.svg";
const InvoiceHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-white text-3xl font-bold tracking-normal">
          Invoices
        </h3>
        <p className="text-light text-xs mt-1">There are 7 total invoices</p>
      </div>
      <div className="flex items-center">
        <div className="text-sm text-white">
          <p>Filter by status</p>
        </div>
        <button className="btn bg-primary text-white py-2 px-3 rounded-3xl text-sm flex items-center">
          <div className="bg-white rounded-full flex items-center justify-center p-2 mr-2">
            <Image alt="icon-plus" src={iconPlus} />
          </div>
          New Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
