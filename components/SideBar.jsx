import React from "react";
import Chats from "./Chats";
import ShowNav from "./ShowNav";
import getAllChats from "@/libs/getAllChats";
import { auth } from "@clerk/nextjs";

export default async function SideBar() {
  const { userId } = auth();
  const chats = await getAllChats(userId);
  // console.log(chats);

  // const handleNewChatClick = () => {
  //   // Perform any actions related to creating a new chat

  //   // Reload the page to reflect the changes
  //   window.location.reload();
  // };
  return (
    <>
      {/*Mobile Side Tab responsive Tab */}
      <div>
        <ShowNav chats={chats} />
      </div>

      {/*Desktop Side Tab responsive Tab */}
      <div>
        <Chats chats={chats} />
      </div>
    </>
  );
}
