"use client";
import React from "react";
import Chats from "./Chats";
import Link from "next/link";
import Image from "next/image";
import ShowNav from "./ShowNav";
import ButtonMenu from "./ButtonMenu";
import { RxPerson } from "react-icons/rx";
import { BsPlusLg } from "react-icons/bs";
import Profile from "../public/profile.jpg";
import { MdOutlineMoreHoriz } from "react-icons/md";

export default function SideBar() {
  const handleNewChatClick = () => {
    // Perform any actions related to creating a new chat

    // Reload the page to reflect the changes
    window.location.reload();
  };
  return (
    <>
      <div className='bg-emerald-600 py-[1rem] px-[2rem] lg:hidden fixed top-0 right-0 left-0 z-50'>
        <div className='flex justify-between text-white'>
          <ButtonMenu />
          <button onClick={handleNewChatClick} className='font-semibold'>
            New Chat
          </button>
          <button className='focus:outline-none focus:ring focus:ring-gray-100'>
            <BsPlusLg size={25} />
          </button>
        </div>
        <ShowNav />
      </div>

      {/*Desktop Side Tab responsive Tab */}
      <div
        className='hidden w-[20%] py-[1rem] px-[2rem] h-screen bg-[#202123] fixed lg:flex flex-col justify-normal z-50 top-0 left-0 text-white'
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <Link
          href='/'
          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 font-semibold rounded-md'
        >
          <BsPlusLg size={25} />
          New Chat
        </Link>
        <div className='mt-0 flex flex-col items-center justify-between'>
          <div className='flex flex-col w-full'>
            {/*Today*/}
            <div className='mt-[1.6rem] mb-[1.rem] '>
              <span className='font-semibold text-white/60'>Today</span>
            </div>
            <Chats />
          </div>
          <div className='px-[2rem] py-[1rem] flex gap-4 flex-col justify-center w-full absolute bottom-0'>
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
    </>
  );
}
