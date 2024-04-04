import React, { FormEvent, FormEventHandler, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Product from "components/Product";
import Partner from "components/Partner";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import TestimonialCarousel from "components/TestimonialCarousel";
import styles from "@/styles/landingpage.module.css";
import { useMediaQuery } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bcard from "../../public/images/bcard-glow.png";
import bcardMobile from "../../public/images/bcard-home-hero.png";
import earn from "../../public/images/earn.svg";
import onboard from "../../public/images/onboard.svg";
import phone from "../../public/images/phone.svg";
import support from "../../public/images/support.svg";
import community from "../../public/images/image.png";
import API from "@/utils";
import { useRouter } from "next/router";
import axios from 'axios';



const LandingPage = () => {
  const router = useRouter();
  const [ismobileScreen] = useMediaQuery("(max-width: 768px)");
  const [waitlistEmail, setWaitlistEmail] = useState("");

  // local testing
  const MY_API_KEY = "XLzmLAWn9RcqmyHc57xV0g";  //process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;
  const MY_API_TAG = "3960977";    process.env.NEXT_PUBLIC_CONVERTKIT_API_TAG;

  // production GH Pages
  // const MY_API_KEY = process.env.CONVERTKIT_API_KEY;
  // const MY_API_TAG = process.env.NEXT_PUBLIC_CONVERTKIT_API_TAG;
  
  const handleSubmitWaitlist: FormEventHandler<HTMLFormElement> = async (
    ev
  ) => {
    ev.preventDefault();
    try {


      //TODO: set this as a GITHUB secret

      // Data to send in the email
      const emailData = {
        email: waitlistEmail,
        api_key: MY_API_KEY,
        tags: [MY_API_TAG],  //website tag
      };



      // Send email using ConvertKit API
      axios({
        method: 'post',
        url: `https://api.convertkit.com/v3/forms/4996164/subscribe`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: emailData
      })
      .then(response => {
        setWaitlistEmail("");
        router.push("/thank-you");
      })
      .catch(error => {
        console.error('Failed to send email:', error.response.data);
      });


    } catch (err) {
      console.error("Something went wrong", err);
      toast("Something went wrong");
    }
  };


  return (
    <div>

        <div className="container">
          <Script 
            src='https://www.googletagmanager.com/gtag/js?id=G-WXX5WPLBE4'
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-WXX5WPLBE4', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </div>

      <section className="flex flex-col md:flex-row justify-center gap-[2rem] items-center px-[3rem]">
        <div className="w-[50%] max-[767px]:w-full">
          <div className={`${styles["gradient-header"]}`}></div>
          <h1 className="text-5xl leading-[3.625rem] font-bold text-center relative z-50 max-[767px]:text-[30px] max-[767px]:leading-[150%]">
            Support your community with every swipe!
          </h1>
          <p className="text-lg leading-[1.375rem] mt-[2rem] text-center relative z-50 max-[767px]:leading-[130%]">
            BCard redirects payment card fees to your favorite community and rewards you with community tokens.
          </p>
          {/* <ConvertKitForm formId={MY_FORM_ID} /> */}
          <form
            className="flex gap-4  mt-[2rem] justify-center max-[767px]:flex-col max-[767px]:items-center max-[767px]:pb-[20px] max-[767px]:justify-center"
            onSubmit={handleSubmitWaitlist}
          >
            <input
              className="border border-gray-400 px-4 py-2 rounded-md w-[18.25rem] text-black z-50"
              onChange={(ev) => setWaitlistEmail(ev.target.value)}
              placeholder="Email"
              type="email"
              value={waitlistEmail}
            />
            <button
              className="w-[11.707rem] h-[2.719rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.438rem] z-50"
              type="submit"
              disabled={!!!waitlistEmail}
            >
              Join our waitlist
            </button>
          </form>
        </div>
        <div className="max-[767px]:hidden">
          <Image
            priority
            src={bcard}
            className="w-[] h-[]"
            alt="BCard"
          />
        </div>
        <div className="min-[767px]:hidden">
          <Image
            priority
            src={bcardMobile}
            className="w-[] h-[]"
            alt="BCard"
          />
        </div>
        <div className={`${styles["gradient-header-strip"]}`}></div>
      </section>

      <section className="mt-[13rem] flex justify-evenly items-center overflow-hidden px-[3rem] w-full max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-[4rem] max-[767px]:mt-[auto]">
        <div className="flex flex-col gap-[4rem]  w-[33.33%] max-[767px]:w-full max-[767px]:justify-center max-[767px]:items-center max-[767px]:text-center">
          <div className={`max-w-[24rem]`}>
            <div>
              <Image
                priority
                src={earn}
                className=" max-[767px]:m-auto"
                height={100}
                width={100}
                alt="earn"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem]">
              {" "}
              Earn community tokens, increase token price
            </h2>
            <p className="text-lg leading-[1.375rem]">
              Every swipe earns you cashback in community tokens purchased
              from a DEX, increasing token value.
            </p>
          </div>

          <div className={`max-w-[24rem]`}>
            <div>
              <Image
                priority
                src={onboard}
                className=" max-[767px]:m-auto"
                alt="onboard"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem]">
              {" "}
              Easily onboard new members
            </h2>
            <p className="text-lg leading-[1.375rem]">
              With our easy-to-use mobile app, you can onboard new friends into
              your community with a simple download.
            </p>
          </div>
        </div>

        <div className="-[33.33%] flex justify-center items-center max-[767px]:w-full max-[767px]:-order-1">
          {ismobileScreen ? (
            <Image
              priority
              src={phone}
              className=""
              alt="BCard"
              height={379}
              width={339}
            />
          ) : (
            <Image
              priority
              src={phone}
              className=""
              alt="BCard"
              height={379}
              width={250}
            />
          )}
        </div>

        <div className="flex flex-col gap-[4rem]  w-[33.33%] items-end max-[767px]:w-full max-[767px]:justify-center max-[767px]:items-center max-[767px]:text-center">
          <div className="max-w-[24rem] min-[767px]:flex flex-col items-end">
            <div>
              <Image
                priority
                src={support}
                className=" max-[767px]:m-auto"
                height={100}
                width={100}
                alt="support"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem] min-[767px]:text-end">
              Support your favourite communities
            </h2>
            <p className="text-lg leading-[1.375rem] min-[767px]:text-end px-[1rem]">
              Every time you use a card, 1-2% of the purchase price goes to a bank.
              BCard redirects some of that fee to your favorite community.
            </p>
          </div>

          <div className="max-w-[24rem] min-[767px]:flex flex-col items-end">
            <div>
              <Image
                priority
                src={community}
                className="max-[767px]:m-auto"
                height={115}
                width={115}
                alt="community"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem] min-[767px]:text-end">
              The community-owned card!
            </h2>
            <p className="text-lg leading-[1.375rem] min-[767px]:text-end px-[1rem]">
              BCard is by DAOs, for DAOs. Unlike centralized crypto
              cards, you have a say in how we build the future.
            </p>
          </div>
        </div>
        <div className={`${styles["gradient-bottom-strip"]}`}></div>
      </section>
      {/* <section className="mt-[10rem] relative bg-[#171717] pt-[20px] pb-[50px]">
				<h1 className="font-medium text-[2rem] leading-[2.438rem] text-center pb-[6rem]">
					What Our Users Say
				</h1>
				<div className={`${styles["ellipse1"]}`}></div>
				<div className={`${styles["ellipse2"]}`}></div>
				<TestimonialCarousel />
			</section> */}
      <Product />
      <Partner />
      <ContactUs />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default LandingPage;
