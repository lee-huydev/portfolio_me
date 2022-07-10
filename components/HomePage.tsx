import Link from 'next/link';
import React from 'react';
import { Slide, Button } from '@components/index';
import { HiArrowSmRight } from 'react-icons/hi';
import { ThemeProps } from '@typing';
interface Props {
   theme?: ThemeProps;
}
const HomePage = ({ theme }: Props) => {
   const bg = theme?.bg;
   return (
      <div className="w-full h-screen session-home">
         <Slide />
         <div className="color-block hidden lg:block 2xl:max-w-512"></div>
         <div
            className="flex flex-col items-center w-full h-screen lg:flex-row lg:space-x-10"
            data-aos="fade-up"
         >
            <div className="flex items-center justify-center w-full h-auto pt-14 lg:w-1/3 lg:h-full z-50 lg:ml-14 lg:py-14">
               <div className="bg-main-img bg-cover bg-center bg-no-repeat w-52 h-52 rounded-full lg:h-auto lg:w-full lg:max-h-full lg:rounded-3xl lg:aspect-7/10 2xl:w-512"></div>
            </div>
            <div
               className={`${bg} flex flex-col flex-grow items-center space-y-7 mt-5 px-5 lg:pr-20 lg:justify-start lg:items-start`}
            >
               <h1 className="text-white text-2xl font-bold sm:text-3xl lg:text-5xl">
                  Hi! I&apos;m Le Quoc Huy <br />
                  <span className=" font-bold text-xl sm:text-2xl lg:text-4xl">
                     Web Developer !
                  </span>
               </h1>
               <p className="text-white text-sm ss:pb-0 sm:text-lg max-w-2xl lg:text-xl 2xl:max-w-3xl">
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
               <div className="flex space-x-5 pb-24 sm:pb-1">
                  <Button
                     href={'/portfolio'}
                     name={'Portfolio'}
                     rotate="rotate-0"
                  />
                  <Button
                     href={'/about'}
                     name={'About'}
                     rotate="rotate-0"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
