import React from "react";

import Image from "next/image";
import testImage from "../public/images/product/blog.png";
import BcardImage from "../public/images/NewImages/BcardExample.png";

const HeroSectionV2 = () => {
  return (
    <>
      <section
        id="HeroSection"
        className=" content-center justify-center bg-white"
      >
        <div
          id="HeroContentContainer"
          className="flex h-full grow flex-col flex-wrap px-32 pb-36 pt-24"
        >
          <div id="TextAndImageDiv" className="flex w-full flex-row">
            <div id="leftDiv" className="mr-16 basis-1/2">
              <p id="AboveH1text" className="text-xl font-medium text-gray-600">
                Welcome, hero
              </p>
              <h1
                id="HeroText"
                className="py-4 text-7xl font-semibold leading-snug text-gray-600"
              >
                Lorem Ipsum simply dummy
              </h1>
              <p
                id="BelowH1Paragraph"
                className="py-4 leading-relaxed text-gray-400"
              >
                Welcome to BurgerBliss, where we take your cravings to a whole
                new level! Our mouthwatering burgers are made from 100% beef and
                are served on freshly baked buns.
              </p>
              <div id="buttons" className="py-4">
                <button className="mr-6 rounded-full bg-blue-300 px-4 py-2 text-center text-white hover:bg-blue-400">
                  Sign Up
                </button>
                <button className="rounded-full border border-blue-400 bg-transparent px-4 py-2 text-center font-semibold text-blue-400 hover:border-transparent hover:bg-blue-400 hover:text-white">
                  Explore BCard
                </button>
              </div>
            </div>

            <div id="rightDiv" className="basis-1/2">
              <div id="imageContainer" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div id="TrustedByThings" className="pt-12">
            <p className="text-xl font-medium text-gray-400">Trusted by:</p>
            <span className="pr-4 text-3xl text-gray-400">
              <a id="temporary text inside a" href="">
                Google
              </a>
            </span>
            <span className="pr-4 text-3xl text-gray-400">
              <a href="">Youtube</a>
            </span>
            <span className="pr-4 text-3xl text-gray-400">
              <a href="">Facebook</a>
            </span>
          </div>
        </div>
      </section>

      <section
        id="HorizontalCardsSection"
        className="content-center justify-center bg-black"
      >
        <div id="HorizCardContaner" className="mx-32 flex gap-x-8">
          <div id="HorizCard1" className="my-4  basis-1/3 bg-slate-500 p-8">
            <div id="HCardImgContaner" className="relative h-64">
              {" "}
              <Image
                src={testImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="mx-auto text-3xl font-bold">
              The <span className="text-[#fc5710]">community</span> owned card!
            </h3>
            <p className="mt-4">
              Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
              cards, you have a say in how we build the future.
            </p>
          </div>

          <div id="HorizCard2" className="my-4 basis-1/3 bg-slate-500 p-8">
            <div id="HCardImgContaner" className="relative h-64">
              {" "}
              <Image
                src={testImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-3xl font-bold">
              Support your <span className="text-[#13b5ec]">favorite</span>{" "}
              communities
            </h3>
            <p>
              Every time you use a card, 1-2% Of the purchase price goes to a
              bank. Bankless Card redirects some of that fee to your favorite
              community.
            </p>
          </div>

          <div id="HorizCard3" className="my-4 basis-1/3 bg-slate-500 p-8">
            <div id="HCardImgContaner" className="relative h-64">
              {" "}
              <Image
                src={testImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-3xl font-bold ">
              Easily <span className="text-[#27ffa4]">onboard</span> new members
            </h3>
            <p>
              With our easy-to-use mobile app, you can onboard new friends into
              your community with a simple download.
            </p>
          </div>
        </div>
      </section>

      <section
        id="ValuesSection"
        className="content-center justify-center bg-white py-12"
      >
        <div id="ValuesContentContainer" className="flex h-full grow flex-col">
          <div id="V1ContainerDiv" className="flex flex-row">
            <div id="Left1" className="basis-1/2 bg-black">
              <div id="imgCont1" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain", scale: "1" }}
                />
              </div>
            </div>
            <div id="Right1" className="basis-1/2 bg-white py-48 pl-24 pr-60">
              <h3 className="pb-8 text-xl font-bold text-gray-900">
                Value proposition 1
              </h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio ipsum iste, culpa tempora quos deleniti optio,
                commodi libero officia assumenda voluptatum numquam et
                reiciendis. Vel nemo facilis veritatis dicta, aut fuga
                perspiciatis.
              </p>
            </div>
          </div>
          <div id="V2ContainerDiv" className="flex flex-row">
            <div id="Left2" className="basis-1/2 bg-white py-48 pl-24 pr-60">
              <h3 className="pb-8 text-xl font-bold text-gray-900">
                Value proposition 1
              </h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio ipsum iste, culpa tempora quos deleniti optio,
                commodi libero officia assumenda voluptatum numquam et
                reiciendis. Vel nemo facilis veritatis dicta, aut fuga
                perspiciatis.
              </p>
            </div>
            <div id="Right2" className="basis-1/2 bg-black">
              <div id="imgCont2" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain", scale: "1" }}
                />
              </div>
            </div>
          </div>
          <div id="V3ContainerDiv" className="flex flex-row">
            <div id="Left3" className="basis-1/2 bg-black">
              <div id="imgCont3" className="relative h-full w-full">
                <Image
                  src={testImage}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain", scale: "1" }}
                />
              </div>
            </div>
            <div id="Right3" className="basis-1/2 bg-white py-48 pl-24 pr-60">
              <h3 className="pb-8 text-xl font-bold text-gray-900">
                Value proposition 1
              </h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio ipsum iste, culpa tempora quos deleniti optio,
                commodi libero officia assumenda voluptatum numquam et
                reiciendis. Vel nemo facilis veritatis dicta, aut fuga
                perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="CardBenefitsSection"
        className="content-center justify-center bg-slate-500 py-12"
      >
        <div
          id="BenefitsContentContainer"
          className="mx-48 my-12 flex content-center justify-center bg-gradient-to-r from-[#000000]"
        >
          <div id="LeftSideDiv" className="basis-1/2 py-8 pl-12">
            <div id="benefitContainer1" className="mb-4 flex items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 42 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.3101 28.8651C31.2682 29.4158 31.6807 29.8962 32.2314 29.9381C32.7821 29.98 33.2625 29.5675 33.3044 29.0168L31.3101 28.8651ZM17.9582 44.363C18.5089 44.3211 18.9214 43.8407 18.8795 43.29C18.8376 42.7393 18.3572 42.3268 17.8065 42.3687L17.9582 44.363ZM16.7681 11.3972C16.3707 11.0136 15.7376 11.0248 15.3541 11.4221C14.9705 11.8195 14.9817 12.4525 15.379 12.8361L16.7681 11.3972ZM21.5795 30.037C21.5188 30.5859 21.9146 31.0801 22.4635 31.1408C23.0125 31.2015 23.5067 30.8057 23.5673 30.2567L21.5795 30.037ZM16.648 44.1337C17.0468 44.5157 17.6799 44.5021 18.0619 44.1033C18.444 43.7045 18.4304 43.0715 18.0315 42.6894L16.648 44.1337ZM18.0315 12.7807C18.4304 12.3987 18.444 11.7657 18.0619 11.3668C17.6799 10.968 17.0468 10.9544 16.648 11.3365L18.0315 12.7807ZM31.5855 44.0584C31.9761 44.4489 32.6092 44.4489 32.9998 44.0584C33.3903 43.6678 33.3903 43.0347 32.9998 42.6442L31.5855 44.0584ZM30.4433 40.0877C30.0528 39.6972 29.4196 39.6972 29.0291 40.0877C28.6385 40.4782 28.6385 41.1114 29.0291 41.5019L30.4433 40.0877ZM16.6765 42.4115C8.57088 42.4115 2 35.8407 2 27.7351H0C0 36.9452 7.46631 44.4115 16.6765 44.4115V42.4115ZM2 27.7351C2 19.6295 8.57088 13.0586 16.6765 13.0586V11.0586C7.46631 11.0586 0 18.5249 0 27.7351H2ZM16.6765 13.0586C24.7821 13.0586 31.3529 19.6295 31.3529 27.7351H33.3529C33.3529 18.5249 25.8866 11.0586 16.6765 11.0586V13.0586ZM31.3529 27.7351C31.3529 28.1155 31.3385 28.4923 31.3101 28.8651L33.3044 29.0168C33.3366 28.5936 33.3529 28.1661 33.3529 27.7351H31.3529ZM17.8065 42.3687C17.4337 42.3971 17.0569 42.4115 16.6765 42.4115V44.4115C17.1076 44.4115 17.535 44.3952 17.9582 44.363L17.8065 42.3687ZM15.379 12.8361C19.2811 16.6029 21.7059 21.8849 21.7059 27.7351H23.7059C23.7059 21.3202 21.0444 15.5252 16.7681 11.3972L15.379 12.8361ZM21.7059 27.7351C21.7059 28.5135 21.663 29.2815 21.5795 30.037L23.5673 30.2567C23.6589 29.4284 23.7059 28.587 23.7059 27.7351H21.7059ZM18.0315 42.6894C14.0957 38.9191 11.6471 33.6139 11.6471 27.7351H9.64706C9.64706 34.1815 12.3348 40.0018 16.648 44.1337L18.0315 42.6894ZM11.6471 27.7351C11.6471 21.8562 14.0957 16.551 18.0315 12.7807L16.648 11.3365C12.3348 15.4683 9.64706 21.2887 9.64706 27.7351H11.6471ZM1 28.7351H32.3529V26.7351H1V28.7351ZM32.9998 42.6442L30.4433 40.0877L29.0291 41.5019L31.5855 44.0584L32.9998 42.6442ZM30.1471 37.3821C30.1471 39.4938 28.4352 41.2057 26.3235 41.2057V43.2057C29.5398 43.2057 32.1471 40.5984 32.1471 37.3821H30.1471ZM26.3235 41.2057C24.2119 41.2057 22.5 39.4938 22.5 37.3821H20.5C20.5 40.5984 23.1073 43.2057 26.3235 43.2057V41.2057ZM22.5 37.3821C22.5 35.2704 24.2119 33.5586 26.3235 33.5586V31.5586C23.1073 31.5586 20.5 34.1659 20.5 37.3821H22.5ZM26.3235 33.5586C28.4352 33.5586 30.1471 35.2704 30.1471 37.3821H32.1471C32.1471 34.1659 29.5398 31.5586 26.3235 31.5586V33.5586Z"
                  fill="white"
                />
                <path
                  d="M33.7042 12.1193C33.1871 12.1193 32.7255 12.0213 32.3192 11.8253C31.913 11.6264 31.5906 11.3551 31.3519 11.0114C31.1161 10.6648 30.994 10.267 30.9854 9.81818H31.5266C31.5352 10.1733 31.636 10.4872 31.8292 10.7599C32.0224 11.0298 32.2809 11.2415 32.6048 11.3949C32.9315 11.5483 33.2951 11.625 33.6957 11.625C34.1303 11.625 34.511 11.5398 34.8377 11.3693C35.1673 11.1989 35.4244 10.9687 35.609 10.679C35.7937 10.3864 35.886 10.0597 35.886 9.69886C35.886 9.3125 35.7852 8.97443 35.5835 8.68466C35.3817 8.39205 35.1005 8.16477 34.7397 8.00284C34.3789 7.83807 33.9599 7.75568 33.4826 7.75568H33.1587V7.26136H33.4826C33.8888 7.26136 34.2525 7.1875 34.5735 7.03977C34.8945 6.8892 35.1474 6.67756 35.332 6.40483C35.5195 6.1321 35.6133 5.80966 35.6133 5.4375C35.6133 5.08807 35.5323 4.77841 35.3704 4.50852C35.2085 4.23864 34.984 4.02699 34.6971 3.87358C34.413 3.72017 34.0792 3.64347 33.6957 3.64347C33.3263 3.64347 32.9911 3.71875 32.69 3.86932C32.3917 4.01989 32.1545 4.23153 31.9783 4.50426C31.8022 4.77699 31.7127 5.09375 31.7099 5.45455H31.1857C31.1914 5.00284 31.305 4.60369 31.5266 4.2571C31.7511 3.91051 32.0508 3.64062 32.4258 3.44744C32.8036 3.25142 33.2298 3.15341 33.7042 3.15341C34.1871 3.15341 34.6104 3.25426 34.9741 3.45597C35.3406 3.65767 35.6246 3.9304 35.8263 4.27415C36.0309 4.6179 36.1332 5 36.1332 5.42045C36.1332 5.92614 35.9925 6.35937 35.7113 6.72017C35.4329 7.07812 35.055 7.3267 34.5778 7.46591V7.51278C35.1431 7.63778 35.5906 7.89489 35.9201 8.28409C36.2496 8.6733 36.4144 9.14489 36.4144 9.69886C36.4144 10.1534 36.2979 10.5639 36.065 10.9304C35.832 11.2969 35.511 11.5866 35.1019 11.7997C34.6957 12.0128 34.2298 12.1193 33.7042 12.1193Z"
                  fill="white"
                />
              </svg>

              <p id="benefit1">Your bridge to web3</p>
            </div>
            <div id="benefitContainer2" className="mb-4 flex items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 31 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.61945 13.3569C7.05587 14.5 4.87716 16.3657 3.34729 18.7279C1.81743 21.0902 1.00207 23.8476 1 26.6661V31.5235C1 33.2412 1.67897 34.8885 2.88753 36.1031C4.0961 37.3177 5.73527 38 7.44444 38H23.5556C25.2647 38 26.9039 37.3177 28.1125 36.1031C29.321 34.8885 30 33.2412 30 31.5235V26.6661C29.9966 22.8027 28.4667 19.0987 25.7467 16.3685C24.4927 15.0977 23.0114 14.076 21.3806 13.3569M9.61945 13.3569C11.4692 12.5244 13.4732 12.094 15.5 12.094C17.5268 12.094 19.5308 12.5244 21.3806 13.3569M9.61945 13.3569L8.29833 4.7432C8.21221 4.17882 8.2761 3.6016 8.48353 3.07004C8.69096 2.53848 9.03455 2.07149 9.47948 1.71641C9.9244 1.36133 10.4548 1.13079 11.017 1.04816C11.5792 0.965527 12.1531 1.03374 12.6806 1.24589L14.2917 1.89354C15.0572 2.19996 15.9105 2.19996 16.6761 1.89354L18.2872 1.24589C18.8162 1.02598 19.394 0.95168 19.9611 1.03065C20.5282 1.10961 21.0641 1.33899 21.5137 1.69518C21.9633 2.05137 22.3103 2.52151 22.5191 3.05722C22.7279 3.59294 22.7909 4.17489 22.7017 4.7432L21.3806 13.3569M18.7222 20.1896H14.6944C14.0535 20.1896 13.4388 20.4455 12.9856 20.901C12.5324 21.3565 12.2778 21.9742 12.2778 22.6183C12.2778 23.2625 12.5324 23.8802 12.9856 24.3357C13.4388 24.7911 14.0535 25.047 14.6944 25.047H16.3056C16.9465 25.047 17.5612 25.3029 18.0144 25.7584C18.4676 26.2138 18.7222 26.8316 18.7222 27.4757C18.7222 28.1198 18.4676 28.7376 18.0144 29.193C17.5612 29.6485 16.9465 29.9044 16.3056 29.9044H12.2778M15.5 29.9044V31.5235M15.5 18.5705V20.1896"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p id="benefit2">Support while spending</p>
            </div>
            <div id="benefitContainer3" className="mb-4 flex items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5 10.5H10.5C7.18629 10.5 4.5 13.1863 4.5 16.5V31.5C4.5 34.8137 7.18629 37.5 10.5 37.5H37.5C40.8137 37.5 43.5 34.8137 43.5 31.5V16.5C43.5 13.1863 40.8137 10.5 37.5 10.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M43.5 19.5H4.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M31.5 31.5H37.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p id="benefit3">Card for the digital nomad</p>
            </div>
            <div id="benefitContainer4" className="mb-4 flex items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 43 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9231 29.6364H23.0769M42 13.7273C42 13.7273 36.0877 14.0714 33.7884 7.27512C32.6631 3.94898 30.0629 1.00002 26.5793 1.00001C22.8362 1.00001 20.1638 1 16.4207 1C12.9371 0.999999 10.3369 3.94896 9.21159 7.27509C6.9123 14.0714 1 13.7273 1 13.7273C1 13.7273 12.3889 16.9091 21.5 16.9091C35.1667 16.9091 42 13.7273 42 13.7273ZM37.2692 29.6364C37.2692 33.1509 34.4452 36 30.9615 36C27.4779 36 24.6538 33.1509 24.6538 29.6364C24.6538 26.1218 27.4779 23.2727 30.9615 23.2727C34.4452 23.2727 37.2692 26.1218 37.2692 29.6364ZM18.3462 29.6364C18.3462 33.1509 15.5221 36 12.0385 36C8.55482 36 5.73077 33.1509 5.73077 29.6364C5.73077 26.1218 8.55482 23.2727 12.0385 23.2727C15.5221 23.2727 18.3462 26.1218 18.3462 29.6364Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <p id="benefit4">Safety in web3 payments</p>
            </div>
          </div>
          <div id="RightSideDiv" className="h-full basis-1/2">
            <div id="BenefitsImgContainer" className="relative">
              <Image
                src={BcardImage}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain", scale: "1" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionV2;
