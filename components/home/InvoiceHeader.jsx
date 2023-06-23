import React from "react";
import Image from "next/image";
import iconPlus from "../assets/icon-plus.svg";
import Chevron from "../assets/icon-arrow-down.svg";
import InvoiceDropdown from "./InvoiceDropdown";
const InvoiceHeader = () => {
  return (
    <div className="flex justify-between items-center relative">
      <div>
        <h3 className="text-white text-3xl font-bold tracking-normal">
          Invoices
        </h3>
        <p className="text-light text-xs mt-1">There are 7 total invoices</p>
      </div>

      <div className="flex items-center">
        <div className="text-sm text-white flex items-center mr-12 cursor-pointer">
          <p>Filter by status</p>
          <Image src={Chevron} alt="filter-dropdown" className="ml-4" />
        </div>
        {/* <InvoiceDropdown /> */}
        <button className="btn bg-primary text-white py-2 px-3 rounded-3xl text-sm flex items-center transition hover:bg-logoLight">
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
