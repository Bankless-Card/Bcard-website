import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "@/styles/thank-you.module.css"

import envelope from "../../public/images/envelope.png";

const Contact = () => {
  return (
		<>
			<Navbar />
			<div className="flex justify-center items-center flex-col gap-[2rem] p-[4rem] relative">
				<div className={`${styles["ellipse1"]}`}></div>
				<div className="text-[20px] font-bold text-center">
					Thank you for joining our waiting list! We have sent you a
					confirmation email.
				</div>
				<Image
					priority
					src={envelope}
					alt="Envelope"
					className=""
					height={300}
					width={300}
				/>
				<div className="leading-[2rem] text-lg text-center px-[1rem]  md:px-[3.5rem] py-[1rem]">
					Keep an eye on your inbox for regular updates on our product!
					Meanwhile, follow BCard on our social media to learn about other
					exciting stuff our vibrant community has in store!
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
