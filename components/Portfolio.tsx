import React, { useState } from 'react';
import { DataRender, Modals, Project } from '@typing';
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
   project?: Project[];
}
const Portfolio = ({ project }: Props) => {
   const initState = {
      data: [...project || []],
      filter: { type: 'all' },
      filters: {
         [ALL]: (item: Project) => item,
         [CSS_JS]: (item: Project) => item.type === CSS_JS,
         [SCSS_NEXT]: (item: Project) => item.type === SCSS_NEXT,
         [NEXT_TAILWIND]: (item: Project) => item.type === NEXT_TAILWIND,
         [RES_API]: (item: Project) => item.type === RES_API,
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
         data: project?.filter(filters[keyName]) || [],
         filter: {
            type: keyName,
         },
      });
   };
   const handleModal = (item: Project) => {
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
         <Header
            textInlineFirst="My"
            textInlineSecond="Portfolio"
            textOuline="Works"
            dataAos="fade-up"
         >
            <>
               <div className="filter grid grid-cols-2 gap-3 px-5 text-xs ss:grid-cols-3 sm:text-sm lg:px-0 lg:flex lg:justify-center lg:space-x-5">
                  {Object.keys(filters).map((key, index) => (
                     <button
                        className={`${filter.type === key ? 'active' : ''} `}
                        key={index}
                        onClick={() => handleOnClick(key)}
                     >
                        {key.toUpperCase()}
                     </button>
                  ))}
               </div>
               <div className="container-items max-w-6xl pt-10 px-4 lg:px-20 pb-20 xl:px-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {data.map((item: Project) => (
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
