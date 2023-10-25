import Answers from "@/components/Home";
// import getAllChats from "@/libs/getAllChats";

export default async function Home() {
  // const chats = await getAllChats();
  // // console.log(chats.chat.id);
  // const chatIdToFilter = chats.id;

  // const filteredConversations = chats
  //   .filter((chat) => chat.id === chatIdToFilter)
  //   .map((chat) => chat.conversation);

  // console.log(filteredConversations);
  return (
    <main className='pb-[12rem] mt-[4rem] gap-6 flex flex-col justify-center items-center w-full h-full lg:flex lg:items-center lg:flex-col lg:justify-center lg:ml-[20%] lg:w-[80%] text-center'>
      <Answers />
    </main>
  );
}
