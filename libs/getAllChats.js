export default async function getAllChats(userId) {
  const apiRoute = process.env.NEXT_PUBLIC_END_POINT_DB;
  const response = await fetch(`${apiRoute}?userId=${userId}`, {
    cache: "no-store",
  });

  const chats = await response.json();
  // console.log(chats);
  return chats;
}
