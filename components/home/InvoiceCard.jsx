import Image from "next/image";
import iconArrowRight from "../assets/icon-arrow-right.svg";
const InvoiceCard = () => {
  return (
    <div className="outline outline-0 cursor-pointer bg-secondary flex py-4 rounded-lg items-center mb-4 hover:outline-1 outline-primary">
      <p className="text-xs text-white ml-7">#RT3080</p>
      <p className="text-xs text-light ml-12 font-light">Due 19 Aug 2021</p>
      <p className="text-xs text-white ml-12 font-light">Jensen Huang</p>
      <p className="text-white ml-20">£1,800.90</p>
      <div className="flex items-center bg-status_green bg-status_green_light py-3 px-7 rounded-lg ml-12">
        <div className="rounded-full w-2 h-2 bg-status_green mr-3"></div>
        <p className="text-xs text-status_green">Paid</p>
      </div>
      <Image src={iconArrowRight} alt="icon-right" className="ml-10" />
    </div>
  );
};

export default InvoiceCard;
