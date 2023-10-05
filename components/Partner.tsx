import React from 'react'
import Image from "next/image";
import Link from "next/link";
import daoPunk from "../public/images/partners/dao_punk.svg";
import dao from "../public/images/partners/dao.svg";
import nouns from "../public/images/partners/nouns.svg";
import styles from "@/styles/partner.module.css"

const Partner = () => {
  return (
    <>
      <section className={`${styles['ellipse']} flex flex-col gap-[4rem] mt-[2rem] min-[767px]:bg-[#171717] py-[3rem] relative`}>
        <h1 className="text-center font-semibold text-[2rem] leading-[2.421rem] relative">
          Our Partners
        </h1>
        <div className='flex max-[767px]:flex-col justify-center items-center min-[767px]:gap-[9%] max-[767px]:gap-[4rem] p-[3%]'>
            <div className="relative z-50">
                <Image
                    priority
                    src={daoPunk}
                    className=""
                    alt="DAOpunks"
                />
            </div>
            <div className="relative z-50">
                <Image
                    priority
                    src={dao}
                    className=""
                    alt="BanklessDAO"
                />
            </div>
            <div className="relative z-50">
                <Image
                    priority
                    src={nouns}
                    className=""
                    alt="Nouns DAO"
                />
            </div>
        </div>
      </section>
    </>
  )
}

export default Partner