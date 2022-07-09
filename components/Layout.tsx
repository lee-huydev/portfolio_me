import React, { ReactElement } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdBriefcase } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { NavLink } from '@components/index';
import { LayoutProps } from '@typing';
const MainLayout = ({ children, theme }: LayoutProps): ReactElement => {
   return (
      <div className="layout w-full h-screen max-w-full bg-zinc-900 -z-50 py-5">
         <div className="fixed z-10 bottom-0  lg:right-5 lg:bottom-1/2 lg:translate-y-1/2">
            <div className="flex space-x-5 h-14 w-screen bg-slate-800 items-center justify-around lg:w-0 lg:h-auto lg:flex-col lg:items-end lg:space-y-5 nav">
               <NavLink
                  href="/"
                  exact={true}
                  className={`${theme.bg} nav-list w-10 h-10 ss:w-14 ss:h-14`}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        Home
                     </h2>
                     <AiFillHome className="nav-icons text-white text-lg ss:text-2xl block" />
                  </>
               </NavLink>
               <NavLink
                  href="/portfolio"
                  exact={true}
                  className={`${theme.bg} nav-list w-10 h-10 ss:w-14 ss:h-14 `}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        Portfolio
                     </h2>
                     <IoMdBriefcase className="nav-icons text-white text-lg ss:text-2xl" />
                  </>
               </NavLink>
               <NavLink
                  href="/about"
                  exact={true}
                  className={`${theme.bg} nav-list w-10 h-10 ss:w-14 ss:h-14 `}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        About
                     </h2>
                     <BsFillPersonFill className="nav-icons text-white text-lg ss:text-2xl" />
                  </>
               </NavLink>
               <NavLink
                  href="/contact"
                  exact={true}
                  className={`${theme.bg} nav-list w-10 h-10 ss:w-14 ss:h-14`}
               >
                  <>
                     <h2 className="hidden uppercase nav-content lg:block">
                        Contact
                     </h2>
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
