import Link from 'next/link';
import React, { ReactElement } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
const HomePage = (): ReactElement => {
   return (
      <div className="w-full h-screen session-home">
         <div className="slide-animate"></div>
         <div className="color-block hidden lg:block 2xl:max-w-512"></div>
         <div
            className="flex flex-col items-center w-full h-screen lg:flex-row lg:space-x-10"
            data-aos="fade-up"
         >
            <div className="flex items-center justify-center w-full h-auto pt-14 lg:w-1/3 lg:h-full z-50 lg:ml-14 lg:py-14">
               <div className="bg-main-img bg-cover bg-center bg-no-repeat w-52 h-52 rounded-full lg:h-auto lg:w-full lg:max-h-full lg:rounded-3xl lg:aspect-7/10 2xl:w-512"></div>
            </div>
            <div className="flex flex-col flex-grow items-center space-y-7 mt-5 px-5 bg-zinc-900 lg:pr-20 lg:justify-start lg:items-start">
               <h1 className="text-white text-2xl font-bold sm:text-3xl lg:text-5xl">
                  Hi! I&apos;m Le Quoc Huy <br />
                  <span className=" font-bold text-xl sm:text-2xl lg:text-4xl">
                     Web Developer !
                  </span>
               </h1>
               <p className="text-white text-sm pb-32 ss:pb-0 sm:text-lg max-w-2xl lg:text-xl 2xl:max-w-3xl">
                  Hi guys! My name is Huy, currently a student at Mindx School
                  of Technology. Previously, I studied at Nam Can Tho University
                  and prepare graduate with a major in automotive engineering
                  technology. In November 2021 due to the epidemic situation, I
                  started to learn about IT on F8 Fullsatck channel and was
                  interested in it. Then at the end of 2021, I decided to
                  register for the fullsatck developer course at Mindx
                  Technology school. Currently, I have basic knowledge of HTML,
                  CSS, Javascript, ReactJS... and would like to find a workplace
                  with a good environment to develop myself.
               </p>
               <div className="hidden space-x-64 sm:flex option-nav">
                  <Link href="/portfolio">
                     <a className="flex items-center space-x-10 text-white text-lg uppercase">
                        <div className="option-icons text-3xl bg-yellow-500 rounded-full">
                           <HiArrowSmRight className="icons" />
                        </div>
                        <div className="w-48 content-btn">
                           <h3>Portfolio</h3>
                        </div>
                     </a>
                  </Link>
                  <Link href="/about">
                     <a className="flex items-center space-x-10 text-white text-lg uppercase">
                        <div className="option-icons text-3xl bg-yellow-500 rounded-full">
                           <HiArrowSmRight className="icons" />
                        </div>
                        <div className="w-40 content-btn">
                           <h3>About</h3>
                        </div>
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
