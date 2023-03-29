import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

const ForInvestors = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h1 className="text-[2.25rem] leading-[2.723rem] font-semibold text-center">
          Powering the financial future of DAOs.
        </h1>
        <p className="text-lg leading-[1.375rem] text-center font-normal mt-[3rem] max-w-[49.5rem] mx-auto">
          DAOs are the present and future of Web3 communities, and Bankless Card
          gives their members a way to support them with every swipe.
        </p>
        <div className="flex justify-center gap-[2rem] mt-[3rem]">
        <a href="https://docs.google.com/presentation/d/1lmrNxJL-XmqbMYAKw6GIoYljE6bEHpBMuPXDRqUJ8p0/edit#slide=id.g20c4eb3302c_0_15" target="_blank" rel="noreferrer">
            <button className="w-[11.707rem] h-[3rem] rounded-[0.25rem] border border-gradient-to-r from-purple-600 to-indigo-600  px-[0.5rem]">
                 our pitch deck
                </button>
        </a>

            <a href="https://www.youtube.com/watch?v=_5sthQO5rp4" target="_blank" rel="noreferrer">
                <button className="w-[11.707rem] h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.5rem]">
                  watch our video
                </button>
            </a>
        </div>

        <div className="overflow-hidden mt-[10rem]">
          <h1 className="font-medium text-2xl leading-[1.813rem] text-center max-w-[49.5rem] mx-auto">
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
