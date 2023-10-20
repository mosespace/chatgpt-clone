import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Gpt4 from "./homeBtns/Gpt4";
import Gpt5 from "./homeBtns/Gpt5";

export default function Answers() {
  return (
    <>
      <div className='bg-slate-300 flex justify-between items-center rounded-md px-[1rem] py-[.6rem] w-full font-bold  lg:w-[30%]'>
        <Gpt4 />
        <Gpt5 />
      </div>

      <div className='relative w-[150px] h-[150px]'>
        <Image src={Logo} alt='AI ChatGPT-4' />
      </div>
    </>
  );
}
