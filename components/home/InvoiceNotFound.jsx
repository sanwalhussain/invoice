import Image from "next/image";
import React from "react";
import NotFound from "../assets/illustration-empty.svg";

const InvoiceNotFound = () => {
  return (
    <div className="pt-16 flex flex-col items-center justify-center text-center">
      <Image src={NotFound} alt="illustration-not-found-img" />
      <h1 className="text-white text-xl font-bold mt-16">
        There is nothing here
      </h1>
      <p className="text-light text-sm mt-4">
        Create an invoice by clicking the <span className="block"></span>
        <strong>New Invoice</strong> button and get started
      </p>
    </div>
  );
};

export default InvoiceNotFound;
