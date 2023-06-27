import React from "react";
import chevronLeft from "../assets/icon-arrow-left.svg";
import Image from "next/image";
const ReturnToHome = () => {
  return (
    <div className="flex items-center cursor-pointer mb-6">
      <Image src={chevronLeft} />
      <p className="text-white ml-6 text-xs font-medium">Go back</p>
    </div>
  );
};

export default ReturnToHome;
