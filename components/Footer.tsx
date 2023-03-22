import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-[10rem]  pb-[3rem] ">
      <div className="flex justify-between items-center  w-full">
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
      </div>

      <div>
        <hr />
        <div className="flex justify-between items-center ">
          <p className="text-[0.875rem] leading-[1rem] font-medium">© Copyright 2023 Bankless Card. All Rights Reserved</p>
          <div className="flex items-center gap-3 mt-[3rem]">
          <div>
          <Image
            priority
            src="/images/twitter.svg"
            className=""
            height={24}
            width={24}
            alt="twitter"
          />
        </div>

        <div>
          <Image
            priority
            src="/images/discord.svg"
            className=""
            height={24}
            width={24}
            alt="discord"
          />
        </div>

        <div>
          <Image
            priority
            src="/images/github.svg"
            className=""
            height={24}
            width={24}
            alt="github"
          />
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
