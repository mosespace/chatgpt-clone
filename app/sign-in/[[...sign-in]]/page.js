import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='absolute backdrop-blur-sm bg-white w-full h-screen z-50 flex items-center justify-center'>
      <SignIn />
    </div>
  );
}
