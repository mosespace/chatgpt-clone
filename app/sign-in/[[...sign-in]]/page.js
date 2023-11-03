import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='absolute bg-bg bg-no-repeat bg-cover bg-green w-screen h-screen z-[230] left-0 right-0 flex items-center justify-center overflow-hidden'>
      <div className='backdrop-blur-sm w-screen flex items-center justify-center h-screen'>
        <SignIn />
      </div>
    </div>
  );
}
