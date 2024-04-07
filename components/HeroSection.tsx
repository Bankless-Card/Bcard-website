import { Divider } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import testImage from "../public/images/product/blog.png";

const HeroSection = () => {
  return (
    <>
      <section
        id="HeroSection"
        className=" content-center justify-center bg-white"
      >
        <div
          id="HeroContentContainer"
          className="flex h-full grow flex-col flex-wrap px-32 pt-24 pb-36"
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
        id="AboutSection"
        className="content-center justify-center bg-gray-600"
      >
        <div
          id="AboutContentContainer"
          className="flex h-full grow flex-col flex-wrap px-24 pt-36 pb-36"
        >
          <div id="AboutTextAndImageContainer" className="flex w-full flex-col">
            <h2 className="w-full pb-4 pl-32 text-4xl text-white">
              About/Mission
            </h2>
            <div id="ParagraphAndText" className="flex w-full flex-row">
              <div id="AboutLeft" className="basis-1/2 pl-32 pr-16">
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiqusmod tempor incididunt ut labore et dolore mana aliqua.
                </p>
                <p className="pt-4 pb-32">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiqusmod tempor incididunt ut labore et dolore mana aliqua.
                </p>
              </div>
              <div id="AboutRight" className="basis-1/2 pl-16">
                <div
                  id="AboutImageContainer"
                  className="relative h-full w-full"
                >
                  <Image
                    src={testImage}
                    alt="Image"
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="AboutStatistics"
            className="ml-16 flex min-h-full w-1/2 basis-1/5 rounded-2xl bg-slate-100 p-4"
          >
            <div className="w-full">
              <div className="w-full pl-4 pb-4">
                {/* es nez ka pataisit vinu par apli so for now buus goofy, pectam var kkadu svg or sum tur ielikt */}
                <span className="rounded-[50%] border-2 border-solid"></span>
                <span className="text-gray-500">Statistics</span>
              </div>
              <div className="flex flex-row">
                <span className="border-r-solid mx-4 basis-1/3 border-r-2 text-gray-500">
                  <div className="w-full font-bold">XXXX</div>
                  <div className="w-full">Customers</div>
                </span>
                <span className="border-r-solid mx-4 basis-1/3 border-r-2 text-gray-500">
                  <div className="w-full font-bold">XXX</div>
                  <div className="w-full">Years</div>
                </span>
                <span className="basis-1/3 text-gray-500">
                  <div className="w-full font-bold">XX</div>
                  <div className="w-full">Member of DAO</div>
                </span>
              </div>
            </div>
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
    </>
  );
};

export default HeroSection;
