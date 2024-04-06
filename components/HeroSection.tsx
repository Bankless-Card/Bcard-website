import { Divider } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import testImage from "../public/images/product/blog.png";

const HeroSection = () => {
  return (
    <>
      <section id="HeroSection" className=" bg-white justify-center content-center">
        <div id="HeroContentContainer" className="flex flex-col grow px-32 pt-24 pb-36 h-full flex-wrap">
          <div id="TextAndImageDiv" className="flex w-full flex-row">
            <div id="leftDiv" className="basis-1/2 mr-16">
              <p id="AboveH1text" className="text-xl font-medium text-gray-600">
                Welcome, hero
              </p>
              <h1 id="HeroText" className="text-7xl py-4 font-semibold text-gray-600 leading-snug">
                Lorem Ipsum simply dummy
              </h1>
              <p id="BelowH1Paragraph" className="py-4 text-gray-400 leading-relaxed">
                Welcome to BurgerBliss, where we take your cravings to a whole new level! Our mouthwatering
                burgers are made from 100% beef and are served on freshly baked buns.
              </p>
              <div id="buttons" className="py-4">
                <button className="mr-6 px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white rounded-full text-center">
                  Sign Up
                </button>
                <button className="px-4 py-2 rounded-full text-center bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-blue-400 hover:border-transparent">
                  Explore BCard
                </button>
              </div>
            </div>

            <div id="rightDiv" className="basis-1/2">
              <div id="imageContainer" className="relative w-full h-full">
                <Image src={testImage} alt="Image" fill={true} style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
          <div id="TrustedByThings" className="pt-12">
            <p className="text-xl font-medium text-gray-400">Trusted by:</p>
            <span className="pr-4 text-gray-400 text-3xl">
              <a id="temporary text inside a" href="">
                Google
              </a>
            </span>
            <span className="pr-4 text-gray-400 text-3xl">
              <a href="">Youtube</a>
            </span>
            <span className="pr-4 text-gray-400 text-3xl">
              <a href="">Facebook</a>
            </span>
          </div>
        </div>
      </section>

      <section id="AboutSection" className="bg-gray-600 justify-center content-center">
        <div id="AboutContentContainer" className="flex flex-col grow px-24 pt-36 pb-36 h-full flex-wrap">
          <div id="AboutTextAndImageContainer" className="flex flex-col w-full">
            <h2 className="text-4xl w-full text-white pb-4 pl-32">About/Mission</h2>
            <div id="ParagraphAndText" className="flex flex-row w-full">
              <div id="AboutLeft" className="basis-1/2 pl-32 pr-16">
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiqusmod tempor incididunt
                  ut labore et dolore mana aliqua.
                </p>
                <p className="pt-4 pb-32">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiqusmod tempor incididunt
                  ut labore et dolore mana aliqua.
                </p>
              </div>
              <div id="AboutRight" className="basis-1/2 pl-16">
                <div id="AboutImageContainer" className="relative w-full h-full">
                  <Image src={testImage} alt="Image" fill={true} style={{ objectFit: "contain" }} />
                </div>
              </div>
            </div>
          </div>

          <div
            id="AboutStatistics"
            className="flex w-1/2 min-h-full basis-1/5 bg-slate-100 p-4 rounded-2xl ml-16"
          >
            <div className="w-full">
              <div className="w-full pl-4 pb-4">
                {/* es nez ka pataisit vinu par apli so for now buus goofy, pectam var kkadu svg or sum tur ielikt */}
                <span className="rounded-[50%] border-2 border-solid"></span>
                <span className="text-gray-500">Statistics</span>
              </div>
              <div className="flex flex-row">
                <span className="basis-1/3 text-gray-500 border-r-2 border-r-solid mx-4">
                  <div className="w-full font-bold">XXXX</div>
                  <div className="w-full">Customers</div>
                </span>
                <span className="basis-1/3 text-gray-500 border-r-2 border-r-solid mx-4">
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

      <section id="ValuesSection" className="bg-white pt-12 justify-center content-center">
        <div id="ValuesContentContainer" className="flex flex-col h-full grow">
          <div id="V1ContainerDiv" className="flex flex-row">
            <div id="Left1" className="basis-1/2 bg-black">
              <div id="imgCont1" className="relative w-full h-full">
                <Image src={testImage} alt="Image" fill={true} style={{ objectFit: "contain", scale: "1" }} />
              </div>
            </div>
            <div id="Right1" className="basis-1/2 bg-white">
              <h3 className="text-gray-900 pb-8">Value proposition 1</h3>
              <p className="text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsum iste, culpa tempora
                quos deleniti optio, commodi libero officia assumenda voluptatum numquam et reiciendis. Vel
                nemo facilis veritatis dicta, aut fuga perspiciatis.
              </p>
            </div>
          </div>
          <div id="V2ContainerDiv" className="flex-row">
            <div id="Left2" className="basis-1/2 bg-white"></div>
            <div id="Right2" className="basis-1/2 bg-black"></div>
          </div>
          <div id="V3ContainerDiv" className="flex-row">
            <div id="Left3" className="basis-1/2 bg-black"></div>
            <div id="Right3" className="basis-1/2 bg-white"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
