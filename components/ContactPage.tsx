import { ThemeProps } from '@typing';
import React from 'react';
import { Header, Form } from '@components/index';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail, MdPhoneInTalk } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link';

type Props = {
   theme?: ThemeProps;
};

const ContactPage = ({ theme }: Props) => {
   return (
      <Header
         textInlineFirst="Get"
         textInlineSecond="In touch"
         textOuline="Contact"
         dataAos="fade-up"
      >
         <div className="contact-container w-full max-w-5xl px-5">
            <div className="flex gap-3 flex-col md:flex-row">
               <div className="left basis-1/3 pb-5 md:pb-0">
                  <h3 className="text-2xl font-bold">DON&apos;T BE SHY !</h3>
                  <p className="mt-3 leading-relaxed">
                     Feel free to get in touch with me. I am always open to
                     discussing new projects, creative ideas or opportunities to
                     be part of your visions.
                  </p>
                  <ul className="address flex flex-col mt-5">
                     <li className="flex items-center mb-5">
                        <span className="text-3xl mr-5">
                            <FaMapMarkerAlt />
                        </span>
                        <h3>
                           <span className="uppercase">
                              Address
                           </span>{' '}
                           <br />
                           Can Tho City
                        </h3>
                     </li>
                     <li className="flex items-center mb-5">
                        <span className="text-3xl mr-5">
                            <MdEmail />
                        </span>
                        <h3>
                           <span className="uppercase">
                              Email
                           </span>
                           <br />
                           lee.huydev@gmail.com
                        </h3>
                     </li>
                     <li className="flex items-center mb-5">
                        <span className="text-3xl mr-5">
                            <MdPhoneInTalk />
                        </span>
                        <h3>
                           <span className="uppercase">
                              Phone
                           </span>
                           <br />
                           0982458xxx
                        </h3>
                     </li>
                     <li className="flex gap-3">
                        <Link href="https://facebook.com/lee.huy.xxx">
                            <a className='w-10 h-10 rounded-full relative'>
                            <GrFacebookOption className='text-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'/>
                            </a>
                        </Link>
                        <Link href="https://github.com/lee-huydev">
                            <a className="w-10 h-10 rounded-full relative">
                                <AiFillGithub className='text-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'/>
                            </a>
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="right basis-2/3">
                    <Form />
               </div>
            </div>
         </div>
      </Header>
   );
};

export default ContactPage;
