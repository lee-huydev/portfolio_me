import React, { useState } from 'react';
import { ThemeProps } from '@typing';
import PortData from '@fixtures/portfolio.json';
import { PortItem, DataRender, Modals } from '@typing';
import { Modal, Header } from '@components/index';
import {
   CSS_JS,
   SCSS_NEXT,
   NEXT_TAILWIND,
   RES_API,
   ALL,
} from '@constant/index';
import Slide from './Slide';

interface Props {
   theme?: ThemeProps;
}
const Portfolio = ({ theme }: Props) => {
   const bg = theme?.bg;
   const initState = {
      data: [...PortData],
      filter: { type: 'all' },
      filters: {
         [ALL]: (item: PortItem) => item,
         [CSS_JS]: (item: PortItem) => item.type === CSS_JS,
         [SCSS_NEXT]: (item: PortItem) => item.type === SCSS_NEXT,
         [NEXT_TAILWIND]: (item: PortItem) => item.type === NEXT_TAILWIND,
         [RES_API]: (item: PortItem) => item.type === RES_API,
      },
   };
   const [dataRender, setDataRender] = useState<DataRender>(initState);
   const [modals, setDataModals] = useState<Modals>({
      data: null,
      status: false,
   });
   const { data, filter, filters } = dataRender;
   const handleOnClick = (keyName: any): void => {
      console.log(keyName);
      setDataRender({
         ...initState,
         data: PortData.filter(filters[keyName]),
         filter: {
            type: keyName,
         },
      });
   };
   const handleModal = (item: PortItem) => {
      setDataModals({
         ...modals,
         data: item,
         status: true,
      });
   };
   modals.status && document.body.classList.add('hide-scrollbar');
   return (
      <>
         <Slide />
         <Header textInline="Portfolio" textOuline="Works" dataAos="fade-up">
            <>
               <div className="filter grid grid-cols-2 gap-3 px-5 text-xs ss:grid-cols-3 sm:text-sm lg:px-0 lg:flex lg:justify-center lg:space-x-5">
                  {Object.keys(filters).map((key, index) => (
                     <button
                        className={`${
                           filter.type === key ? 'bg-yellow-500' : 'bg-zinc-800'
                        } `}
                        key={index}
                        onClick={() => handleOnClick(key)}
                     >
                        {key.toUpperCase()}
                     </button>
                  ))}
               </div>
               <div className="container-items max-w-6xl pt-10 px-4 lg:px-20 pb-20 xl:px-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {data.map((item: PortItem) => (
                     <div
                        key={Math.floor(Math.random() * 1000)}
                        className="item relative"
                        onClick={() => handleModal(item)}
                     >
                        <span className="block w-full ">
                           <img
                              className="object-fill rounded-lg w-110 h-230"
                              src={item.image[0]}
                              alt={item.name}
                           />
                        </span>
                        <div className="item-bg">
                           <h3 className="text-white item-name">
                              {' '}
                              {item.name}{' '}
                           </h3>
                        </div>
                     </div>
                  ))}
               </div>
            </>
         </Header>
         {modals.status && (
            <Modal modals={modals} setDataModals={setDataModals} />
         )}
      </>
   );
};

export default Portfolio;
