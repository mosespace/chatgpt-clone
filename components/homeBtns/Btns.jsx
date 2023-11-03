"use client";
import React, { useState } from "react";
import { ImPower } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { BsFillInfoCircleFill, BsStars } from "react-icons/bs";

export default function Btns() {
  const [activeButton, setActiveButton] = useState(1);

  const [closeButton, setCloseButton] = useState("");
  // console.log(closeButton);

  function btnOpen() {
    setCloseButton(true);
  }

  function btnClose() {
    setCloseButton("");
  }

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className='bg-[#ECECF1] flex justify-between items-center rounded-md px-[1rem] py-[.6rem] w-full font-bold'>
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
          onClick={btnOpen}
        >
          <BsStars />
          GPT-4
          <FaLock />
        </button>
        {/* {activeButton === 2 ? (): "false"} */}
      </div>
      {closeButton ? (
        <div className='h-screen w-full absolute z-50 left-0 right-0 bottom-0 top-0 bg-black/80 backdrop-blur-md flex items-center justify-center px-[4rem]'>
          <div className='bg-white p-[4rem] rounded-lg flex flex-col gap-[2rem] items-center'>
            <h1 className=''>
              🥹 Sorry, this future is still in developer mode. Kindly check back
              in a few
            </h1>
            <button
              onClick={btnClose}
              className='bg-black px-[2rem] py-[.8rem] text-white rounded-full'
            >
              close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
