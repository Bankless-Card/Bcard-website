"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

let comparisonData = [
  {
    name: "community fundraising",
    fields: [true, false, false, false],
  },
  {
    name: "Onboarding users to web3",
    fields: [true, false, false, false],
  },
  {
    name: "Non-custodial options",
    fields: [true, false, false, false],
  },
];

const card_group1 = [
  {
    src: "/images/card 1.png",
    image_classname: "max-sm:mb-[-1.5em] sm:mb-[-2em] md:mb-[-3.4em] cover mx-auto  w-[70%] md:w-[100%] mt-[-2em] 2xl:mb-[-6em] lg:w-[90%]",
    title: `The <span class="text-[#FF5810]">community-owned</span>  card!`,
    caption: `BCard is a community making tools for communities. Unlike other cards, you have a say in how we build the future.`,
    gradient_classname: "gradient-bg-1"
  },

  {
    src: "/images/card 2.png",
    image_classname: "cover mx-auto w-[68%] md:w-[85%] lg:w-[80%]",
    title: `Support your <span class="text-[#13B5EC]">favorite</span>
    communities`,
    caption: `Every time you use a card, 1-2% of the purchase price goes to a
    bank. BCard redirects some of that fee to your favorite
    community.`,
    gradient_classname: "gradient-bg-2"
  },

  {
    src: "/images/card 3.png",
    image_classname: "cover mx-auto w-[60%] md:w-[78%] lg:w-[74%]",
    title: `Easily
    <span class="text-[#27FFA4]"> onboard</span> new members`,
    caption: `With our easy-to-use mobile app, you can onboard new friends
    into your community with a simple download.`,
    gradient_classname: "gradient-bg-3"
  },
]

const card_group2 = [
  {
    src: "/svg/arrow-down-tray.svg",
    title: `Download the App`,
    caption: `Choose a community and get a virtual card immediately.`,
  },
  {
    src: "/svg/currency-dollar.svg",
    title: `Make purchases, get rewards`,
    caption: `Every time you spend, you earn community points.`,
  },
  {
    src: "/svg/user-group.svg",
    title: `Support your community`,
    caption: `Half of all fees earned go to your community.`,
  }

  
];

