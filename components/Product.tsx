import React from 'react'
import Image from "next/image";
import Link from "next/link";
import internet from "../public/images/product/internet.png";
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
                    src={internet}
                    className="w-[100%]"
                    alt="bankless card"
                />
            </div>
            <div className="flex flex-col px-[2rem] max-[767px]:px-[1rem] pt-[0.5rem] gap-[1.5rem]">
                <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-2 border-purple-500">
                    <h3 className="text-[1.4rem] font-semibold">We Made The Internet Hard Again</h3>
                    <p className="text-[1rem]">Web3 is not designed for everyday users. We are here to change that, by building an Internet that is truly equitable for all.</p>
                </div>
                <Link href="https://banklesscard.mirror.xyz/eh3a3yf0tm2gD3UTjTFb351xB6AdAct526dsGuVmigY" className="flex justify-start items-center gap-[0.5rem] pb-[1rem]">
                    <span className="text-[1rem]">View</span>
                    <Image
                        priority
                        src={linkIcon}
                        className="w-[15px]"
                        alt="bankless card"
                    />
                </Link>
            </div>
        </div>
        <div className="bg-[#313131] rounded-[20px] backdrop-blur-[2px] h-[100%] w-[100%]">
            <div className="w-[100%] relative box-border">
                <Image
                    priority
                    src={taxman}
                    className="w-[100%]"
                    alt="bankless card"
                />
            </div>
            <div className="flex flex-col px-[2rem] max-[767px]:px-[1rem] pt-[0.5rem] gap-[1.5rem]">
                <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-2 border-purple-500">
                    <h3 className="text-[1.4rem] font-semibold">Taxman: The DAO Income Tax Helper</h3>
                    <p className="text-[1rem]">Fast, free and built for DAO Contributors, Taxman is a quick and easy tool to help you calculate your DAO income taxes.</p>
                </div>
                <Link href="https://taxman.justplay.cafe/" className="flex justify-start items-center gap-[0.5rem] pb-[1rem]">
                    <span className="text-[1rem]">View</span>
                    <Image
                        priority
                        src={linkIcon}
                        className="w-[15px]"
                        alt="bankless card"
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
                    alt="bankless card"
                />
            </div>
            <div className="flex flex-col px-[2rem] max-[767px]:px-[1rem] pt-[0.5rem] gap-[1.5rem]">
                <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-2 border-purple-500">
                    <h3 className="text-[1.4rem] font-semibold">Bankless Card Vault: The Password Manager for DAOs</h3>
                    <p className="text-[1rem]">The Bankless Card Vault allows DAOs, big and small, to safely share passwords no matter the number of contributors.</p>
                </div>
                <Link href=" https://vault.banklesscard.xyz" className="flex justify-start items-center gap-[0.5rem] pb-[1rem]">
                    <span className="text-[1rem]">View</span>
                    <Image
                        priority
                        src={linkIcon}
                        className="w-[15px]"
                        alt="bankless card"
                    />
                </Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Product