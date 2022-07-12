import React from 'react';
import { Slider } from '@components/index';
import { Modals } from '@typing';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import Script from 'next/script';
type Props = {
   modals: Modals;
   setDataModals: React.Dispatch<React.SetStateAction<Modals>>;
};

const Modal = ({ modals, setDataModals }: Props) => {
   const { data } = modals;
   return (
      <>
         <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'/>
         <div className="modal fixed z-10 w-full overflow-y-auto overflow-x-hidden h-screen top-0 left-0">
            <div className="container-modal pt-5 w-full max-w-6xl mx-auto lg:pt-36 px-4">
               <div className="flex flex-col lg:flex-row px-2 md:px-3 lg:px-5 w-full bg-stone-900 justify-center items-start pt-5 pb-24 lg:pb-10 lg:space-x-5 rounded-md relative">
                  <div className="absolute right-0 top-0 p-5 translate-x-9 -translate-y-9 rounded-full">
                     <IoMdClose
                        className="icon text-3xl lg:text-4xl rounded-full bg-zinc-700 cursor-pointer"
                        onClick={() =>
                           setDataModals({ ...modals, status: false })
                        }
                     />
                  </div>
                  <div className="px-2 lg:basis-1/2">
                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mt-3 mb-2">
                       {data?.name}
                     </h3>
                     <div className="br"></div>
                     <div className="mt-10">
                        <Slider image={data?.image}/>
                     </div>
                  </div>
                  <div className="px-2 lg:basis-1/2">
                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mt-3 mb-2">
                        Detail
                     </h3>
                     <div className="br"></div>
                     <div className="flex flex-col mt-10 gap-3">
                        <p className="">
                           <span className="font-medium">
                              Introduction -
                           </span>{' '}
                           {data?.content}
                        </p>
                        <p className="">
                           <span className="font-medium">
                              Feature -
                           </span>{' '}
                           {data?.feature}
                        </p>
                        <p className="">
                           <span className="font-medium">
                              Frontend -{' '}
                           </span>
                           {data?.fe}
                        </p>
                        <p className="">
                           <span className="font-medium">
                              Backend -{' '}
                           </span>
                           {data?.be}
                        </p>
                        <p className="">
                           <span className="font-medium">
                              Create -{' '}
                           </span>
                           {data?.create}
                        </p>
                        <p className="">
                           <span className="font-medium">
                              Demo -{' '}
                           </span>
                           <Link href={data?.link || '/'}>
                              <a> {data?.link}</a>
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Modal;
