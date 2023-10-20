import Link from "next/link";
import { LuMessageSquare } from "react-icons/lu";
import getAllChats from "@/libs/getAllChats";

export default async function Chats() {
  const chats = await getAllChats();

  const randomNumber = Math.floor(Math.random() * 10000000000);
  // console.log(chats);

  return (
    <div className='flex flex-col w-full'>
      {/*Today*/}
      <div className='mt-[1.6rem] mb-[1.rem] '>
        <span className='font-semibold text-white/60'>Today</span>
      </div>
      {chats?.map((chat, id) => {
        const newChatId = chat.id + "-" + randomNumber;

        return (
          <>
            <div className='flex flex-col w-full' key={id}>
              <div className='mt-[1rem] flex items-center'>
                <Link
                  href={`/c/${newChatId}`}
                  className='flex gap-4 items-center border-2 border-slate-300 py-3 px-2 w-full rounded-md'
                >
                  <LuMessageSquare size={20} />
                  {chat.title}
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
