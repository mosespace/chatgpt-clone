"use client";
import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { useUser } from "@clerk/nextjs";
import { GoPaste } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { SlLike, SlDislike } from "react-icons/sl";

export default function Answers({ singleChat }) {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }
  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className='bg-[#343541] w-full lg:absolute lg:top-0 lg:right-0 lg:left-0 shadow-lg text-white'>
        <div className='lg:ml-[18%] flex justify-between py-[1.2rem] px-[2rem]'>
          <div className='hidden lg:block opacity-0'>Hidden</div>
          <span>Default (GPT-3.5)</span>
          <button>
            <CiShare1 size={25} />
          </button>
        </div>
      </div>
      <div className='w-full'>
        {/*Question */}
        {singleChat.length > 0
          ? "No Conversation was created"
          : singleChat.conversation.map((single_conversation, id) => {
              return (
                <div
                  className='mt-[2rem] gap-4 lg:gap-6 flex flex-col justify-between items-center w-full'
                  key={id}
                >
                  <div className='bg-[#343541] px-8 lg:px-96 text-white flex gap-[1rem] lg:justify-normal justify-between w-full font-medium  py-[2rem]'>
                    <div className='relative shrink-0'>
                      <Image
                        src={user.imageUrl}
                        width={100}
                        height={100}
                        alt='user-name using AI ChatGPT-4'
                        className='w-10 h-10 object-cover'
                      />
                    </div>
                    <div className='text-left' style={{ flex: 1 }}>
                      <h2 className='text-left'>
                        {single_conversation.prompt}
                      </h2>
                    </div>
                  </div>

                  {/*Answer  */}
                  <div className='w-full bg-[#444654] flex justify-center items-start gap-1  py-[2rem] text-white'>
                    <div className='flex gap-[1rem] px-8 lg:px-96 items-start lg:justify-normal justify-center py-[1rem] w-full place-items-center'>
                      <div className='relative max-w-[50px] lg:max-w-[55px] max-h-[40px] lg:max-h-[55px]'>
                        <Image src={Logo} alt='AI ChatGPT-4' />
                      </div>
                      <div className='text-left' style={{ flex: 1 }}>
                        <h2 className='text-left text-[1rem] selection:bg-[#0071bc]/70 selection:text-white'>
                          {single_conversation.response}
                        </h2>
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
                </div>
              );
            })}
      </div>
    </div>
  );
}
