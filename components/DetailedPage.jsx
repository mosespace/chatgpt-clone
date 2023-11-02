"use client";
import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { useUser } from "@clerk/nextjs";
import { GoPaste } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { SlLike, SlDislike } from "react-icons/sl";

export default function Answers({ singleChat }) {
  const { user } = useUser();
  console.log(user);

  return (
    <div className='overflow-hidden'>
      {/*Response Section */}

      <div className='bg-white lg:absolute overflow-hidden lg:z--50 lg:top-0 lg:left-0 lg:right-0 lg:border-2'>
        <div className='flex justify-between py-[1rem] px-[2rem]'>
          <div className='hidden lg:block opacity-0 '>Hidden</div>
          <span>Default (GPT-3.5)</span>
          <button>
            <CiShare1 size={25} />
          </button>
        </div>
      </div>

      {/* <div className='mt-[2rem] gap-6 flex flex-col justify-between items-center w-full'> */}
      {/*Question */}
      {singleChat?.conversation?.map((single_conversation, id) => {
        return (
          <div
            className='mt-[2rem] gap-6 flex flex-col justify-between items-center w-full'
            key={id}
          >
            <div className='flex gap-[1rem] lg:justify-normal justify-between py-[.6rem] w-full font-bold px-[2rem] lg:w-[60%]'>
              <div className='relative max-w-[50px] lg:max-w-[55px] max-h-[40px] lg:max-h-[55px]'>
                <Image
                  src={user?.imageUrl}
                  alt='user-name using AI ChatGPT-4'
                  fill
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='text-left' style={{ flex: 1 }}>
                <h2 className='text-left'>{single_conversation.prompt}</h2>
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
                    {single_conversation.response}
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
        );
      })}
      {/* </div> */}
    </div>
  );
}
