import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-[3rem]">
      <Link href="/" className="">
        <Image
          priority
          src="/images/logo.svg"
          className=""
          height={56.97}
          width={179}
          alt="bankless card"
        />
      </Link>
      <div className="hidden md:flex gap-5">
        <Link href="/for-daos">For DAOs</Link>
        <Link href="/for-investors">For Investors</Link>
        <a
          href="https://banklesscard.mirror.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <Link href="/contact-us">Contact Us</Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className="block text-gray-700 hover:text-white focus:text-white focus:outline-none"
        >
          <Image
            priority
            src="/images/hamburger.svg"
            className=""
            height={25}
            width={25}
            alt="hamburger"
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full bg-white z-50`}
        >
          <div className="p-4">
            <Link
              href="/for-daos"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="block text-gray-800 hover:text-white py-2">
                For DAOs
              </p>
            </Link>
            <Link
              href="/for-investors"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="block text-gray-800 hover:text-white py-2">
                For Investors
              </p>
            </Link>
            <a
              href="https://banklesscard.mirror.xyz/"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-800 hover:text-white py-2"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Blog
            </a>
            <Link
              href="/contact-us"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="block text-gray-800 hover:text-white py-2">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
