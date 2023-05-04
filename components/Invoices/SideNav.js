import React from "react";
import Image from "next/image";
import logo from "../../components/assets/logo.svg";
import iconSun from "../../components/assets/icon-sun.svg";
import iconAvatar from "../../components/assets/image-avatar.jpg";
const SideNav = () => {
  return (
    <div className="w-nav_width bg-secondary h-full flex flex-col justify-between rounded-r-navRadius fixed top-0 left-0">
      <div className="bg-primary flex items-center justify-center h-nav_height rounded-r-2xl">
        <Image alt="logo" src={logo} className="w-10 z-10" />
      </div>
      <div className="flex items-center flex-col mb-8">
        <Image
          alt="toggle-dark-mode"
          className="mb-10 cursor-pointer"
          src={iconSun}
        />
        <div className="border-t w-full border-bTop  pt-5">
          <Image src={iconAvatar} className="rounded-full w-10 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
