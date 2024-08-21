"use client";

import { MUIBox } from "@/components/MUI";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import Pic3 from "@/public/images/about/pic3.jpg";
import Pic2 from "@/public/images/about/pic2.jpg";
import Pic1 from "@/public/images/about/pic1.jpg";
import styled from "styled-components";
import WindowWidthWrapper from "@/config/hooks/useWindowWidthWrapper";
import { BREAK_POINT } from "@/config";
const SliderZoomInStyled = styled("div")`
   position: relative;
   .MuiBox-root {
      min-height: 480px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      animation: zoom-in 15s infinite;
      transform-origin: left;
   }

   @keyframes zoom-in {
      0% {
         transform: scale(1.15, 1.15);
      }

      100% {
         transform: scale(1, 1);
      }
   }
`;
const SliderZoomIn = () => {
   return (
      <WindowWidthWrapper>
         {(screenWidth) => (
         <SliderZoomInStyled style={{
            marginTop: screenWidth > BREAK_POINT.MD ? '90px' : '0px' 
         }}>
            <Swiper
               modules={[Autoplay, EffectFade]}
               effect="fade"
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
               }}
               loop={true}
            >
               <SwiperSlide>
                  <MUIBox
                     sx={{
                        backgroundImage: `url(${Pic1.src})`,
                     }}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <MUIBox
                     sx={{
                        backgroundImage: `url(${Pic2.src})`,
                     }}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <MUIBox
                     sx={{
                        backgroundImage: `url(${Pic3.src})`,
                     }}
                  />
               </SwiperSlide>
            </Swiper>
         </SliderZoomInStyled>
      )}
      </WindowWidthWrapper>
   )
};

export default SliderZoomIn;
