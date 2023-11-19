export default async function getAllChats(userId) {
  const apiRoute = process.env.NEXT_PUBLIC_END_POINT_DB;
  const response = await fetch(`${apiRoute}?userId=${userId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(`Error: ${response.status} - ${response.statusText}`);
    return null;
  }

  const chats = await response.json();
  return chats;
}
