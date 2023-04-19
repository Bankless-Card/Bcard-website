import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/ContactUs.module.css'

const ContactUs = () => {
  return (
    <>
      <section className="mt-[7rem]">
        <h1 className="text-center font-semibold text-[2rem] leading-[2.421rem] relative">
          Contact Us
        </h1>
        <form className="flex flex-col gap-[3rem] mt-[3rem] relative">
          <div className="flex justify-center items-center gap-[3rem] max-[822px]:justify-center max-[822px]:items-center max-[822px]:gap-0 max-[767px]:flex-col">
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px] relative">Name</label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
              />
            </div>
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px] relative">Discord Handle</label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-[3rem] max-[822px]:justify-center max-[822px]:items-center max-[822px]:gap-0 max-[767px]:flex-col">
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px] relative">
                Email Address <span className="text-[#CA0814] relative">*</span>
              </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
              />
            </div>
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="relative max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px]">Organization </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <label>Write a message</label>
              <textarea className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[49.5rem] h-[9rem] bg-inherit  max-[822px]:max-w-[90%] "></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-[22.625rem] h-[2.719rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.438rem]">
            Submit
            </button>
          </div>
          <div className={`${styles['ellipse3']}`}></div>
        </form>
      </section>
    </>
  )
}

export default ContactUs