"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import ButtonClose from "./ButtonClose";
import { RxPerson } from "react-icons/rx";
import { BsPlusLg } from "react-icons/bs";
import { UserButton, useUser } from "@clerk/nextjs";
import { MdOutlineMoreHoriz } from "react-icons/md";

export default function MobileNav({ chats }) {
  const { user } = useUser();

  const [showNav, setShowNav] = useState(false);

  function handleOnClick() {
    setShowNav(true);
  }
  function handleOnClose() {
    setShowNav(false);
  }
  return (
    <>
      <div className='bg-[#343541] lg:bg-[#202123] py-[1rem] px-[2rem] lg:hidden fixed top-0 right-0 left-0 z-50'>
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
                className='w-[75%] py-[1rem] px-[1rem]  h-screen bg-[#202123]'
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
                      <span className='font-bold text-white/60'>Today</span>
                    </div>
                  </div>
                  {chats?.map((chat, id) => {
                    return (
                      <>
                        <div className='flex flex-col w-full' key={id}>
                          <div className='mt-[1rem] flex items-center'>
                            <Link
                              href={`/c/${chat.id}`}
                              className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                            >
                              {/* <LuMessageSquare size={20} /> */}
                              {chat.title}
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className='py-[1rem] flex gap-4 flex-col justify-center w-[290px] absolute z-50 bottom-0'>
                    <Link
                      href='/'
                      className='flex gap-[2rem] items-center border-t-2 border-gray-100 py-3 px-2 rounded-md'
                    >
                      <RxPerson size={20} />
                      Upgrade to Plus
                    </Link>
                    <button className='flex items-center gap-[2rem] w-full'>
                      <UserButton afterSignOutUrl='/' />
                      <div className='flex items-center gap-[1rem] justify-between'>
                        <span>{user?.fullName}</span>
                        <MdOutlineMoreHoriz size={20} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className='py-[1rem] pr-[3rem]'>
                <button onClick={handleOnClose}>
                  <ButtonClose />
                </button>
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
