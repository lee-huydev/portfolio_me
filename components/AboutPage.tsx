import React from 'react';
import { Header, Slide } from '@components/index';
import meData from '@fixtures/me.json';
import { ThemeProps } from '@typing';
type Props = {
   theme?: ThemeProps;
};

const AboutPage = ({ theme }: Props) => {
   return (
      <>
         <Slide />
         <Header textInline="About" textOuline="Resume" dataAos={false}>
            <>
               <div className="info flex px-5">
                  <div className="basis-3/5">
                     <h3 className="w-full uppercase text-3xl font-bold">
                        Personal infors
                     </h3>
                     <ul className="flex flex-wrap justify-start items-center w-full mt-5">
                        {Object.entries(meData).map(( [key, value]) => (
                           <li key={key} className="basis-1/2 mb-3 font-normal">
                              <span className="text-gray-400"> {key.replace("-", " ")}: </span>
                              {value}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="basis-2/5"></div>
               </div>
            </>
         </Header>
      </>
   );
};

export default AboutPage;
