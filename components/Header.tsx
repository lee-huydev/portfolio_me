import React, { ReactElement } from 'react';

type Props = {
   textInlineFirst: string,
   textInlineSecond: string,
   textOuline: string,
   children: ReactElement,
   dataAos: string | boolean
};

const Header = ({ textInlineFirst, textInlineSecond, textOuline, children, dataAos }: Props): ReactElement => {
   return (
      <div className={`w-full max-w-5xl mx-auto`} data-aos={dataAos}>
        <div className="text-header text-center p-10 sm:p-20">
               <h1 className="text-inline text-4xl sm:text-5xl text-white uppercase">
                  <span className="first">{textInlineFirst}</span>{' '}
                  <span className="second">{textInlineSecond}</span>
               </h1>
               <span className="text-outline text-7xl sm:text-8xl uppercase">
                  {textOuline}
               </span>
            </div>
         {children}
      </div>
   );
};

export default Header;
