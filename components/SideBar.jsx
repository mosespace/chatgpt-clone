import React from "react";
import MobileNav from "./MobileNav";
import { auth } from "@clerk/nextjs";
import DesktopNav from "./DesktopNav";
import getAllChats from "@/libs/getAllChats";

export default async function SideBar() {
  const { userId } = auth();
  const chats = await getAllChats(userId);
  // console.log(userId);

  return (
    <>
      {/* Mobile Side Tab responsive Tab */}
      <div>
        <MobileNav chats={chats} />
      </div>

      {/*Desktop Side Tab responsive Tab */}
      <div className='w-full'>
        <DesktopNav chats={chats} />
      </div>
    </>
  );
}
