import React from 'react';
import Link from 'next/link';
import { HiArrowSmRight } from 'react-icons/hi';

type Props = {
   href: string;
   name: string;
   rotate: string;
};

const Button = ({ href, name, rotate }: Props) => {
   return (
      <Link href={href}>
         <a className="btn-link text-white font-semibold">
            <div className="icon">
               <HiArrowSmRight
                  className={`absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 text-2xl -translate-x-3 ${rotate}`}
               />
            </div>
            <div>
               <h3 className="content">{name}</h3>
            </div>
         </a>
      </Link>
   );
};

export default Button;
