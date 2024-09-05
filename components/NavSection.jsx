import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavSection = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            width={50}
            height={50}
            alt="Menu icon"
            src="/assets/svg/menu.svg"
            className="lg:hidden w-5 h-5"
          />

          <Link href="/">
            <Image
              width={100}
              height={100}
              alt="Logo"
              src="/assets/lws-logo-black.svg"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          width={100}
          height={100}
          src="/assets/svg/avatar.svg"
          className="hidden lg:block w-[18px] h-[18px]"
          alt="Login account avatar"
        />
        <Image
          width={100}
          height={100}
          src="/assets/svg/shopping-Cart.svg"
          className="block w-5 h-5"
          alt="Shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default NavSection;
