import React from "react";
import getChat from "@/libs/getChat";
import DetailedPage from "@/components/DetailedPage";

export default async function Detailed() {
  const singleChat = await getChat();
  console.log(singleChat);
  return (
    <div className='pb-[12rem] mt-[4rem] gap-6 flex flex-col justify-center items-center w-full h-full lg:flex lg:items-center lg:flex-col lg:justify-center lg:ml-[20%] lg:w-[80%] text-center'>
      <DetailedPage data={singleChat} />
    </div>
  );
}
