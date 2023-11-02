import HomeIntro from "@/components/HomeIntro";

export default async function Home() {
  return (
    <main className='mx-0 gap-6 flex flex-col items-center w-full h-full lg:flex lg:items-center lg:flex-col justify-start pt-[4rem] text-center bg-red-700'>
      <HomeIntro />
    </main>
  );
}
