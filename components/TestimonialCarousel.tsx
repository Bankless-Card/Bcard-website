import { useEffect } from "react";
import Image from "next/image";
import Glide from "@glidejs/glide";
import "tailwindcss/tailwind.css";
import styles from '@/styles/TestimonialCarousel.module.css'

import quote from "../public/images/quote.svg";

const TestimonialCarousel = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 4,
      gap: 20,
      autoplay: 5000,
      hoverpause: true,
      breakpoints: {
        1024: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();
  }, []);

  return (
		<div className="glide">
			<div
				className="glide__track"
				data-glide-el="track"
			>
				<ul className="glide__slides ">
					<li className="glide__slide">
						<div
							className={`border-2 border-[#7776BC] rounded-t-[12.5rem] p-[2rem] flex flex-col items-center gap-[2rem] h-[20rem] ${styles["make-contain"]}`}
						>
							<Image
								priority
								src={quote}
								className=""
								height={14.97}
								width={20.06}
								alt=""
							/>
							<p className="max-w-[18.75rem] px-[1rem]">
								It was very easy and intuitive for me to use the BCard
								app. I think it’s a great entry point for new web3 users to
								educate themselves and participate in their communities.
							</p>
							<p className="font-bold">SprinklesForWinners</p>
						</div>
					</li>
					<li className="glide__slide">
						<div
							className={`border-2 border-[#7776BC] rounded-t-[12.5rem] p-[2rem] flex flex-col items-center gap-[2rem] h-[20rem] ${styles["make-contain"]}`}
						>
							<Image
								priority
								src={quote}
								className=""
								height={14.97}
								width={20.06}
								alt=""
							/>
							<p className="max-w-[18.75rem] px-[1rem]">
								The BCard app provides ease and accessibility to people
								new to web3. Communities should totally use it to onboard their
								users. I was very impressed with the simplistic and yet elegant
								design.
							</p>
							<p className="font-bold">Jasu</p>
						</div>
					</li>
					<li className="glide__slide">
						<div
							className={`border-2 border-[#7776BC] rounded-t-[12.5rem] p-[2rem] flex flex-col items-center gap-[2rem] h-[20rem] ${styles["make-contain"]}`}
						>
							<Image
								priority
								src={quote}
								className=""
								height={14.97}
								width={20.06}
								alt=""
							/>
							<p className="max-w-[18.75rem] px-[1rem]">
								As a new web3 user, this is a super easy way for me to onboard
								into my community without going through the entire hassle of
								fiat on-ramping. I can just swipe with a card and get rewards
								easily.
							</p>
							<p className="font-bold">Unionist</p>
						</div>
					</li>
					<li className="glide__slide">
						<div
							className={`border-2 border-[#7776BC] rounded-t-[12.5rem] p-[2rem] flex flex-col items-center gap-[2rem] h-[20rem] ${styles["make-contain"]}`}
						>
							<Image
								priority
								src={quote}
								className=""
								height={14.97}
								width={20.06}
								alt=""
							/>
							<p className="max-w-[18.75rem] px-[1rem]">
								Very impressed with the thought went into the design of the
								BCard app. Makes it simple for anyone to join web3 and
								contribute towards missions they care about.
							</p>
							<p className="font-bold">IsraelRex</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default TestimonialCarousel;  