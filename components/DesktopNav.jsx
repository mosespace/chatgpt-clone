"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { RxPerson } from "react-icons/rx";
import { BsPlusLg } from "react-icons/bs";
import { UserButton } from "@clerk/nextjs";
import { MdOutlineMoreHoriz } from "react-icons/md";

export default function DesktopNav({ chats }) {
  const { user } = useUser();
  // console.log(chats);
  return (
    <>
      {/*Desktop Side Tab responsive Tab */}
      <div
        className='hidden w-[18%] py-[1rem] px-[2rem] h-full bg-[#202123] fixed lg:flex flex-col justify-normal z-50 top-0 left-0 text-white overflow-auto'
        // style={{ overflowY: "auto" }}
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
            {chats.length > 0
              ? chats?.map((chat, id) => {
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
                })
              : ""}
          </div>
          <div className='px-[2rem] py-[1rem] flex gap-4 flex-col justify-center w-full absolute z-50 bottom-0'>
            <Link
              href='/'
              className='flex gap-4 items-center border-t-2 border-gray-100 py-3 px-2 w-full rounded-md'
            >
              <RxPerson size={20} />
              Upgrade to Plus
            </Link>
            <div className='flex gap-4 items-center w-full'>
              <UserButton afterSignOutUrl='/' />
              <div className='flex justify-between w-full'>
                <span>{user?.fullName}</span>
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
