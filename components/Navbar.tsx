import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/images/NewImages/Nav_BcardLogo.svg";
import hamburger from "../public/images/NewImages/Nav_Hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="mx-[54px] mb-[54px] mt-[36px] flex h-24 items-center justify-between rounded-[20px] bg-[#2D2D2D] px-[10px]">
        <Link
          id="Nav_Logo"
          href="/"
          className="h-fit rounded-[20px] py-4 pl-4 hover:bg-[#212121]"
        >
          <Image
            priority
            src={logo}
            className=""
            height={51}
            width={212}
            alt="BCard"
          />
        </Link>

        <div
          id="Nav_HamburgerMenuContent"
          className={`relative bg-yellow-300 transition-all duration-300 ease-in-out ${
            isOpen ? "h-[380px] w-[480px] p-8 pb-4" : "h-12 w-12"
          }`}
          style={{
            transformOrigin: isOpen ? "top right" : "top right",
            transform: isOpen ? "scale(1)" : "scale(1)",
          }}
        >
          <button
            id="Nav_Hamburger"
            onMouseDown={() => setIsOpen(!isOpen)}
            className="absolute right-0 top-0 z-50 block rounded-[20px] p-4 text-gray-700 hover:bg-[#212121] hover:text-white focus:text-white focus:outline-none"
          >
            <Image
              priority
              src={hamburger}
              className=""
              height={48}
              width={48}
              alt="hamburger"
            />
          </button>
          {isOpen && (
            <div className="absolute left-0 top-16 w-full">
              <Link href="/link1" className="block py-2 text-black">
                Link 1
              </Link>
              <Link href="/link2" className="block py-2 text-black">
                Link 2
              </Link>
              <Link href="/link3" className="block py-2 text-black">
                Link 3
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
