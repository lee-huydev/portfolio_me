import React from 'react';
import Link from 'next/link';
import { HiArrowSmRight } from 'react-icons/hi';

type Props = {
    href: string,
    name: string
};

const Button = ({ href, name }: Props) => {
   return (
      <Link href={href}>
         <a className="flex items-center space-x-10 text-white text-lg uppercase">
            <div className="option-icons text-2xl ss:text-3xl bg-yellow-500 rounded-full">
               <HiArrowSmRight className="icons" />
            </div>
            <div className="w-36 text-xs ss:text-sm ss:w-44 content-btn">
               <h3>{name}</h3>
            </div>
         </a>
      </Link>
   );
};

export default Button;
