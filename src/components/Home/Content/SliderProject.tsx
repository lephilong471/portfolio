"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade, Parallax } from "swiper/modules";
import { MUIBox, MUITypography } from "@/components/MUI";
import styled from "styled-components";
import CatSmile from "@/public/images/about/cat-smile.jpg";
import CatSleep from "@/public/images/about/cat-sleep.jpg";
// import CarouselShipViewTop from "@/public/images/slider/aerial-view-top.jpg";
// import CarouselTruck from "@/public/images/slider/truck.jpg";
// import CarouselFuturistic from "@/public/images/slider/futuristic-truck.jpg";
// import CarouselGlobal from "@/public/images/slider/global-logistic-airplane.jpg";
import ImageSvg from "react-inlinesvg";
// import Image from "next/image";
import { FONT_FAMILY, style } from "@/config";
import Link from "next/link";
import AOS from "aos";
import { keyframes } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PATH} from "@/config/routes";


const SliderProjectStyled = styled("div")`
   width: 100%;
   height: 100%;
   overflow: hidden;
   .custom-pagination .swiper-pagination-bullet {
      cursor: pointer;
      color: #fff;
      background: transparent;
   }

   .custom-pagination .swiper-pagination-bullet-active {
      color: #fff;
      background: transparent;
      position: relative;
      border: 1.5px solid #fff;
   }

   .custom-bullet {
      margin-top: 12px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .swiper-pagination-bullet {
      opacity: 1;
   }
   .custom-bullet-item {
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
      display: block;
   }

   .custom-nav {
      width: 100%;
      position: absolute;
      left: clamp(5rem, 14vw, 11.25rem);
      transform: translateY(-50%);
      z-index: 10;
      align-items: center;
      justify-content: start;
      bottom: clamp(1rem, 3vw, 3rem);
      gap: 15px;
   }
   .custom-prev {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .custom-next {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .icon-last {
      display: none;
   }

   .custom-prev:hover .icon-first,
   .custom-next:hover .icon-first {
      display: none;
   }

   .custom-prev:hover .icon-last,
   .custom-next:hover .icon-last {
      display: block;
   }
`;

const slideInAnimation = keyframes`
  from {
    background-position: 100% 0;
  }
  to {
    background-position: 0 0;
  }
`;

const slideOutAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
`;

const styleTransition = {
   cursor: "pointer",
   color: "#fff",
   width: "60px",
   height: "60px",
   position: "relative",
   overflow: "hidden",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   backgroundSize: "200% 100%",
   backgroundImage: "linear-gradient(to right, white 50%, transparent 50%)",
   backgroundPosition: "100% 0",
   transition: "background-position 0.3s ease-in-out",

   "&:hover": {
      animation: `${slideInAnimation} 0.3s forwards`,
      color: style.TEXT_COLOR_GENERAL,
   },

   "&:not(:hover)": {
      animation: `${slideOutAnimation} 0.3s forwards`,
   },

   "& > *": {
      position: "relative",
      zIndex: 1,
   },
};

const dataCarousel = [
   {
      image: CatSmile,
      title: "Về thông tin cơ bản",
      path: "",
   },
   {
      image: CatSleep,
      title: "Kiến thức chuyên môn",
      path: "",
   },
];

const SliderProject = () => {
   const { t } = useTranslation();
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <SliderProjectStyled //
         data-aos="fade-up"
         data-aos-delay="0"
         data-aos-duration="2000"
         data-aos-once="true"
      >
         <MUIBox sx={{ height: { xs: "480px", sm: "708px", md: "506px" } }}>
            <Swiper
               modules={[Pagination, Navigation, Autoplay, EffectFade, Parallax]}
               direction={"vertical"}
               navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
               }}
               effect="fade"
               parallax={true}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
               }}
               loop={true}
               speed={800}
               pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  type: "custom",
                  renderCustom: (swiper, current, total) => {
                     let bullets = [];
                     for (let i = 0; i < total; i++) {
                        bullets.push(
                           `<span class="${
                              i === current - 1
                                 ? "swiper-pagination-bullet-active custom-bullet"
                                 : "swiper-pagination-bullet custom-bullet"
                           }">
                           <span class="custom-bullet-item"></span>
                        </span>`
                        );
                     }
                     return bullets.join("");
                  },
               }}
               style={{ height: "100%" }}
            >
               {dataCarousel.map((item, index) => (
                  <SwiperSlide key={index} style={{ position: "relative" }}>
                     <MUIBox
                        sx={{
                           backgroundImage: `url(${item?.image.src})`,
                           height: { xs: "480px", sm: "708px", md: "506px" },
                           backgroundPosition: "center",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                           zIndex: "-1",
                           width: "calc(100% + 50px)",
                           position: "absolute",
                           filter: "blur(8px)",
                        }}
                     ></MUIBox>

                     <MUIBox
                        sx={{
                           backgroundImage: `url(${item?.image.src})`,
                           height: { xs: "480px", sm: "708px", md: "506px" },
                           backgroundPosition: "center",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                           zIndex: "1",
                           width: "100%",
                           position: "absolute",
                           left: "20%",
                           top: "clamp(5.625rem, 8vw, 6.875rem)",
                           overflow: "hidden",
                           objectFit: "cover",
                        }}
                     ></MUIBox>

                     <MUIBox
                        sx={{
                           background: `rgba(0, 0, 0, 0.3)`,
                           zIndex: "5",
                           position: "absolute",
                           inset: 0,
                        }}
                     ></MUIBox>

                     <MUIBox
                        sx={{
                           position: "absolute",
                           margin: "0 clamp(1.875rem, 15vw, 11.25rem)",
                           display: "flex",
                           alignItems: "center",
                           width: "100%",
                           height: "100%",
                           zIndex: "10",
                           color: "#fff",
                        }}
                     >
                        <MUIBox sx={{ width: "100%" }}>
                           <MUITypography
                              data-swiper-parallax-y="-50"
                              data-swiper-opacity="0"
                              data-swiper-translate="-50px"
                              textTransform={"capitalize"}
                              fontWeight={700}
                              fontFamily={FONT_FAMILY.OUTFIT}
                              lineHeight={1.3}
                              pb={4}
                              sx={{
                                 fontSize: { xs: "32px", md: "52px", lg: "65px" },

                                 position: "relative",
                                 width: { xs: "60%", md: "50%" },
                                 "::after": {
                                    content: '""',
                                    display: "block",
                                    width: "clamp(150px, 100%, 200px)",
                                    height: "1px",
                                    background: "#fff",
                                    position: "absolute",
                                    top: "-50px",
                                 },
                                 "::before": {
                                    content: '""',
                                    display: "block",
                                    width: "clamp(80px, 100%, 140px)",
                                    height: "8px",
                                    background: "#fff",
                                    position: "absolute",
                                    top: "-53px",
                                    borderRadius: "10px",
                                 },
                              }}
                           >
                              {t(item.title)}
                           </MUITypography>
                           <MUIBox
                              data-swiper-parallax-y="-100"
                              data-swiper-opacity="0"
                              data-swiper-translate="50px"
                              sx={{
                                 border: "1.6px solid #fff",
                                 py: 1.5,
                                 px: 4,
                                 display: "inline-block",
                                 borderRadius: "40px",
                                 backgroundSize: "200% 100%",
                                 backgroundImage: "linear-gradient(to right, white 50%, transparent 50%)",
                                 backgroundPosition: "100% 0",
                                 transition: "background-position 0.8s ease-in-out",

                                 "&:hover": {
                                    animation: `${slideInAnimation} 0.8s forwards`,
                                    color: style.TEXT_COLOR_GENERAL,
                                 },

                                 "&:not(:hover)": {
                                    animation: `${slideOutAnimation} 0.8s forwards`,
                                 },

                                 "& > *": {
                                    position: "relative",
                                    zIndex: 1,
                                 },
                                 // background: "linear-gradient(90deg, white  50%, transparent 50%)",
                                 // backgroundSize: "200% 100%",
                                 // backgroundPosition: "right bottom",
                                 // transition: `background-position 0.5s ease`,
                                 // color: "#fff",
                                 // ":hover": {
                                 //    backgroundPosition: "left bottom",
                                 //    color: style.TEXT_COLOR_GENERAL,
                                 // },
                                 // ":not(:hover)": {
                                 //    backgroundPosition: "right bottom",
                                 // },
                              }}
                           >
                              <Link href={PATH.ABOUT} style={{ color: "inherit" }}>
                                 <MUITypography
                                    fontSize={15}
                                    fontWeight={400}
                                    fontFamily={FONT_FAMILY.OUTFIT}
                                    textTransform={"uppercase"}
                                    lineHeight={1}
                                    sx={{
                                       lineSpacing: "1.2px",
                                       display: "flex",
                                       alignItems: "center",
                                       gap: "10px",
                                       color: "inherit",
                                    }}
                                 >
                                    {t('Giới thiệu')}
                                    <ImageSvg
                                       src="/images/icons/ArrowForwardRoundedIcon.svg"
                                       style={{ width: "20px", color: "inherit" }}
                                    />
                                 </MUITypography>
                              </Link>
                           </MUIBox>
                        </MUIBox>
                     </MUIBox>
                     {/* <Image
                     src="/images/slider/global-logistic-airplane.jpg"
                     width={1920}
                     height={506}
                     alt=""
                     style={{ width: "100%", height: "506px", zIndex: "-2" }}
                  /> */}
                  </SwiperSlide>
               ))}

               <MUIBox
                  sx={{
                     position: "absolute",
                     top: { xs: "auto", sm: "clamp(5.625rem, 8vw, 6.875rem)" },
                     bottom: { xs: "20px", sm: "auto" },
                     right: { xs: "auto", sm: 0 },
                     left: { xs: 0, sm: "auto" },
                     // transform: "translateY(-75%)",
                     zIndex: "99",
                     background: "transparent",
                     mr: { xs: 0, sm: "100px" },
                     ml: { xs: "clamp(1.875rem, 15vw, 11.25rem)", sm: 0 },
                  }}
               >
                  <MUIBox
                     className="custom-pagination"
                     sx={{
                        display: "flex",
                        alignItems: { xs: "center", sm: "end" },
                        flexDirection: { xs: "row", sm: "column" },
                        justifyContent: "center",
                     }}
                  ></MUIBox>
               </MUIBox>

               <MUIBox className="custom-nav" sx={{ display: { xs: "none", sm: "flex" } }}>
                  <MUIBox className="custom-prev" sx={styleTransition}>
                     <ImageSvg
                        src="/images/icons/ArrowLeft.svg"
                        className="icon-first"
                        style={{ width: "25px", height: "25px" }}
                     />
                     <ImageSvg
                        src="/images/icons/ArrowUp.svg"
                        className="icon-last"
                        style={{ width: "25px", height: "25px" }}
                     />
                  </MUIBox>
                  <MUIBox className="custom-next" sx={styleTransition}>
                     <ImageSvg
                        src="/images/icons/ArrowRight.svg"
                        className="icon-first"
                        style={{ width: "25px", height: "25px" }}
                     />
                     <ImageSvg
                        src="/images/icons/ArrowDown.svg"
                        className="icon-last"
                        style={{ width: "25px", height: "25px" }}
                     />
                  </MUIBox>
               </MUIBox>
            </Swiper>
         </MUIBox>
      </SliderProjectStyled>
   );
};

export default SliderProject;
