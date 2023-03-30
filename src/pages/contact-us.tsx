import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ContactUs from "components/ContactUs";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
