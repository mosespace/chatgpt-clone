"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Profile from "../public/profile.jpg";
import { FaLock } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { ImPower } from "react-icons/im";
import { SlLike, SlDislike, SlShareAlt } from "react-icons/sl";
import { GoPaste } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { BsFillInfoCircleFill, BsStars } from "react-icons/bs";

export default function DetailedPage() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      {/*Home Page */}
      {/* <>
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
      </> */}


    </>
  );
}
