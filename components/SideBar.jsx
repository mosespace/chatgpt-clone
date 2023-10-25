import React from "react";
import Chats from "./Chats";
import ShowNav from "./ShowNav";
import getAllChats from "@/libs/getAllChats";

export default async function SideBar() {
  const chats = await getAllChats();

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
