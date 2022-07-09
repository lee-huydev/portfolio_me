import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
type Props = {
   image?: string[];
};

const Slider = ({ image }: Props) => {
   const [screen, setScreen] = useState<number>(window.screen.width);
   useEffect(() => {
      window.addEventListener('resize', () => {
         setScreen(window.innerWidth);
      });
   }, []);
   return (
      <Carousel
         autoPlay
         infiniteLoop
         showThumbs={screen >= 550 ? true : false}
         thumbWidth={screen >= 670 ? 80 : screen >= 500 ? 50 : 0}
      >
         {image?.map((item, index) => (
            <div key={index}>
               <img src={item} alt="" />
            </div>
         ))}
      </Carousel>
   );
};

export default Slider;
