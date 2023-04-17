import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";


const ForDaos = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h1 className="text-[2.25rem] leading-[2.723rem] font-semibold text-center max-[767px]:p-[30px]">
          Give your community a way to support your cause.
        </h1>
        <p className="text-lg leading-[1.361rem] text-center font-normal mt-[3rem] max-w-[49.5rem] mx-auto max-[767px]:p-[30px]">
          BanklessDAO is proud to be partnering with other DAOs, creating a
          community card for members to earn rewards in their native tokens with
          every swipe.
        </p>
        <div className="mt-[3rem] flex justify-center gap-[3rem] p-[30px] max-[767px]:flex-col max-[767px]:justify-center max-[767px]:items-center  max-[767px]:mb-0">
          <div className="max-w-[23.875rem] p-[2rem]  border-4 border-purple-600 border-gradient-to-r">
            <h1 className="font-medium text-2xl leading-[1.8rem] text-center">
              Support your tokenomics
            </h1>
            <hr className="w-[6rem] my-[1rem] mx-auto h-1 bg-gradient-to-r from-purple-600 to-indigo-600" />
            <p className="text-lg leading-[1.361rem] text-center font-normal">
              We reward fiat spending with your token, increasing its value over
              time.
            </p>
          </div>

          <div className="max-w-[23.875rem] p-[2rem]  border-4 border-purple-600 border-gradient-to-r">
            <h1 className="font-medium text-2xl leading-[1.8rem] text-center">
              Easy Onboarding
            </h1>
            <hr className="w-[6rem] my-[1rem] mx-auto h-1 bg-gradient-to-r from-purple-600 to-indigo-600" />
            <p className="text-lg leading-[1.361rem] text-center font-normal">
              No complicated token buying from DEXes for new members.{" "}
            </p>
          </div>
        </div>

        <div className="mt-[8rem] flex justify-center gap-[3.6rem] max-[767px]:flex-col max-[767px]:justify-center max-[767px]:items-center  max-[767px]:mb-0">
          <div>
            <div>
              <Image
                priority
                src="/images/dao-contributor.svg"
                className=""
                height={256}
                width={232}
                alt="dao contributor"
              />
            </div>
            <h1 className="font-medium text-lg leading-7 text-center max-[767px]:p-[20px]">DAO Contributor</h1>
            <p className="text-sm leading-6 text-center max-w-[14.5rem]">An easier way to obtain DAO tokens and get rewarded for your spending.</p>
          </div>
          <div>
            <div>
              <Image
                priority
                src="/images/dao-leader.svg"
                className=""
                height={256}
                width={232}
                alt="dao leader"
              />
            </div>
            <h1 className="font-medium text-lg leading-7 text-center max-[767px]:p-[20px]">DAO Leader</h1>
            <p className="text-sm leading-6 text-center max-w-[14.5rem]">A better way to retain and care for your contributors by positioning your token in a practical way.</p>
          </div>
          <div>
            <div>
              <Image
                priority
                src="/images/new-web3.svg"
                className=""
                height={256}
                width={232}
                alt="dao contributor"
              />
            </div>
            <h1 className="font-medium text-lg leading-7 text-center max-[767px]:p-[20px]">New in Web 3.0?</h1>
            <p className="text-sm leading-6 text-center max-w-[14.5rem]">We teach you about the world of web 3.0 with a simple and educational application.</p>
          </div>
        </div>

        <div className="overflow-hidden mt-[10rem]">
            <h1 className="font-medium text-2xl leading-[1.813rem] text-center max-w-[49.5rem] mx-auto max-[767px]:hidden">Are you a Web3 advocate, and want to reward users with perks and other incentives? We’d love to hear from you!</h1>
        </div>

        <ContactUs />
        <Footer />
      </section>
    </div>
  );
};

export default ForDaos;
