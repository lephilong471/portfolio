import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { MUIBox } from "../../MUI";
import ImageSvg from "react-inlinesvg";
import { BREAK_POINT, style } from "@/config";
import dynamic from "next/dynamic";

const WindowWidthWrapper = dynamic(() => import("@/config/hooks/useWindowWidthWrapper"), { ssr: false });

const SlideWrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   transition: all 0.5s ease;
   cursor: pointer;

   .image-slider_custom {
      min-width: 100%;
      width: auto !important;
   }

   @keyframes next-slide{
      40%{
         transform: translateX(50px);
      }

      80%{
         transform: translateX(-20px) translateY(-20px);
         z-index: 1;
      }
   }
`;

const Slide = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: white;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 24px;
`;

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: start;
   margin-top: 20px;
`;

const AboutSlider = ({ slides }) => {
   const [nextState, setNextState] = useState(Array(slides.length).fill(false))

   const [currentIndex, setCurrentIndex] = useState(0);

   // const goToNext = useCallback(() => {
   //    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
   // }, [slides.length]);

   const goToNext = () => {
      setNextState(prevArr => {
            const newArr = [...prevArr]
            newArr[currentIndex] = true
            return newArr
         }
      )

      setTimeout(() => {
         setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
         setNextState([false, false, false])
      }, 800)
   }

   const goToPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
   };

   const goToSlide = (index) => {
      setCurrentIndex(index);
   };

   useEffect(() => {
      const timer = setInterval(() => {
         goToNext();
      }, 5000);

      return () => clearInterval(timer);
   }, [goToNext]);

   return (
      <>
         <WindowWidthWrapper>
            {(screenWidth) => (
               <MUIBox sx={{ width: "100%", mt: { xs: 5, md: 0 } }}>
                  <MUIBox
                     sx={{
                        width: "100%",
                        height:
                           screenWidth > BREAK_POINT.MD ? "405px" : screenWidth > BREAK_POINT.SM ? "605px" : "300px",
                        position: "relative",
                        mx: "auto",
                     }}
                  >
                     {slides.map((slide, index) => {
                        let offset = index - currentIndex;
                        if (offset < 0) offset += slides.length;

                        return (
                           <SlideWrapper
                              key={index}
                              onClick={() => goToSlide(index)}
                              style={{
                                 zIndex: slides.length - offset,
                                 transform: `translate(${-(offset * 10)}px, ${-(offset * 10)}px)`,
                                 opacity: offset === 0 ? 1 : 0.7,
                                 left: 0,
                                 bottom: 0,
                                 animation: nextState[index] ? 'next-slide 1.2s' : ''
                              }}
                           >
                              <Slide>
                                 <Image
                                    className="image-slider_custom"
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    style={{
                                       objectFit: "cover",
                                    }}
                                 />
                              </Slide>
                           </SlideWrapper>
                        );
                     })}
                  </MUIBox>
                  <ButtonWrapper>
                     <MUIBox
                        onClick={goToPrev}
                        className="custom-prev"
                        sx={{
                           cursor: "pointer",
                           color: style.TEXT_COLOR_GENERAL,
                           width: "30px",
                           display: "block !important",
                        }}
                     >
                        <ImageSvg src="/images/icons/ArrowBackRoundedIcon.svg" />
                     </MUIBox>
                     <MUIBox
                        onClick={goToNext}
                        className="custom-next"
                        sx={{
                           cursor: "pointer",
                           color: style.TEXT_COLOR_GENERAL,
                           width: "30px",
                           display: "block !important",
                        }}
                     >
                        <ImageSvg src="/images/icons/ArrowForwardRoundedIcon.svg" />
                     </MUIBox>
                  </ButtonWrapper>
               </MUIBox>
            )}
         </WindowWidthWrapper>
      </>
   );
};

export default AboutSlider;
