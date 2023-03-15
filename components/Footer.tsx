import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-[10rem] flex w-full  justify-between items-center flex-wrap">
      <div>
        <Image
          priority
          src="/images/footer-log.svg"
          className=""
          height={94}
          width={82.9}
          alt="bankless card"
        />
      </div>

      <div className="flex flex-col gap-[1rem]">
        <h1>Company</h1>
        <div>About us</div>
        <div>For DAOs</div>
        <div>For Investors</div>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <h1>Information</h1>
        <div>FAQ</div>
        <div>Blog</div>
        <div>Support</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <h1>Install App</h1>
        <div>
          <Image
            priority
            src="/images/app-store.svg"
            className=""
            height={55.68}
            width={177}
            alt="app store"
          />
        </div>
        <div>
          <Image
            priority
            src="/images/play-store.svg"
            className=""
            height={55.68}
            width={177}
            alt="play store"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
