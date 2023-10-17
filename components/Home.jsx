"use client";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { ImPower } from "react-icons/im";
import { GoPaste } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import Profile from "../public/profile.jpg";
import { SlLike, SlDislike, SlShareAlt } from "react-icons/sl";
import { BsFillInfoCircleFill, BsStars } from "react-icons/bs";
import SearchForm from "./SearchForm";

export default function Answers() {
  const [activeButton, setActiveButton] = useState(1);
  const [responseData, setResponseData] = useState();

  function updatedData(newData) {
    setResponseData(newData);
  }

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <SearchForm updatedData={updatedData} />
      {responseData ? (
        <>
          {/*Response Section */}
          <di className='bg-gray-200/60 w-full lg:absolute lg:z-50 lg:top-0 lg:w-[80%] border-2'>
            <div className='flex justify-between py-[1rem] w-full px-[2rem]'>
              <div className='hidden lg:block opacity-0 '>Hidden</div>
              <span>Default (GPT-3.5)</span>
              <button>
                <CiShare1 size={25} />
              </button>
            </div>
          </di>

          <div className='mt-[2rem] gap-6 flex flex-col justify-between items-center w-full'>
            {/*Question */}
            <div className='flex gap-[1rem] lg:justify-normal justify-between py-[.6rem] w-full font-bold px-[2rem] lg:w-[60%]'>
              <div className='relative max-w-[50px] lg:max-w-[55px] max-h-[40px] lg:max-h-[55px]'>
                <Image src={Profile} alt='user-name using AI ChatGPT-4' />
              </div>
              <div className='text-left' style={{ flex: 1 }}>
                <h2 className='text-left'>{responseData.prompt}</h2>
              </div>
            </div>

            {/*Answer  */}
            <div className='bg-gray-200/60 w-full flex justify-center items-start gap-1 border-2'>
              <div className='flex gap-[1rem] items-start lg:justify-normal justify-center py-[1rem] w-full px-[2rem] lg:w-[60%] place-items-center'>
                <div className='relative max-w-[50px] lg:max-w-[55px] max-h-[40px] lg:max-h-[55px]'>
                  <Image src={Logo} alt='AI ChatGPT-4' />
                </div>
                <div className='text-left' style={{ flex: 1 }}>
                  <h2 className='text-left text-[1rem] selection:bg-[#0071bc]/70 selection:text-white'>
                    {responseData.response}
                  </h2>
                </div>
              </div>

              {/*Only shown on Desktop --- Like Icons */}
              <div className='hidden lg:flex py-[1rem] gap-2'>
                <button>
                  <GoPaste size={20} />
                </button>
                <button>
                  <SlLike size={20} />
                </button>
                <button>
                  <SlDislike size={20} />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/*Home Page */}
          <div className='bg-slate-300 flex justify-between items-center rounded-md px-[1rem] py-[.6rem] w-full font-bold  lg:w-[30%]'>
            <button
              onClick={() => handleButtonClick(1)}
              className={`flex gap-[0.30rem] items-center rounded-md px-[2rem] py-[.6rem] justify-center ${
                activeButton === 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              <ImPower className='text-green-500' />
              GPT-3.5
              <BsFillInfoCircleFill />
            </button>
            <button
              className={`flex gap-[0.30rem] items-center rounded-md px-[2rem] py-[.6rem] justify-center ${
                activeButton === 2 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              <BsStars />
              GPT-4
              <FaLock />
            </button>
          </div>

          <div className='relative w-[150px] h-[150px]'>
            <Image src={Logo} alt='AI ChatGPT-4' />
          </div>
        </>
      )}
    </>
  );
}
