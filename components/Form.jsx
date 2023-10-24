"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Form() {
  const [loading, setLoading] = useState(false);

  const [chatId, setChatId] = useState(null);
  // console.log(chatId);

  const { register, handleSubmit, reset } = useForm();

  // const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let botDataObject;

      const response = await fetch(process.env.NEXT_PUBLIC_END_POINT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setLoading(false);
        const resultJSON = await response.json();
        const botData = JSON.parse(resultJSON.GptResponse);
        // console.log(botData);

        botDataObject = {
          prompt: botData.prompt,
          response: botData.response,
          chatId: chatId,
        };

        if (chatId) {
          const conversationId = {
            ...botData,
            chatId,
          };
          const res = await fetch(process.env.NEXT_PUBLIC_END_POINT_DB, {
            method: "POST",
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conversationId),
          });
          // console.log(res);
        } else {
          const res = await fetch(process.env.NEXT_PUBLIC_END_POINT_DB, {
            method: "POST",
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(botDataObject),
          });
          if (res.ok) {
            const setting = await res.json();
            const settingChatId = setting.chatId;
            setChatId(settingChatId);
          }
        }

        // console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // updatedData(chat);

  return (
    <>
      {/*Search option */}
      <div className='bg-gray-100 fixed bottom-0 left-0 right-0 lg:flex lg:items-center lg:flex-col lg:justify-center lg:ml-[20%] lg:w-[80%]'>
        <div className='px-[2rem] lg:px-0 lg:w-[50%]'>
          <form action='submit' onSubmit={handleSubmit(onSubmit)} method='POST'>
            <div className='mt-5 flex shadow-lg justify-between px-3 items-center border-2 bg-gray-200 text-gray-900 rounded-[.8rem]'>
              <input
                className='w-full focus:bg-transparent bg-transparent text-gray-900 p-3 focus:outline-none'
                type='text'
                {...register("text")}
                placeholder='Send a message'
                required
              />
              {loading ? (
                <div>Loading....</div>
              ) : (
                <button
                  // onClick={() => router.push(`/c/${chatId}`)}
                  type='submit'
                >
                  <IoMdSend size={25} className='text-gray-900/50' />
                </button>
              )}
            </div>
          </form>
        </div>

        <footer className='text-gray-600 body-font'>
          <div className=''>
            <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
              <p className='lg:hidden text-gray-500 text-sm text-center sm:text-left'>
                © Designed by 💖 from —
                <Link
                  href='/kisakyemoes-vercel.app'
                  className='text-gray-600 ml-1'
                  target='_blank'
                >
                  @Kisakye Moses
                </Link>
              </p>
              <p className='lg:block hidden text-gray-500 text-sm text-center sm:text-left'>
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts.
                <Link
                  href='https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
                  className='text-gray-600 ml-1'
                  target='_blank'
                >
                  ChatGPT September 25 Version
                </Link>
              </p>
              <span className='lg:hidden inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
                <Link className='text-gray-500' href='/'>
                  <svg
                    fill='currentColor'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </Link>
                <Link className='ml-3 text-gray-500' href='/'>
                  <svg
                    fill='currentColor'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </Link>
                <Link className='ml-3 text-gray-500' href='/'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </Link>
                <Link className='ml-3 text-gray-500' href='/'>
                  <svg
                    fill='currentColor'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='none'
                      d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                    ></path>
                    <circle cx='4' cy='4' r='2' stroke='none'></circle>
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
