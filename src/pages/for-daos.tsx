import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";

const ForDaos = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h1>Give your community a way to support your cause.</h1>
        <p>
          BanklessDAO is proud to be partnering with other DAOs, creating a
          community card for members to earn rewards in their native tokens with
          every swipe.
        </p>
      </section>
    </div>
  );
};

export default ForDaos;
