"use client";
import React, { useState } from "react";
import { ImPower } from "react-icons/im";
import { BsFillInfoCircleFill, BsStars } from "react-icons/bs";

export default function Gpt4() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
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
  );
}
