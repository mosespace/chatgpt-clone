"use client";
import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";

export default function Gpt5() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
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
  );
}
