"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import ButtonClose from "./ButtonClose";
import { RxPerson } from "react-icons/rx";
import Profile from "../public/profile.jpg";

import { BsPlusLg } from "react-icons/bs";

export default function ShowNav({ chats }) {
  const [showNav, setShowNav] = useState(false);

  function handleOnClick() {
    setShowNav(true);
    console.log(setShowNav);
  }
  return (
    <>
      <div className='bg-emerald-600 py-[1rem] px-[2rem] lg:hidden fixed top-0 right-0 left-0 z-50'>
        <div className='flex justify-between text-white'>
          <button onClick={handleOnClick}>
            <FiMenu size={25} />
          </button>
          <button className='font-semibold'>New Chat</button>
          <button className='focus:outline-none focus:ring focus:ring-gray-100'>
            <BsPlusLg size={25} />
          </button>
        </div>
        {/* <ShowNav /> */}
        {showNav ? (
          <>
            {/*Mobile responsive Tab */}
            <div className='absolute flex justify-between z-50 backdrop-blur-sm bg-white/10 w-full top-0 left-0 text-white lg:hidden'>
              <div
                className='w-[75%] py-[1rem] px-[1rem]  h-screen bg-[#225b9f]'
                style={{ overflowY: "auto", maxHeight: "100vh" }}
              >
                <Link
                  href='/'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 pl-2 font-semibold rounded-md'
                >
                  <BsPlusLg size={25} />
                  New Chat
                </Link>
                <div className='flex flex-col'>
                  <div>
                    {/*Today*/}
                    <div className='pt-[1.6rem] mb-[1.rem]'>
                      <span className='font-bold text-white/60'>
                        Yesterday.........
                      </span>
                    </div>
                  </div>
                  <div className='mt-6 py-[1rem] flex gap-4 flex-col justify-center w-full'>
                    <Link
                      href='/'
                      className='flex gap-4 items-center border-t-2 border-gray-100 py-3 px-2 w-full rounded-md'
                    >
                      <RxPerson size={20} />
                      Upgrade to Plus
                    </Link>
                    <div className='flex gap-4 items-center w-full'>
                      <div className='relative w-[30px] h-[30px]'>
                        <Image src={Profile} alt='AI ChatGPT-4' />
                      </div>
                      <div className='flex justify-between w-full font-semibold'>
                        <span>Kisakye Moses</span>
                        <button>
                          <MdOutlineMoreHoriz size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-[1rem] pr-[3rem]'>
                <ButtonClose />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
