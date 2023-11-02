"use client"
import getSingleChat from "@/libs/getChat";
import DetailedPage from "@/components/DetailedPage";

export default async function Detailed({ params: { id } }) {
  const singleChat = await getSingleChat(id);
  console.log(singleChat);
  return (
    <div className='pb-[12rem] bg-green-700 mt-[4rem] flex flex-col justify-center items-center w-full h-full lg:flex lg:items-center lg:flex-col lg:justify-center text-center overflow-hidden'>
      <DetailedPage singleChat={singleChat} />
    </div>
  );
}
