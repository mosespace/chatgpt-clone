export default async function getSingleChat(id) {
  const apiRoute = process.env.NEXT_PUBLIC_END_POINT_DB;
  const response = await fetch(`${apiRoute}/${id}`, {
    cache: "no-store",
  });
  const singleChat = await response.json();
  // console.log(singleChat );
  return singleChat;
}
