import React from 'react'
import Image from "next/image";
import Link from "next/link";
import blog from "../public/images/product/blog.png";
import linkIcon from "../public/images/linkIcon.svg";
import taxman from "../public/images/product/taxman.svg";
import vault from "../public/images/product/vault.svg";

const Product = () => {
  return (
    <>
      <section className="grid grid-cols-3 max-[767px]:grid-cols-1 items-center justify-center gap-[2.5rem] mt-[2rem] px-[4rem] py-[3rem] relative">
        <div className="bg-[#313131] rounded-[20px] backdrop-blur-[2px] h-[100%] w-[100%]">
            <div className="w-[100%] relative box-border">
                <Image
                    priority
                    src={taxman}
                    className="w-[100%]"
                    alt="BCard"
                />
            </div>
            <div className="flex flex-col px-[2rem] max-[767px]:px-[1rem] pt-[0.5rem] gap-[1.5rem]">
                <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-2 border-purple-500">
                    <h3 className="text-[1.4rem] font-semibold">Taxman: The Web3 Income Tax Helper</h3>
                    <p className="text-[1rem]">Fast, free and built for web3 Contributors, Taxman is a quick and easy tool to help you calculate your web3 income taxes.</p>
                </div>
                <Link href="https://taxman.getbcard.io/" className="flex justify-start items-center gap-[0.5rem] pb-[1rem]">
                    <span className="text-[1rem]">View</span>
                    <Image
                        priority
                        src={linkIcon}
                        className="w-[15px]"
                        alt="BCard"
                    />
                </Link>
            </div>
        </div>
        <div className="bg-[#313131] rounded-[20px] backdrop-blur-[2px] h-[100%] w-[100%]">
            <div className="w-[100%] relative box-border">
                <Image
                    priority
                    src={vault}
                    className="w-[100%]"
                    alt="BCard"
                />
            </div>
            <div className="flex flex-col px-[2rem] max-[767px]:px-[1rem] pt-[0.5rem] gap-[1.5rem]">
                <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-2 border-purple-500">
                    <h3 className="text-[1.4rem] font-semibold">BCard Vault: The Password Manager for Communities</h3>
                    <p className="text-[1rem]">The BCard Vault allows web3 communities, big or small, to safely share passwords.</p>
                </div>
                <Link href="https://vault.banklesscard.xyz/" className="flex justify-start items-center gap-[0.5rem] pb-[1rem]">
                    <span className="text-[1rem]">View</span>
                    <Image
                        priority
                        src={linkIcon}
                        className="w-[15px]"
                        alt="BCard"
                    />
                </Link>
            </div>
        </div>
        <div className="bg-[#313131] rounded-[20px] backdrop-blur-[2px] h-[100%] w-[100%]">
            <div className="w-[100%] relative box-border">
                <Image
                    priority
                    src={blog}
                    className="w-[100%]"
                    alt="BCard"
                />
            </div>
            <div className="flex flex-col px-[2rem] max-[767px]:px-[1rem] pt-[0.5rem] gap-[1.5rem]">
                <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-2 border-purple-500">
                    <h3 className="text-[1.4rem] font-semibold">Our Blog: Musings on our Ethos</h3>
                    <p className="text-[1rem]">We are more than a product, we are driven by purpose.  Read our blog to learn more about our philosophy.</p>
                </div>
                <Link href="https://banklesscard.mirror.xyz/" className="flex justify-start items-center gap-[0.5rem] pb-[1rem]">
                    <span className="text-[1rem]">View</span>
                    <Image
                        priority
                        src={linkIcon}
                        className="w-[15px]"
                        alt="BCard"
                    />
                </Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Product