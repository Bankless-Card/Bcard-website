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
            <div id="leftDiv" className="basis-3/5 pr-32 mr-16">
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

            <div id="rightDiv" className="basis-2/5">
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

      <section id="AboutSection" className="bg-gray-600">
        <div id="AboutContentContainer" className="flex flex-col grow px-24 pt-24 pb-36 h-full flex-wrap">
          <div id="AboutLeft">
            <h1>About/Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiqusmod tempor incididunt ut
              labore et dolore mana aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiqusmod tempor incididunt ut
              labore et dolore mana aliqua.
            </p>
          </div>
          <div id="AboutRight">
            <div id="AboutImageContainer" className="relative w-full h-full">
              <Image src={testImage} alt="Image" fill={true} style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div id="AboutStatistics"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
