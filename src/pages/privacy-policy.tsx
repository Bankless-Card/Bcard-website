import Footer from "components/Footer";
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

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
          What do we use your information for?
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem]">
          To improve our site and products — we continually strive to improve
          our offerings based on the information and feedback we receive from
          you.
        </p>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem]">
          To send periodic emails or tokens — The addresses you provide may be
          used to send you information and updates, solicit feedback, or to send
          you gifts on the blockchain.
        </p>
      </div>

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
          Do we use cookies?
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          Yes. Cookies are small files that a site or its service provider
          transfers to your computer’s hard drive through your Web browser (if
          you allow). These cookies enable the site to recognize your browser
          and, if you have a registered account, associate it with your
          registered account.
        </p>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          We use cookies to understand and save your preferences for future
          visits and compile aggregate data about site traffic and site
          interaction so that we can offer better site experiences and tools in
          the future. We may contract with third-party service providers to
          assist us in better understanding our site visitors. These service
          providers are not permitted to use the information collected on our
          behalf except to help us conduct and improve our business.
        </p>
      </div>

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
          Do we disclose any information to outside parties?
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our site, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release your information
          when we believe release is appropriate to comply with the law, enforce
          our site policies, or protect ours or others rights, property, or
          safety. However, non-personally identifiable visitor information may
          be provided to other parties for marketing, advertising, or other
          uses.
        </p>
      </div>

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
          Children’s Online Privacy Protection Act Compliance
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          Our site, products and services are all directed to people who are at
          least 13 years old or older. If this server is in the USA, and you are
          under the age of 13, per the requirements of COPPA (Children’s Online
          Privacy Protection Act), do not use this site.
        </p>
      </div>

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
          Online Privacy Policy Only
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
          This online privacy policy applies only to information collected
          through our site and not to information collected offline.
        </p>
      </div>

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
        Your Consent
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
        By using our site, you consent to our web site privacy policy.
        </p>
      </div>

      <div className="mt-[3rem] overflow-hidden">
        <h1 className="font-semibold text-4xl leading-[2.75rem]">
        Changes to our Privacy Policy
        </h1>
        <p className="text-lg leading-[1.375rem] font-normal max-w-[64.75rem] mt-[1.5rem]">
        If we decide to change our privacy policy, we will post those changes on this page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
