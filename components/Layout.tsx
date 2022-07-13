import React, { ReactElement, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdBriefcase } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { GoLightBulb } from 'react-icons/go';
import { MdDarkMode } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { NavLink } from '@components/index';
import { LayoutProps } from '@typing';

const MainLayout = ({
   darkMode,
   setDarkMode,
   children,
}: LayoutProps): ReactElement => {
   const changeMode = () => {
      setDarkMode(!darkMode);
   };
   return (
      <div className="layout w-full h-screen max-w-full -z-50 py-5">
         {darkMode ? (
            <div
               className="dark-light fixed top-5 right-5 w-12 h-12 rounded-full bg-zinc-700"
               onClick={changeMode}
            >
               <GoLightBulb className="text-3xl text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
         ) : (
            <div
               className="dark-light fixed top-5 right-5 w-12 h-12 rounded-full bg-black"
               onClick={changeMode}
            >
               <MdDarkMode className="text-3xl text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
         )}
         <div className="fixed z-50 bottom-0  lg:right-5 lg:bottom-1/2 lg:translate-y-1/2">
            <div className="flex space-x-5 h-14 w-screen items-center justify-around lg:w-0 lg:h-auto lg:flex-col lg:items-end lg:space-y-5 nav">
               <NavLink
                  href="/"
                  exact={true}
                  className={`nav-list w-10 h-10 ss:w-14 ss:h-14`}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        Home
                     </h2>
                     <AiFillHome className="nav-icons text-lg ss:text-2xl block" />
                  </>
               </NavLink>
               <NavLink
                  href="/portfolio"
                  exact={true}
                  className={`nav-list w-10 h-10 ss:w-14 ss:h-14 `}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        Portfolio
                     </h2>
                     <IoMdBriefcase className="nav-icons text-lg ss:text-2xl" />
                  </>
               </NavLink>
               <NavLink
                  href="/about"
                  exact={true}
                  className={`nav-list w-10 h-10 ss:w-14 ss:h-14 `}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        About
                     </h2>
                     <BsFillPersonFill className="nav-icons text-lg ss:text-2xl" />
                  </>
               </NavLink>
               <NavLink
                  href="/contact"
                  exact={true}
                  className={`nav-list w-10 h-10 ss:w-14 ss:h-14`}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        Contact
                     </h2>
                     <MdEmail className="nav-icons text-lg ss:text-2xl" />
                  </>
               </NavLink>
            </div>
         </div>
         {children}
      </div>
   );
};

export default MainLayout;
