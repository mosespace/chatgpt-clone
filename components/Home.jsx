"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Profile from "../public/profile.jpg";
import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { ImPower } from "react-icons/im";
import { SlLike, SlDislike, SlShareAlt } from "react-icons/sl";
import { GoPaste } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { BsFillInfoCircleFill, BsStars } from "react-icons/bs";

export default function Answers() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      {/*Home Page */}
      {/* <>
      <div className='bg-slate-300 flex justify-between items-center rounded-md px-[1rem] py-[.6rem] w-full font-bold  lg:w-[30%]'>
        <button
          onClick={() => handleButtonClick(1)}
          className={`flex gap-[0.30rem] items-center rounded-md px-[2rem] py-[.6rem] justify-center ${
            activeButton === 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          <ImPower className='text-green-500' />
          GPT-3.5
          <BsFillInfoCircleFill />
        </button>
        <button
          className={`flex gap-[0.30rem] items-center rounded-md px-[2rem] py-[.6rem] justify-center ${
            activeButton === 2 ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          <BsStars />
          GPT-4
          <FaLock />
        </button>
      </div>

      <div className='relative w-[150px] h-[150px]'>
        <Image src={Logo} alt='AI ChatGPT-4' />
      </div>
      </> */}

      {/*Response Section */}
      <di className='bg-gray-200/60 w-full lg:absolute lg:z-50 lg:top-0 lg:w-[80%] border-2'>
        <div className='flex justify-between py-[1rem] w-full px-[2rem]'>
          <div className='hidden lg:block opacity-0 '>Hidden</div>
          <span>Default (GPT-3.5)</span>
          <button>
            <CiShare1 size={25} />
          </button>
        </div>
      </di>

      <div className='mt-[2rem] gap-6 flex flex-col justify-between items-center w-full'>
        {/*Question */}
        <div className='flex gap-[1rem] lg:justify-normal justify-between py-[.6rem] w-full font-bold px-[2rem] lg:w-[60%]'>
          <div className='relative max-w-[50px] lg:max-w-[55px] max-h-[40px] lg:max-h-[55px]'>
            <Image src={Profile} alt='user-name using AI ChatGPT-4' />
          </div>
          <div className='text-left' style={{ flex: 1 }}>
            <h2 className='text-left'>
              I want to learn next js 13.5, How can you help me get started?
            </h2>
          </div>
        </div>

        {/*Answer  */}
        <div className='bg-gray-200/60 w-full flex justify-center items-start gap-1 border-2'>
          <div className='flex gap-[1rem] items-start lg:justify-normal justify-center py-[1rem] w-full px-[2rem] lg:w-[60%] place-items-center'>
            <div className='relative max-w-[50px] lg:max-w-[55px] max-h-[40px] lg:max-h-[55px]'>
              <Image src={Logo} alt='AI ChatGPT-4' />
            </div>
            <div className='text-left' style={{ flex: 1 }}>
              <h2 className='text-left text-[1rem] selection:bg-[#0071bc]/70 selection:text-white'>
                I'd be happy to help you get started with Next.js! Next.js is a
                popular framework for building React applications, and it's
                known for its performance, SEO-friendliness, and
                developer-friendly features. To begin learning Next.js, follow
                these steps:
                <br /> <br /> 1.{" "}
                <span className='font-bold'>Prerequisites</span>: - Ensure you
                have Node.js and npm (Node Package Manager) installed on your
                computer. You can download them from the
                <a href='https://nodejs.org/' className='underline'>
                  {" "}
                  official website:
                </a>{" "}
                - Familiarity with HTML, CSS, and JavaScript is essential. It's
                also beneficial to have some knowledge of React.
                <br /> <br /> 2.{" "}
                <span className='font-bold'>Install Next.js</span>: To create a
                new Next.js project, open your terminal and run the following
                commands: ```bash npx create-next-app my-nextjs-app cd
                my-nextjs-app npm run dev ``` This will create a new Next.js
                project in a directory called `my-nextjs-app`, and `npm run dev`
                starts the development server. <br /> <br /> 3.{" "}
                <span className='font-bold'>Project Structure</span>: Next.js
                has a specific project structure. Key directories include: -
                `pages/`: Where you create your pages, e.g., `index.js` for the
                homepage. - `components/`: For reusable React components. -
                `public/`: For static assets like images and fonts. <br />{" "}
                <br /> 4. <span className='font-bold'>Routing</span>: Next.js
                uses a file-based routing system. For example, to create a new
                page, you can create a file in the `pages/` directory. The
                filename becomes the route. For the homepage, create an
                `index.js` file.
                <br /> <br /> 5.{" "}
                <span className='font-bold'>Components and Styling</span>: You
                can create React components in the `components/` directory and
                style them using CSS modules, styled-components, or any other
                CSS-in-JS solution. You can also use global CSS files.
                <br /> <br /> 6.{" "}
                <span className='font-bold'>Fetching Data</span>: Use the
                `getServerSideProps`, `getStaticProps`, or `getInitialProps`
                functions to fetch data for your pages. <br /> <br /> 7.{" "}
                <span className='font-bold'>API Routes</span>: Create API routes
                in the `pages/api/` directory. These can be used for serverless
                functions and RESTful endpoints. <br /> <br />
                8. <span className='font-bold'>Deployment</span>: You can deploy
                your Next.js app to various hosting platforms like Vercel,
                Netlify, or AWS. Refer to the deployment guides provided by
                Next.js for specifics. <br /> <br /> 9.{" "}
                <span className='font-bold'>Documentation</span>: The Next.js
                documentation is a valuable resource. It's comprehensive and
                well-maintained. You can find it{" "}
                <a href=' https://nextjs.org/docs' className='underline'>
                  here:
                </a>
                <br /> <br /> 10.{" "}
                <span className='font-bold'>Tutorials and Courses</span>:
                Consider taking online courses or reading tutorials on Next.js.
                Many resources are available on platforms like Udemy, YouTube,
                and freeCodeCamp. <br /> <br /> 11.{" "}
                <span className='font-bold'>Community</span>: Join the Next.js
                community on platforms like GitHub, Reddit, and Twitter. It's a
                great place to ask questions, share your progress, and learn
                from others.
                <br /> <br /> 12. <span className='font-bold'>Practice</span>:
                The best way to learn is by doing. Create projects, experiment
                with different features, and keep building.
                <br /> <br /> If you have any specific questions or need
                guidance on particular topics related to Next.js, feel free to
                ask, and I'll be happy to provide more information and help you
                along the way...
              </h2>
            </div>
          </div>

          {/*Only shown on Desktop --- Like Icons */}
          <div className='hidden lg:flex py-[1rem] gap-2'>
            <button>
              <GoPaste size={20} />
            </button>
            <button>
              <SlLike size={20} />
            </button>
            <button>
              <SlDislike size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
