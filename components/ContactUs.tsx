import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ContactUs.module.css';
import API from '@/utils';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [contactUsInfo, setContactUsInfo] = useState({
    discordHandle: '',
    email: '',
    message: '',
    name: '',
    organization: '',
  });

  const handleInputChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactUsInfo({
      ...contactUsInfo,
      // [ev.target.name]: ev.target.value.trim(),
      // removing trim to allow for spaces in the message box.
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmitContactUsForm: FormEventHandler<HTMLFormElement> = async (
    ev
  ) => {
    ev.preventDefault();
    try {
      // THIS SERVICE APPEARS TO BE THE GAP IN THE CONTACT FORM
      // 

      console.log(process.env.NEXT_PUBLIC_MAIL_ID);

      // await API.post(
      //   // `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_MAIL_ID}`,
      //   `https://formsubmit.co/ajax/tom@tomtranmer.com`,
      //   contactUsInfo
      // );

      await fetch(`https://formsubmit.co/ajax/links@banklesscard.xyz`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactUsInfo),
      });

      setContactUsInfo({
        discordHandle: '',
        email: '',
        message: '',
        name: '',
        organization: '',
      });
      toast('Message submitted');
    } catch (err) {
      console.error('Something went wrong', err); 
      toast('Something went wrong');
    }
  };

  return (
    <>
      <section className="mt-[7rem]">
        <h1 className="text-center font-semibold text-[2rem] leading-[2.421rem] relative">
          Contact Us
        </h1>
        <form
          className="flex flex-col gap-[3rem] mt-[3rem] relative"
          onSubmit={handleSubmitContactUsForm}
        >
          <div className="flex justify-center items-center gap-[3rem] max-[822px]:justify-center max-[822px]:items-center max-[822px]:gap-0 max-[767px]:flex-col">
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px] relative">
                Name
              </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
                name="name"
                onChange={handleInputChange}
                value={contactUsInfo['name']}
              />
            </div>
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px] relative">
                Discord Handle
              </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
                name="discordHandle"
                onChange={handleInputChange}
                value={contactUsInfo['discordHandle']}
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-[3rem] max-[822px]:justify-center max-[822px]:items-center max-[822px]:gap-0 max-[767px]:flex-col">
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px] relative">
                Email Address <span className="text-[#CA0814] relative">*</span>
              </label>
              <input
                type="email"
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
                name="email"
                onChange={handleInputChange}
                required
                value={contactUsInfo['email']}
              />
            </div>
            <div className="flex flex-col max-[822px]:self-center max-[822px]:justify-self-center max-[822px]:w-[100%] max-[822px]:m-auto">
              <label className="relative max-[822px]:max-w-[100%] max-[822px]:px-[30px] max-[822px]:py-[5px] max-[767px]:py-[10px]">
                Organization{' '}
              </label>
              <input
                type=""
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[22.625rem]  bg-inherit max-[822px]:w-[90%] max-[822px]:h-[50px] max-[822px]:m-auto relative"
                name="organization"
                onChange={handleInputChange}
                value={contactUsInfo['organization']}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <label>Write a message</label>
              <textarea
                className="border border-white px-[0.5rem] py-2 rounded-[0.313rem] w-[49.5rem] h-[9rem] bg-inherit  max-[822px]:max-w-[90%]"
                name="message"
                onChange={handleInputChange}
                required
                value={contactUsInfo['message']}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[22.625rem] h-[2.719rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.438rem]"
              disabled={!(!!contactUsInfo.email && !!contactUsInfo.message)}
            >
              Submit
            </button>
          </div>
          <div className={`${styles['ellipse3']}`}></div>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