export default function LandingPage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="">
        <section className="mt-[4em] grid h-[fit-content] place-items-center">
          <div className="relative grid h-[100%] w-[100%]">
            <Image
              src={"/curves/hero curve 1.svg"}
              className="cover absolute left-0 right-0 z-20 mt-[-4.4em] w-[100vw] md:mt-[-11em] lg:mt-[-13.5em] 2xl:mt-[-17.5em] "
              height={200}
              width={1250}
              alt=""
            />

            <Image
              src={"/curves/hero curve 2.svg"}
              className="cover absolute left-0 right-0 z-10 mt-[15em] w-[100vw] md:mt-[-11em] lg:mt-[-13em] 2xl:mt-[-19.5em] "
              height={500}
              width={1200}
              alt=""
            />

            <div className="z-50 lg:mt-[2em] 2xl:mt-[5em] md:ml-[-3.5em]">
              <div className=" flex flex-col-reverse px-[2em] text-center md:grid md:grid-cols-[1fr,1fr] md:px-[3.5em] md:text-left md:gap-[2.8em] md:mt-[-2em]">
                <Link href="https://app.getbcard.io/" className="mx-auto mt-6 block rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:hidden">
                  {" "}
                  Sign up Now
                </Link>
                <Image
                  src={"/images/debit-card-web.svg"}
                  className="hidden md:w-[85%] lg:w-[82%] 2xl:w-[75%] md:mr-0 md:ml-auto md:block"
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />
                <Image
                  src={"/images/bcard-home-hero.png"}
                  className="block w-[83%] sm:w-[50%] mx-auto md:hidden "
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />

                <div className="flex flex-col py-[2.5em] md:pt-[1em] md:my-auto text-center">
                  <h2 className="poppins   text-[2.2em] font-semibold md:text-[1.8em] lg:text-[2.3em] 2xl:text-[3.5em] 2xl:leading-[1.31em] md:leading-[1.32em]">
                  Support your community{" "}
                    <span className="text-[#FFB539]">with every swipe!</span>
                  </h2>
                  <p className="mt-[1em]">
                    BCard redirects payment card fees to your favorite
                    community, and rewards you with tokens.
                  </p>
                  <Link href="https://app.getbcard.io/" className="mx-auto mt-5 hidden rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:block">
                    {" "}
                    Sign up Now (US Only)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-40 mb-2 mt-[5em]  sm:mt-[12em] grid place-items-center md:mt-[20em] 2xl:mt-[24em]">
        <div className="flex flex-wrap justify-center center-align h-[max-content] md:grid gap-[2em]  place-items-center md:grid-cols-[1fr,1fr,1fr] md:max-w-[83%] md:gap-6 max-sm:px-4">
          {card_group1.map((item, index) => (
            <>
              <div key={index} className={`${item.gradient_classname} center-align flex w-[100%] md:w-[100%] sm:w-[16em] md:h-[100%] sm:h-[30em] h-[fit-content] lg:max-w-[20em] 2xl:max-w-[25em] flex-col justify-center rounded-[1.4em] p-4 max-sm:pb-[2.2em] shadow-lg`}>
              <Image
                src={item.src}
                className={item.image_classname}
                height={1}
                width={1}
                alt="image"
              />

              <h3 dangerouslySetInnerHTML={{ __html: item.title }} className="text-center text-[1.6em] font-semibold pt-1"></h3>
              <p className="mt-[1em] text-center text-[0.95em] ">{item.caption}</p>
            </div>
            </>
          ))}
        </div>
        </section>

        <section className="mb-[6em]  lg:mb-[-52em] 2xl:mb-[-70em] mt-[2em] grid place-items-center md:mt-[5em]">
        <div className="flex h-[max-content] mx-auto flex-col gap-[2em] p-5 md:grid md:max-w-[83%] md:grid-cols-[1fr,1fr,1fr]">
          {card_group2.map((item, index) => (
            <>
              <div key={index} className=" center-align grid h-[100%] w-[100%] grid-rows-[9.7em,auto] justify-center rounded-[1.4em] p-4 shadow-lg 2xl:max-w-[25em]">
              <Image
                src={item.src}
                className=" mx-auto max-h-[8.2em] max-w-[8.2em]"
                height={150}
                width={150}
                alt="image"
              />

              <h3 className="mt-2 text-center text-[1.65em] font-semibold ">{item.title}</h3>
              <p className="mb-2 mt-[1em] text-center text-[1em] text-[#9AA0A6]">{item.caption}</p>
            </div>
            </>
          ))}
        </div>
        
        </section>

        

        <section className="z-[100] mb-4 hidden place-items-center md:mt-[-35em] lg:mt-[-25em] 2xl:mt-[-69em] md:grid md:mb-[-10em] 2xl:mb-[-20em] ">
          <div className="relative grid w-[110%]">
            <div className="">
              <Image
                src={"/curves/curve 7.svg"}
                className="w-[100%] md:mt-[5em]"
                height={1}
                width={1}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="mb-[5em] mt-5 flex w-screen max-sm:mt-[10em] md:hidden">
          <div className="relative grid w-[100%] z-[50]">
            <div className="absolute">
              <Image
                src={"/images/curve 4.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
            </div>

            <div className="z-40 mx-auto flex w-[90%] flex-col gap-[7em] md:grid md:grid-cols-[1fr,1fr,1fr] md:gap-5">
              <div className=" center-align flex flex-col justify-center text-center md:mt-[5em]">
                <Image
                  src={"/images/android-phone.svg"}
                  className="mx-auto md:w-[34%] w-[32%]"
                  height={1}
                  width={1}
                  alt=""
                />
                <h3 className="mt-4 text-[1.4em] font-semibold ">
                  Download the App
                </h3>
                <p className="mx-auto mt-2 max-w-[80%] text-[0.95em]">
                  Get a physical/virtual card, choose a community
                </p>
              </div>

              <div className=" center-align flex flex-col justify-center text-center md:mt-[-5em]">
                <Image
                  src={"/images/credit-card-bubbles.svg"}
                  className="mx-auto md:w-[66%] w-[50%]"
                  height={1}
                  width={1}
                  alt=""
                />
                <h3 className="mx-auto  max-w-[85%] text-[1.4em] font-semibold">
                  Make purchases, get token rewards
                </h3>
                <p className="mx-auto mt-2 max-w-[80%] text-[0.95em]">
                  50% of net interchange goes to chosen community
                </p>
              </div>

              <div className=" center-align flex flex-col justify-center text-center md:mt-[4em]">
                <Image
                  src={"/images/Union.svg"}
                  className="mx-auto md:w-[50%] w-[45%]"
                  height={1}
                  width={1}
                  alt=""
                />
                <h3 className="mt-4 text-[1.4em] font-semibold ">
                  Support your community
                </h3>
                <p className="mx-auto mt-2 max-w-[80%] text-[0.95em]">{`User’s community enjoys increased economic stability and health`}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden place-items-center  md:grid">
          <div className="grid w-[110%]">
            <div className="z-40 mx-auto grid w-[90%] place-items-center 2xl:pt-0 text-center">
              <h2 className="mb-3 max-w-[62%] text-[3em] font-semibold 2xl:text-[3.5em] md:leading-[1.36em] 2xl:leading-[1.33em]">
                Give your community a way to support your cause{" "}
              </h2>
              <h2 className="text-[1.5em] font-semibold mb-[1em] mt-[1em] md:max-w-[62%]">
                BCard works for <span className="text-[#FF5810]">every</span> community, no matter how big or small.{" "}
              </h2>
            </div>
          </div>
        </section>

        <section className="relative z-50 mb-[10em]  2xl:max-w-[78%] mx-auto sm:mb-[6em] md:mb-[15em]">
          <div className="mx-auto mt-[2em] flex h-[fit-content] w-[70%] w-[90%] flex-col-reverse gap-[2em] max-sm:w-[92%] md:mx-auto sm:grid md:h-[5em] sm:grid-cols-[1fr,1fr] md:place-items-center">
            <div className="mr-0 ml-auto lg:max-w-[27em] 2xl:max-w-[31em] gradient-bg-blue-purple h-[100%] w-[100%]  rounded-2xl p-5 py-[2em]  shadow-md">
              <div className="flex md:mb-4  flex-col-reverse gap-2 md:grid md:grid-cols-[74%,26%]">
                <h2 className="text-[1.6em] font-semibold max-sm:mt-[-1.8em] md:px-4 md:text-[1.4em] lg:text-[1.5em] 2xl:text-[1.8em]">
                  {`Bcard powers your community’s `}
                  {<span className="text-[#08BFFF]">economic</span>} engine
                </h2>
                <div>
                  <Image
                    src={"/images/image 22.svg"}
                    className="w-[50%] sm:w-[38%] md:my-auto mix-blend-screen max-sm:mx-auto max-sm:mt-[-3.6em]  max-sm:h-[10%] md:pt-2 md:rotate-0 max-sm:rotate-90 sm:rotate-90 sm:mx-auto md:w-[74%]"
                    height={1}
                    width={1}
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-4 hidden text-center md:block ">
                Using BCard, each member of your community creates recurring
                revenue with their existing everyday spending
              </p>
            </div>

            <div className="ml-0 mr-auto lg:max-w-[27em] 2xl:max-w-[31em] gradient-bg-green-purple h-[100%] w-[100%] rounded-2xl p-5 py-[2em] shadow-md">
              <div className="md:mb-5 flex flex-col-reverse justify-between gap-2 md:grid md:grid-cols-[72%,28%]">
                <h2 className="text-[1.6em] font-semibold max-sm:mt-5 md:px-4 md:text-[1.4em] lg:text-[1.5em] 2xl:text-[1.8em]">
                  <span className="text-[#14FF00]">Fuelling</span> projects and
                  aspirations with every swipe
                </h2>
                <div className="flex justify-center gap-[1.5em] md:block mb-3 md:mb-0  sm:mt-4 sm:mb-[1.7em]">
                  <Image
                    src={"/images/arrow.svg"}
                    className="mix-blend-screen w-[22%] md:w-[60%] md:mt-[-0.5em]"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <Image
                    src={"/images/arrow.svg"}
                    className="block w-[22%] mix-blend-screen md:hidden"
                    height={1}
                    width={1}
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-4 hidden text-center md:block ">{`BCard uses payment card fees to buy your community’s tokens from a DEX, creating organic token demand.`}</p>
            </div>
          </div>
        </section>

        <section className="grid place-items-center md:mt-[25em] md:hidden">
          <button className=" z-50 mx-auto mt-5 rounded-md border border-white bg-[black] px-[2.6em] py-[0.7em]">
            Meet all of us
          </button>
        </section>

        <section className="mb-[5em] mt-[5em] grid place-items-center md:mt-[19em]">
          <h3 className="tracking-[0.7em] 2xl:text-[1.24em]">OUR PARTNERS</h3>
          <div className="center-align mt-[4em] flex w-[50%] md:justify-between gap-[4em] max-sm:flex-col justify-center">
            <Image
              src={"/images/image 15.svg"}
              className="mx-auto w-[6em] 2xl:w-[8em]"
              height={1}
              width={1}
              alt=""
            />
            <Image
              src={"/images/DAO Logo.svg"}
              className="mx-auto w-[6em] 2xl:w-[8em]"
              height={1}
              width={1}
              alt=""
            />

            <Image
              src={"/images/image 16.svg"}
              className="mx-auto w-[6em] 2xl:w-[8em]"
              height={1}
              width={1}
              alt=""
            />
          </div>
        </section>

        
      </div>
      <Footer />
    </>
  );
}
