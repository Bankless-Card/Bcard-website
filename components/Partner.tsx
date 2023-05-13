import React from 'react'
import Image from "next/image";
import Link from "next/link";
import opolis from "../public/images/partners/opolis.svg";
import ityroot from "../public/images/partners/ityroot_dao.svg";
import hdao from "../public/images/partners/hdao.svg";
import daoPunk from "../public/images/partners/dao_punk.svg";
import dao from "../public/images/partners/dao.svg";
import styles from "@/styles/partner.module.css"

const Partner = () => {
  return (
    <>
      <section className={`${styles['ellipse']} mt-[2rem] bg-[#171717] py-[3rem] relative`}>
        <h1 className="text-center font-semibold text-[2rem] leading-[2.421rem] relative">
          Our Partners
        </h1>
        <div className='flex justify-center items-center gap-[9%] p-[3%]'>
            <div>
                <Image
                    priority
                    src={opolis}
                    className=""
                    alt="bankless card"
                />
            </div>
            <div>
                <Image
                    priority
                    src={ityroot}
                    className=""
                    alt="bankless card"
                />
            </div>
            <div>
                <Image
                    priority
                    src={hdao}
                    className=""
                    alt="bankless card"
                />
            </div>
            <div>
                <Image
                    priority
                    src={daoPunk}
                    className=""
                    alt="bankless card"
                />
            </div>
            <div>
                <Image
                    priority
                    src={dao}
                    className=""
                    alt="bankless card"
                />
            </div>
        </div>
      </section>
    </>
  )
}

export default Partner