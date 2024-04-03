import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import styles from "@/styles/for-daos.module.css"

import daoContributor from "../../public/images/daoContributor.svg";
import daoLeader from "../../public/images/daoLeader.svg";
import newWeb3 from "../../public/images/newWeb3.svg";


const ForDaos = () => {
  return (
		<div>
			<Navbar />
			<section>
				<div className={`${styles["ellipse1"]}`}></div>
				<div className={`${styles["ellipse2"]}`}></div>
				<h1 className="text-[2.25rem] leading-[2.723rem] font-semibold text-center max-[767px]:p-[30px] relative">
					Give your community a way to support your cause.
				</h1>
				<p className="text-lg leading-[1.361rem] text-center font-normal mt-[3rem] max-w-[49.5rem] mx-auto max-[767px]:p-[30px] relative">
					With BCard, web3 communities get monthly recurring revenue and an easy 
					way to onboard new contributors.  This gives communities the freedom to focus on 
					their mission rather than writing grants.
				</p>
				<div className="mt-[3rem] flex justify-center gap-[3rem] p-[30px] max-[767px]:flex-col max-[767px]:justify-center max-[767px]:items-center  max-[767px]:mb-0 relative">
					<div className="max-w-[23.875rem] p-[2rem]  border-4 border-purple-600 border-gradient-to-r">
						<h1 className="font-medium text-2xl leading-[1.8rem] text-center">
							Support your tokenomics
						</h1>
						<hr className="w-[6rem] my-[1rem] mx-auto h-1 bg-gradient-to-r from-purple-600 to-indigo-600" />
						<p className="text-lg leading-[1.361rem] text-center font-normal">
							We reward fiat spending with your token, increasing its value over
							time.
						</p>
					</div>

					<div className="max-w-[23.875rem] p-[2rem]  border-4 border-purple-600 border-gradient-to-r">
						<h1 className="font-medium text-2xl leading-[1.8rem] text-center">
							Easy Onboarding
						</h1>
						<hr className="w-[6rem] my-[1rem] mx-auto h-1 bg-gradient-to-r from-purple-600 to-indigo-600" />
						<p className="text-lg leading-[1.361rem] text-center font-normal">
							No complicated token buying from DEXes for new members.{" "}
						</p>
					</div>
				</div>

				<div className="mt-[8rem] flex justify-center gap-[3.6rem] max-[767px]:flex-col max-[767px]:justify-center max-[767px]:items-center  max-[767px]:mb-0 relative">
					<div>
						<div>
							<Image
								priority
								src={daoContributor}
								className=""
								height={256}
								width={232}
								alt="dao contributor"
							/>
						</div>
						<h1 className="font-medium text-lg leading-7 text-center max-[767px]:p-[20px]">
							Web3 Contributors
						</h1>
						<p className="text-sm leading-6 text-center max-w-[14.5rem]">
							An easy way to support your DAO through your existing, everyday spending.
						</p>
					</div>
					<div>
						<div>
							<Image
								priority
								src={daoLeader}
								className=""
								height={256}
								width={232}
								alt="dao leader"
							/>
						</div>
						<h1 className="font-medium text-lg leading-7 text-center max-[767px]:p-[20px]">
							Community Leaders
						</h1>
						<p className="text-sm leading-6 text-center max-w-[14.5rem]">
						Fund your community by giving your fans a way to support you without changing behaviour.
						</p>
					</div>
					<div>
						<div>
							<Image
								priority
								src={newWeb3}
								className=""
								height={256}
								width={232}
								alt="dao contributor"
							/>
						</div>
						<h1 className="font-medium text-lg leading-7 text-center max-[767px]:p-[20px]">
							New to Web3?
						</h1>
						<p className="text-sm leading-6 text-center max-w-[14.5rem]">
						Learn key web3 concepts via a simple and educational mobile app.
						</p>
					</div>
				</div>

				<div className="overflow-hidden mt-[10rem]">
					<h1 className="font-medium text-2xl leading-[1.813rem] text-center max-w-[49.5rem] mx-auto max-[767px]:hidden">
						Are you a Web3 advocate, and want to reward users with perks and
						other incentives? We’d love to hear from you!
					</h1>
				</div>

				<ContactUs />
				<Footer />
			</section>
		</div>
	);
};

export default ForDaos;
