import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

type Props = {
   href: string;
   name: string;
   link: boolean;
   Icon: IconType,
   animate?: string
};

const Button = ({ href, name, link, Icon, animate }: Props) => {
   return link ? (
      <Link href={href}>
         <a className="btn-link font-semibold">
            <div className="icon">
               <Icon
                  className={`absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 text-2xl -translate-x-3`}
               />
            </div>
            <div>
               <h3 className="content">{name}</h3>
            </div>
         </a>
      </Link>
   ) : (
      <div className="btn-link font-semibold">
         <div className="icon">
            <Icon
               className={`absolute right-2.5 sm:right-4 top-1/4 -translate-y-1/2 text-2xl -translate-x-3 ${animate}`}
            />
         </div>
         <div>
            <h3 className="content">{name}</h3>
         </div>
      </div>
   );
};

export default Button;
