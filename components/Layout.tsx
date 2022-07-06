import React, { ReactElement } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdBriefcase } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { NavLink } from '@components/index';
import { LayoutProps } from '@typing';
const MainLayout = ({ children }: LayoutProps): ReactElement => {
   let bgColor = 'bg-zinc-700';
   console.log('layout: ' + 're-render');
   return (
      <div className="w-full h-screen bg-zinc-900 -z-50">
         <div className="fixed bottom-0  lg:right-5 lg:bottom-1/2 lg:translate-y-1/2">
            <div className="flex space-x-5 h-14 w-screen bg-slate-800 items-center justify-around lg:w-0 lg:h-auto lg:flex-col lg:items-end lg:space-y-5 nav">
               <NavLink
                  href="/"
                  exact={true}
                  className={`${bgColor} nav-list w-10 h-10 ss:w-14 ss:h-14`}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">Home</h2>
                     <AiFillHome className="nav-icons text-white text-lg ss:text-2xl block" />
                  </>
               </NavLink>
               <NavLink
                  href="/portfolio"
                  exact={true}
                  className={`${bgColor} nav-list w-10 h-10 ss:w-14 ss:h-14 `}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">Portfolio</h2>
                     <IoMdBriefcase className="nav-icons text-white text-lg ss:text-2xl" />
                  </>
               </NavLink>
               <NavLink
                  href="/about"
                  exact={true}
                  className={`${bgColor} nav-list w-10 h-10 ss:w-14 ss:h-14 `}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">About</h2>
                     <BsFillPersonFill className="nav-icons text-white text-lg ss:text-2xl" />
                  </>
               </NavLink>
               <NavLink
                  href="/contact"
                  exact={true}
                  className={`${bgColor} nav-list w-10 h-10 ss:w-14 ss:h-14`}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">Contact</h2>
                     <MdEmail className="nav-icons text-white text-lg ss:text-2xl" />
                  </>
               </NavLink>
            </div>
         </div>
         {children}
      </div>
   );
};

export default MainLayout;
