import React from "react";
import InvoiceOverlay from "./InvoiceOverlay";
const InvoiceDeletion = () => {
  return (
    <>
      <InvoiceOverlay />
      <div className="flex justify-center h-full">
        <div className="fixed top-1/3 z-50 bg-inputBg p-9 rounded-lg">
          <h2 className="text-white text-2xl font-semibold mb-3">
            Confirm Deletion
          </h2>
          <p className="text-light text-xs leading-5 mb-4">
            Are you sure you want to delete invoice #XM9141? This action
            <span className="block"></span> cannot be undone.
          </p>
          <div className="flex justify-end">
            <button className="text-xs bg-dropdownBg py-3 px-5 rounded-3xl text-white">
              Cancel
            </button>
            <button className="text-xs bg-brightRed py-3 px-5 rounded-3xl text-white ml-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDeletion;
