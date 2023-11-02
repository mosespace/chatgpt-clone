import "../styles/main.scss";
import Form from "@/components/Form";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avail ChatGPT-4",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ToastContainer position='top-center' />

          <Form />
          <div className='flex relative w-full h-full'>
            <div className='bg-red-700'>
              <SideBar />
            </div>
            <div className='h-screen flex justify-center w-full lg:ml-[18%]'>
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
