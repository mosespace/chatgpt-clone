import getSingleChat from "@/libs/getChat";
import DetailedPage from "@/components/DetailedPage";

export default async function Detailed({ params: { id } }) {
  const singleChat = await getSingleChat(id);
  // console.log(singleChat);
  return (
    <div className='pb-[12rem] mt-[7.5rem] lg:mt-[4rem] gap-6 flex flex-col justify-center items-center w-full h-full lg:flex lg:items-center lg:flex-col lg:justify-start text-center'>
      <DetailedPage singleChat={singleChat} />
    </div>
  );
}
// lg:bg-purple-700
