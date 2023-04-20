import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ContactUs from "components/ContactUs";
import styles from '@/styles/ContactUs.module.css'


const Contact = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className={`${styles['ellipse1']}`}></div>
      <div className={`${styles['ellipse2']}`}></div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
