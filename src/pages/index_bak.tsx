import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "components/Navbar";
import LandingPage from "./landingpage";
import HeroSectionV2 from "components/HeroSectionV2";

export default function Home() {
  return (
    <>
      <Head>
        <title>BCard Community</title>
        <meta
          name="description"
          content="Support your community with every swipe!"
        />
      </Head>

      <Navbar />
      <HeroSectionV2 />
      {/* <LandingPage /> */}
    </>
  );
}
