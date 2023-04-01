import Navbar from "components/Navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-[3rem]">
      <Navbar />
      <h1 className="font-semibold text-4xl leading-[2.75rem] text-center py-[3rem]">
        Privacy Policy
      </h1>
      <div>
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
          What information do we collect?
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          We collect information from you when you register your interest in our
          products and services by inputting your contact details.  You may be
          asked to enter your name, e-mail address, ETH address, and other
          information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
