"use client";
import React, { useState } from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  PlusSmallIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import InvoiceOverlay from "./InvoiceOverlay";

const InvoiceCreateForm = (): JSX.Element => {
  const [invoice, setInvoice] = useState<any>({
    description: "",
    invoiceDate: Date.now(),
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postcode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postcode: "",
      country: "",
    },
    dueDate: "",
    items: [],
    total: "",
  });

  const [paymentTerms, setPaymentTerms] = useState("");
  const [items, setItems] = useState("");
  return (
    <>
      <InvoiceOverlay />

      <div className="fixed top left-24 bg-background w-formWidth h-full p-14 rounded-navRadius overflow-y-scroll z-40">
        <h2 className="text-white text-3xl font-bold mb-10">New Invoice</h2>
        <div className="mb-11">
          <p className="text-primary font-bold text-base mb-5">Bill From</p>
          <div>
            <label className="block text-light text-base mb-2 font-light">
              Street Address
            </label>
            <input
              type="text"
              onChange={(e) =>
                setInvoice((prevState) => ({
                  ...prevState,
                  senderAddress: {
                    ...prevState.senderAddress,
                    street: e.target.value,
                  },
                }))
              }
              className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded mb-6 font-semibold border border-customBorderColor"
            />
          </div>
          <div className="flex">
            <div className="w-1/3">
              <label className="block text-light text-base mb-2 font-light">
                City
              </label>
              <input
                onChange={(e) =>
                  setInvoice((prevState) => ({
                    ...prevState,
                    senderAddress: {
                      ...prevState.senderAddress,
                      city: e.target.value,
                    },
                  }))
                }
                type="text"
                className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base font-semibold rounded semiborder border-customBorderColor"
              />
            </div>
            <div className="w-1/3 mx-5">
              <label className="block text-light text-base mb-2 font-light">
                Post Code
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setInvoice((prevState) => ({
                    ...prevState,
                    senderAddress: {
                      ...prevState.senderAddress,
                      postcode: e.target.value,
                    },
                  }))
                }
                className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold semiborder border-customBorderColor"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-light text-base mb-2 font-light">
                Country
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setInvoice((prevState) => ({
                    ...prevState,
                    senderAddress: {
                      ...prevState.senderAddress,
                      country: e.target.value,
                    },
                  }))
                }
                className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold semiborder border-customBorderColor"
              />
            </div>
          </div>
        </div>
        <div className="mb-11">
          <p className="text-primary font-bold text-base mb-5">Bill To</p>
          <div>
            <label className="block text-light text-base mb-2 font-light">
              Client's Name
            </label>
            <input
              type="text"
              className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded mb-6 font-semibold border border-customBorderColor"
            />
          </div>
          <div>
            <label className="block text-light text-base mb-2 font-light">
              Client's Email
            </label>
            <input
              type="text"
              className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded mb-6 font-semibold border border-customBorderColor"
            />
          </div>
          <div>
            <label className="block text-light text-base mb-2 font-light">
              Street Address
            </label>
            <input
              type="text"
              className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded mb-6 font-semibold border border-customBorderColor"
            />
          </div>
          <div className="flex mb-5">
            <div className="w-1/3">
              <label className="block text-light text-base mb-2 font-light">
                City
              </label>
              <input
                type="text"
                className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base font-semibold rounded semiborder border-customBorderColor"
              />
            </div>
            <div className="w-1/3 mx-5">
              <label className="block text-light text-base mb-2 font-light">
                Post Code
              </label>
              <input
                type="text"
                className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold semiborder border-customBorderColor"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-light text-base mb-2 font-light">
                Country
              </label>
              <input
                type="text"
                className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold semiborder border-customBorderColor"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <div className="relative">
            <label className="block text-light text-base mb-2 font-light">
              Invoice Date
            </label>
            <input
              type="text"
              readOnly
              className="w-[17.75rem] outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold border border-customBorderColor cursor-pointer"
              value="26/07/2023"
            />
            <CalendarIcon className="h-5 w-5 absolute right-[0.8rem] top-11 text-[#7E88C3]  " />
          </div>

          <div className="relative">
            <label className="block text-light text-base mb-2 font-light">
              Payment Terms
            </label>
            <input
              type="text"
              readOnly
              className="w-[17.75rem] outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold border border-customBorderColor cursor-pointer"
              value="Net 30 Days"
            />
            <ChevronDownIcon className="text-primary h-4 w-4 absolute right-0 top-12 right-[0.75rem]" />
          </div>
        </div>
        <div>
          <label className="block text-light text-base mb-2 font-light">
            Project Description
          </label>
          <input
            type="text"
            className="w-full outline-0 bg-inputBg py-3 px-4 text-white text-base rounded mb-9 font-semibold border border-customBorderColor"
          />
        </div>
        <div>
          <h1 className="text-2xl text-[#777F98] font-bold mb-4">Item List</h1>
          <div className="flex items-center mb-4">
            <div>
              <p className="text-base mb-2 font-light text-light">Item Name</p>
              <input
                type="text"
                value="Banner Design"
                className="w-60 mr-3 outline-0 bg-inputBg py-3 px-4 text-white text-base rounded font-semibold border border-customBorderColor"
              />
            </div>
            <div>
              <p className="text-light text-base mb-2 font-light">Qty</p>
              <input
                type="text"
                value="2"
                className="w-12 mr-3 overflow-visible outline-0 bg-inputBg py-3 px-4 text-white text-base rounded  font-semibold border border-customBorderColor"
              />
            </div>
            <div>
              <p className="text-light text-base mb-2 font-light">Price</p>
              <input
                type="text"
                value="156.00"
                className="w-24 outline-0 mr-3 bg-inputBg py-3 px-4 text-white text-base rounded  font-semibold border border-customBorderColor"
              />
            </div>
            <div className="relative w-full">
              <p className="text-light text-base mb-2 font-light">Total</p>
              <input
                type="text"
                value="156.00"
                className="w-full outline-0 bg-transparent py-3 text-white text-base rounded font-semibold"
              />
              <TrashIcon className="h-5 w-5 text-white absolute right-0 top-11 text-[#888EB0] cursor-pointer hover:text-brightRed transition" />
            </div>
          </div>
          <button className="w-full bg-inputBg rounded-3xl p-3 font-light text-light font-semibold text-base">
            <span>
              <PlusSmallIcon className="h-3 w-3 inline mb-1" />
            </span>
            Add New Item
          </button>
          <div className="flex justify-between mt-12">
            <button className="text-base bg-white py-3 px-6 rounded-3xl text-[#7E88C3] font-semibold  ">
              Discard
            </button>
            <div>
              <button className="text-base bg-[#373B53] py-3 px-6 rounded-3xl text-light font-semibold mr-2 hover:bg-secondary transition">
                Save as Draft
              </button>
              <button className="text-base bg-primary py-3 px-6 rounded-3xl text-white font-semibold hover:bg-logoLight transition">
                Save & Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceCreateForm;
