"use client";
import Link from "next/link";
import Image from "next/image";
import Profile from "../public/profile.jpg";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { BsPlusLg } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineMoreHoriz } from "react-icons/md";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  function handleOnClick() {
    setShowNav(true);
    // console.log(setShowNav);
  }
  function handleOnClose() {
    setShowNav(false);
    // console.log(setShowNav);
  }
  return (
    <>
      <div className='bg-[#0071bc] py-[1rem] px-[2rem] lg:hidden fixed top-0 right-0 left-0 z-50'>
        <div className='flex justify-between text-white '>
          <button onClick={handleOnClick}>
            <FiMenu size={25} />
          </button>
          <h1 className='font-semibold'>New Chat</h1>
          <button className='focus:outline-none focus:ring focus:ring-gray-100'>
            <BsPlusLg size={25} />
          </button>
        </div>

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
                      <span className='font-bold text-white/60'>Today</span>
                    </div>
                    <div className='flex flex-col w-full text-[.9rem] '>
                      <div className='mt-[1rem] flex items-center '>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Resolve React Error Hand....
                        </Link>
                      </div>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Create HTML Emails Usin....
                        </Link>
                      </div>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Send Contact Form Ema....
                        </Link>
                      </div>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          React Three.Js Setup
                        </Link>
                      </div>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Toggle Mobile Menu Co....
                        </Link>
                      </div>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Task: Summarize Conve....
                        </Link>
                      </div>
                    </div>

                    {/*Yesterday */}
                    <div className=' pt-[1.6rem] mb-[1.rem]'>
                      <span className='font-bold text-white/60'>Yesterday</span>
                    </div>
                    <div className='flex flex-col w-full text-[.9rem] '>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Toggle Mobile Menu Co....
                        </Link>
                      </div>
                      <div className='mt-[1rem] flex items-center'>
                        <Link
                          href='/'
                          className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full font-semibold rounded-md'
                        >
                          <LuMessageSquare size={20} />
                          Task: Summarize Conve....
                        </Link>
                      </div>
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
                <button onClick={handleOnClose}>
                  <MdClose size={30} />
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      {/*Desktop Side Tab responsive Tab */}
      <div
        className='hidden w-[20%] py-[1rem] px-[2rem] h-screen bg-[#225b9f] fixed lg:flex flex-col justify-normal z-50 top-0 left-0 text-white'
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
            <div className='flex flex-col w-full'>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Resolve React Error Hand....
                </Link>
              </div>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Create HTML Emails Usin....
                </Link>
              </div>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Send Contact Form Ema....
                </Link>
              </div>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  React Three.Js Setup
                </Link>
              </div>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Toggle Mobile Menu Co....
                </Link>
              </div>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Task: Summarize Conve....
                </Link>
              </div>
            </div>

            {/*Yesterday */}
            <div className=' pt-[1.6rem] mb-[1.rem]'>
              <span className='font-semibold text-white/60'>Yesterday</span>
            </div>
            <div className='flex flex-col w-full'>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Toggle Mobile Menu Co....
                </Link>
              </div>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href='/detailed'
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  Task: Summarize Conve....
                </Link>
              </div>
            </div>
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
