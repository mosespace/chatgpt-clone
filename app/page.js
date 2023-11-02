import HomeIntro from "@/components/HomeIntro";

export default async function Home() {
  return (
    <main className='gap-6 flex flex-col justify-center items-center w-full h-full lg:flex lg:items-center lg:flex-col lg:justify-start pt-[4rem] text-center'>
      <HomeIntro />
    </main>
  );
}
