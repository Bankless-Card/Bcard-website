import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Footer.module.css'

import footerLog from "../public/images/footerLog.svg";
import twitter from "../public/images/twitter.svg";
import discord from "../public/images/discord.svg";
import github from "../public/images/github.svg";
// import playStore from "../public/images/playStore.svg";
// import appStore from "../public/images/appStore.svg";

const Footer = () => {
  return (
    <section className={`mt-[10rem]  pb-[3rem] mx-[7.5rem] ${styles['footer']}`}>
      <div className={` flex justify-between ${styles['content']}`}>
        <div>
          <Image
            priority
            src={footerLog}
            className="z-[100]"
            height={94}
            width={82.9}
            alt="BCard"
          />
        </div>
        <div className="flex flex-col gap-[1rem] z-[100]">
          <h1 className="font-semibold text-lg leading-[1.375rem]">BCard</h1>
          <Link href="/">Home</Link>
          <Link href="/for-daos">For Communities</Link>
          <Link href="/for-investors">For Investors</Link>
        </div>
        <div className="flex flex-col gap-[1rem] z-[100]">
          <h1 className="font-semibold text-lg leading-[1.375rem]">Information</h1>
          {/* <div className="">FAQ</div> */}
          <a href="https://banklesscard.mirror.xyz/" target="_blank" rel="noreferrer">Blog</a>
          {/* <div>Support</div> */}
          <Link href="/privacy-policy">Privacy Policy</Link>
          {/* <div>Terms & Conditions</div> */}
        </div>
        {/* <div className={`flex flex-col gap-[1rem] pr-40 ${styles['remove-padding']}`}>
          <h1 className="font-semibold text-lg leading-[1.375rem]">Install App</h1>
          <div>
            <Image
              priority
              src={appStore}
              className=""
              height={55.68}
              width={177}
              alt="app store"
            />
          </div>
          <div>
            <Image
              priority
              src={playStore}
              className=""
              height={55.68}
              width={177}
              alt="play store"
            />
          </div>
        </div> */}
      </div>

      <div className="mt-[7rem]">
        <div className="pb-[3rem]">
          <hr className="border-[#313131]" />
        </div>
        <div className={`flex justify-between items-center z-[100] ${styles['content-down']}`}>
          <p className="text-[0.875rem] text-gray-400  font-medium">© Copyright 2023 BCard. All Rights Reserved</p>
          <div className="flex items-center gap-3  ">
          <div className=" z-[100]">
          <a  href="https://twitter.com/getbcard" target="_blank" rel="noreferrer">
            <Image
              priority
              src={twitter}
              className=""
              height={24}
              width={24}
              alt="twitter"
            />
          </a>
        </div>

        <div>
          <a href="https://discord.gg/bankless" target="_blank" rel="noreferrer">
            <Image
              priority
              src={discord}
              className=""
              height={24}
              width={24}
              alt="discord"
            />
          </a>
        </div>

        <div>
          <a href="https://github.com/Bankless-Card" target="_blank" rel="noreferrer" >
            <Image
              priority
              src={github}
              className=""
              height={24}
              width={24}
              alt="github"
            />
          </a>
        </div>
          </div>
        </div>
      </div>
      <div className={`${styles['ellipse4']}`}></div>
    </section>
  );
};

export default Footer;
