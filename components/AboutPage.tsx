import React from 'react';
import { IoBookSharp } from 'react-icons/io5';
import { IoMdDownload } from 'react-icons/io'
import { Header, Slide, Button } from '@components/index';
import meData from '@fixtures/me.json';
import { ThemeProps } from '@typing';
type Props = {
   theme?: ThemeProps;
};

const AboutPage = ({ theme }: Props) => {
   const { person, skills, education } = meData;
   return (
      <>
         <Slide />
         <Header textInlineFirst='About' textInlineSecond="Me" textOuline="Resume" dataAos={false}>
            <>
               <div className="info flex px-5 md:space-x-5">
                  <div className="basis-1/2" data-aos="fade-right">
                     <h3 className="w-full uppercase text-xl ss:text-2xl font-bold">
                        Personal infors
                     </h3>
                     <ul className="flex flex-wrap justify-start items-center w-full mt-5">
                        {Object.entries(person).map(([key, value]) => {
                           if (key === 'Skills') {
                              return null;
                           }
                           return (
                              <li
                                 key={key}
                                 className="basis-full ss:basis-1/2 mb-3 font-normal"
                              >
                                 <span className="">
                                    {' '}
                                    {key.replace('-', ' ')}:{' '}
                                 </span>
                                 {value}
                              </li>
                           );
                        })}
                     </ul>
                     <div className="mt-5 pb-10 md:pb-0">
                        <Button
                           Icon={IoMdDownload}
                           link={true}
                           href="/"
                           name="Download cv"
                        />
                     </div>
                  </div>
                  <div
                     className="items-right basis-1/2 grid grid-cols-2 gap-4"
                     data-aos="fade-left"
                  >
                     <div className="item">
                        <div className="flex items-start">
                           <h4 className="text-3xl ss::text-5xl">5</h4>
                           <span className="text-xl ss::text-2xl">+</span>
                        </div>
                        <h3 className="text-md uppercase pl-5 flex items-center">
                           <span className="w-7 h-0.5 rounded mr-2"></span>
                           Months of study
                        </h3>
                     </div>
                     <div className="item">
                        <div className="flex items-start">
                           <h4 className="text-3xl ss::text-5xl">4</h4>
                           <span className="text-xl ss::text-2xl">+</span>
                        </div>
                        <h3 className="text-md uppercase pl-5 flex items-center">
                           <span className="w-7 h-0.5 rounded mr-2"></span>
                           Completed Project
                        </h3>
                     </div>
                     <div className="item">
                        <div className="flex items-start">
                           <h4 className="text-3xl ss::text-5xl">1</h4>
                           <span className="text-xl ss::text-2xl">+</span>
                        </div>
                        <h3 className="text-md uppercase pl-5 flex items-center">
                           <span className="w-7 h-0.5 rounded mr-2"></span>
                           Award Won
                        </h3>
                     </div>
                  </div>
               </div>
               <div className="skills mt-16 ss::mt-32">
                  <h3 className="text-2xl uppercase text-center font-bold mb-5">
                     My Skills
                  </h3>
                  <div className="grid p-2 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5 sm::gap-10">
                     {skills.map((data, index) => (
                        <div
                           key={index}
                           className="flex flex-col justify-center items-center space-y-2"
                           data-aos="fade-up"
                        >
                           <span className="inline-block rounded-full p-5">
                              <img
                                 src={`${data.image}/${data.name.replace(
                                    ' ',
                                    ''
                                 )}.png`}
                                 alt=""
                                 className="w-16 sm:w-20 h-auto object-cover"
                              />
                           </span>
                           <h3 className="uppercase text-sm sm:text-md">{data.name}</h3>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="education mt-16 sm:mt-32" >
                  <h3 className="text-2xl uppercase text-center font-bold mb-10">
                     Education
                  </h3>
                  <div className="resume grid grid-cols-1 px-5 sm:grid-cols-2 gap-10 pb-20" data-aos="fade-up">
                     {education.map((item, index) => (
                        <div key={index} className="w-fit h-fit">
                           <div className="icons relative w-9 h-9 rounded-full z-10">
                              <IoBookSharp className="text-2xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" />
                           </div>
                           <div className="content-education flex flex-col pl-12 -mt-8 relative">
                              <p className="py-px px-2 rounded-lg w-fit mb-3">
                                 {item.time}
                              </p>
                              <h2 className="uppercase mb-3 font-medium">
                                 {item.school}{' '}
                                 <span className="">
                                    - {item.type}
                                 </span>
                              </h2>
                              <h3>{item.content}</h3>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </>
         </Header>
      </>
   );
};

export default AboutPage;
