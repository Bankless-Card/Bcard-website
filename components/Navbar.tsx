import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '@/styles/Navbar.module.css'

import logo from "../public/images/logo.svg";
import hamburger from "../public/images/hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? `text-purple-500 ${styles['border-bottom']}` : `${styles['border-hover-bottom']}`
  };

  return (
    <nav className="flex justify-between items-center p-[3rem]">
      <Link href="/" className="z-50">
        <Image
          priority
          src={logo}
          className=""
          height={56.97}
          width={179}
          alt="bankless card"
        />
      </Link>
      <div className="hidden md:flex gap-5">
        <Link href="/for-daos" className={isActive("/for-daos")}>For DAOs</Link>
        <Link href="/for-investors" className={isActive("/for-investors")}>For Investors</Link>
        <a
          href="https://banklesscard.mirror.xyz/"
          target="_blank"
          rel="noreferrer"
          className={`${styles['border-hover-bottom']}`}
        >
          Blog
        </a>
        <Link href="/contact-us" className={isActive("/contact-us")}>Contact Us</Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className="block text-gray-700 hover:text-white focus:text-white focus:outline-none"
        >
          <Image
            priority
            src={hamburger}
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
