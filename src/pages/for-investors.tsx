import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/for-investors.module.css'
import Navbar from "components/Navbar";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

const ForInvestors = () => {
  return (
    <div>
      <Navbar />
      <section className="relative">
        <div className={`${styles['ellipse5']}`}></div>
        <div className={`${styles['ellipse2']}`}></div>
        <h1 className="text-[2.25rem] leading-[2.723rem] font-semibold text-center px-[40px]">
          Powering the ownership economy.
        </h1>
        <p className="text-lg leading-[1.375rem] text-center font-normal mt-[3rem] max-w-[49.5rem] mx-auto px-[40px]">
          Web3 communities are the future, and BCard
          gives their members a way to support them with every swipe.
        </p>
        <div className="flex justify-center gap-[2rem] mt-[3rem] relative max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center">
            <a href="https://docs.google.com/presentation/d/1lmrNxJL-XmqbMYAKw6GIoYljE6bEHpBMuPXDRqUJ8p0/edit#slide=id.g20c4eb3302c_0_15" target="_blank" rel="noreferrer">
                <button className="w-[11.707rem] h-[3rem] rounded-[0.25rem] border border-gradient-to-r from-purple-600 to-indigo-600  px-[0.5rem] capitalize">
                    OUR PITCH DECK
                    </button>
            </a>

            <a href="https://www.youtube.com/watch?v=GVhzI1GyGSI" target="_blank" rel="noreferrer">
                <button className="w-[11.707rem] h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.5rem] capitalize">
                  WATCH OUR VIDEO
                </button>
            </a>
        </div>

        <div className="overflow-hidden mt-[10rem]">
          <h1 className="font-medium text-2xl leading-[1.813rem] text-center max-w-[49.5rem] mx-auto px-[40px]">
          Are you passionate about investing in Web3, and want to see DAOs taken to the next level? If so, we would love to hear from you.
          </h1>
        </div>

        <ContactUs />
        <Footer />
      </section>
    </div>
  );
};

export default ForInvestors;