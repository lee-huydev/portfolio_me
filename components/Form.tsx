import React, { useState } from 'react';
import {BiMailSend} from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import { Button, Loading } from '@components/index';
import { ModalContact } from '@typing';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdOutlineError } from 'react-icons/md';
const Form = (): JSX.Element => {
   const initState = {
      loading: false,
      modal: false,
      status: false,
      message: '',
   };
   const [modals, setModals] = useState<ModalContact>(initState);
   const handleSubmit = (e: any) => {
      e.preventDefault();
      setModals({ ...modals, modal: true, loading: true });
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      emailjs.sendForm(serviceId, templateId, e.target, apiKey).then(
         (result) => {
            const content =
               "We've sent a confirmation to your e-mail for verification.";
            setModals({
               ...modals,
               loading: false,
               modal: true,
               status: true,
               message: content,
            });
            console.log(result.text);
         },
         (error) => {
            console.log(error.text);
            const content =
               'E-mail has not been sent, there may be an error. Please try again!';
            setModals({
               ...modals,
               loading: false,
               modal: true,
               status: false,
               message: content,
            });
         }
      );
      e.target.reset();
   };
   return (
      <>
         {modals.modal && (
            <div className="modal-contact w-full h-screen z-50 fixed top-0 left-0">
               {modals.loading ? (
                  <div className="flex w-full h-screen items-center justify-center">
                     <Loading />
                  </div>
               ) : (
                  <div className="w-full max-w-lg mx-auto pt-230">
                     <div className="modal-container bg-white w-full h-64 rounded-2xl relative">
                        <div className="flex flex-col">
                           {!modals.loading && (
                              <>
                                 {modals.status ? (
                                    <>
                                       <span className="inline-block absolute left-1/2 -translate-x-1/2 -top-10">
                                          <BsFillCheckCircleFill className="text-8xl text-green-500 bg-white rounded-full" />
                                       </span>
                                       <div className="text-black text-center">
                                          <h3 className="text-4xl mt-16 font-medium">
                                             Success!
                                          </h3>
                                          <p className="mt-3">
                                             {modals.message}
                                          </p>
                                          <button
                                             className="mt-10 w-64 h-10 border  transition-colors rounded-full"
                                             onClick={() =>
                                                setModals(initState)
                                             }
                                          >
                                             OK
                                          </button>
                                       </div>
                                    </>
                                 ) : (
                                    <>
                                       <span className="inline-block absolute left-1/2 -translate-x-1/2 -top-10">
                                          <MdOutlineError className="text-8xl text-red-500 bg-white rounded-full" />
                                       </span>
                                       <div className="text-black text-center">
                                          <h3 className="text-4xl mt-16 font-medium">
                                             Error!
                                          </h3>
                                          <p className="mt-3">
                                             {modals.message}
                                          </p>
                                          <button
                                             className="mt-10 w-64 h-10 border hover:bg-yellow-500 transition-colors border-yellow-500 rounded-full"
                                             onClick={() =>
                                                setModals(initState)
                                             }
                                          >
                                             OK
                                          </button>
                                       </div>
                                    </>
                                 )}
                              </>
                           )}
                        </div>
                     </div>
                  </div>
               )}
            </div>
         )}
         <form onSubmit={handleSubmit} className="form flex flex-col gap-7">
            <label className="flex flex-col sm:flex-row gap-6 sm:gap-4">
               <input
                  required
                  placeholder="your name"
                  type="text"
                  className="basis-1/2 rounded-2xl px-5 py-3 text-lg font-light"
                  name="name"
               />
               <input
                  required
                  placeholder="your email"
                  type="email"
                  className="basis-1/2 rounded-2xl px-5 py-3 text-lg font-light"
                  name="from_email"
               />
            </label>
            <label>
               <input
                  required
                  placeholder="your subject"
                  type="text"
                  className="w-full rounded-2xl px-5 py-3 text-lg font-light"
                  name="subject"
               />
            </label>
            <label>
               <textarea
                  required
                  placeholder="your message"
                  rows={8}
                  className="w-full rounded-2xl px-5 py-3 text-lg font-light"
                  name="message"
               />
            </label>
            <label className=" pb-24 md:pb-0">
               <button type="submit">
                  <Button
                     Icon={BiMailSend}
                     href=""
                     link={false}
                     name="Send Message"
                     animate="animate"
                  />
               </button>
            </label>
         </form>
      </>
   );
};

export default Form;
