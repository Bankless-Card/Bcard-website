import React from 'react'
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
         <section className="mt-[7rem]">
        <h1 className="text-center font-semibold text-[2rem] leading-[2.421rem]">
          Contact Us
        </h1>
        <form className=" flex flex-col gap-[3rem] mt-[3rem]">
          <div className="flex justify-center items-center gap-[3rem]">
            <div className="flex flex-col ">
              <label>Name</label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem] bg-inherit"
              />
            </div>
            <div className="flex flex-col ">
              <label>Discord Handle</label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-[3rem]">
            <div className="flex flex-col ">
              <label>
                Email Address <span className="text-[#CA0814]">*</span>
              </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem] bg-inherit"
              />
            </div>
            <div className="flex flex-col ">
              <label>Organization </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <label>Write a message</label>
              <textarea className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[49.5rem] h-[9rem] bg-inherit"></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-[22.625rem] h-[2.719rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.438rem]">
            Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ContactUs