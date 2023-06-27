import React from "react";

const InvoiceDetailsBody = () => {
  return (
    <div className="bg-secondary mt-6 rounded-lg px-12 py-12 drop-shadow-new">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-semibold mb-1">
            <span className="text-hashtagColor">#</span>XM9141
          </h3>
          <p className="text-xs text-light font-light">Graphic Design</p>
        </div>
        <div className="text-xs text-light text-end font-light leading-5">
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="mr-24 flex flex-col justify-between">
          <div>
            <p className="text-light text-xs mb-2 font-light">Invoice Date</p>
            <p className="text-white text-sm font-semibold">21 Aug 2021</p>
          </div>
          <div>
            <p className="text-light text-xs mb-2 font-light">Payment Due</p>
            <p className="text-white text-sm font-semibold">21 Aug 2021</p>
          </div>
        </div>
        <div className="mr-32">
          <p className="text-light text-xs mb-2">Bill To</p>
          <p className="text-white font-semibold mb-2">Alex Grim</p>
          <div className="text-xs text-light leading-5">
            <p className="text-light">84 Church Way</p>
            <p>Bradford</p>
            <p>BD1 9PB</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div>
          <p className="text-light text-xs mb-2">Sent to</p>
          <p className="text-white text-sm font-semibold">alexgrim@gmail.com</p>
        </div>
      </div>
      <div className="px-7 py-8 bg-dropdownBg text-xs rounded-t-lg mt-10">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start text-light font-light pb-6">
                Item Name
              </th>
              <th className="text-start text-light font-light pb-6">QTY.</th>
              <th className="text-end text-light font-light pb-6">Price</th>
              <th className="text-end text-light font-light pb-6">Total</th>
            </tr>
          </thead>
          <tbody className="text-white font-semibold">
            <tr>
              <td className="pb-6">Banner Design</td>
              <td className="pb-6 text-light">1</td>
              <td className="text-end pb-6 text-light">£ 156.00</td>
              <td className="text-end pb-6">£ 156.00</td>
            </tr>
            <tr>
              <td>Email Design</td>
              <td className="text-light">2</td>
              <td className="text-end text-light">£ 200.00</td>
              <td className="text-end">£ 200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-vBlack rounded-b-lg px-7 py-6 flex items-center justify-between text-white">
        <p className="text-xs font-light">Amount Due</p>
        <h3 className="text-2xl font-semibold">£ 556.00</h3>
      </div>
    </div>
  );
};

export default InvoiceDetailsBody;
