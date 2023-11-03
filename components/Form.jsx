"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function Form() {
  const { userId } = useAuth();
  // console.log(typeof userId);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [chatId, setChatId] = useState(null);
  // console.log(chatId);

  const chatsEndPoint = process.env.NEXT_PUBLIC_END_POINT_DB;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let resultDataObject;
      const response = await fetch(process.env.NEXT_PUBLIC_CHAT_END_POINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // console.log(response);
        reset();
        setLoading(false);
        const resultJSON = await response.json();
        const resultData = resultJSON.GptResponse;
        resultDataObject = {
          prompt: resultData.prompt,
          response: resultData.response,
          userId,
        };
        if (chatId) {
          // console.log("coming from the chatId");
          const conversation = {
            ...resultDataObject,
            chatId,
          };
          const response = await fetch(`${chatsEndPoint}/?${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conversation),
          });
          if (response.ok) {
            window.location.reload();
          }
        } else {
          // console.log("coming from the new chatId");

          const res = await fetch(process.env.NEXT_PUBLIC_END_POINT_DB, {
            method: "POST",
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(resultDataObject),
          });
          if (res.ok) {
            // console.log(res);
            const setting = await res.json();
            const settingChatId = setting.chatId;
            const baseUrl = process.env.NEXT_PUBLIC_LOCALHOST;
            // console.log(settingChatId);
            setChatId(settingChatId);
            router.push(`${baseUrl}/c/${settingChatId}`);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // updatedData(chat);

  return (
    <>
      {/*Search option */}
      <div className='fixed bottom-0 left-0 right-0 z-50 lg:flex lg:items-center lg:flex-col lg:justify-center lg:ml-[20%] lg:w-[80%]'>
        <div className='px-[2rem] lg:px-0 lg:w-[50%]'>
          {/* <form action='submit' onSubmit={handleSubmit(onSubmit)} method='POST'>
            <div className='mt-5 flex shadow-2xl justify-between px-2 items-center border-2 bg-[#40414F] text-white rounded-[.8rem]'>
              <textarea
                className='w-full bg-transparent text-white/80 py-3 bg-green-700 focus:outline-none'
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
          </form> */}

          <form action='submit' onSubmit={handleSubmit(onSubmit)} method='POST'>
            <label for='chat' className='sr-only'>
              Send a message
            </label>
            <div className='flex items-center px-3 py-[1.2rem] rounded-xl bg-[#40414F] shadow-lg'>
              <button
                type='button'
                className='inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
              >
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 18'
                >
                  <path
                    fill='currentColor'
                    d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                  />
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                  />
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                  />
                </svg>
                <span className='sr-only'>Upload image</span>
              </button>
              <button
                type='button'
                className='p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
              >
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z'
                  />
                </svg>
                <span className='sr-only'>Add emoji</span>
              </button>
              <textarea
                id='chat'
                rows='1'
                {...register("text")}
                required
                className='block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg focus:ring-[#40414F] focus:border-[#40414F] dark:bg-[#40414F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none dark:focus:border-blue-500'
                placeholder='Send a message'
              ></textarea>

              {loading ? (
                <div>Loading....</div>
              ) : (
                <button
                  onClick={() => router.push(`/c/${chatId}`)}
                  type='submit'
                  className='inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600'
                >
                  <svg
                    className='w-5 h-5 rotate-90'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 18 20'
                  >
                    <path d='m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z' />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>

        <footer className='text-white/80 body-font'>
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
