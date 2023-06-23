import React from "react";
import "../globalStyles.css";
const InvoiceDropdown = () => {
  return (
    <div className="text-white absolute right-36 top-16 w-52 bg-dropdownBg rounded-lg p-5 text-sm">
      <label class="container mb-3">
        Draft
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <label class="container mb-3">
        Pending
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Paid
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default InvoiceDropdown;
