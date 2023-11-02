import React from "react";
import Image from "next/image";
import Btns from "./homeBtns/Btns";
import Logo from "../public/Logo.svg";

export default function Answers() {
  return (
    <>
      <div className='mx-[.3rem] lg:mx-0'>
        <Btns />
      </div>

      <div className='relative w-[120px] h-[120px]'>
        <Image src={Logo} alt='AI ChatGPT-4' />
      </div>
    </>
  );
}
