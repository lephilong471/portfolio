"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";

import { MUIBox, MUIGrid, MUITypography } from "../../components/MUI";
import styled from "styled-components";
import { style, FONT_FAMILY } from "@/config";

import ShipFlying from "@/public/images/basic/earth-surrounded-by-cardboard-boxes-cargo-container-ship-flying-plan-car-van-truck.jpg";

import dynamic from "next/dynamic";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });

import AboutSlider from "@/components/Home/Content/AboutSlider";
import { Divider } from "@mui/material";
import SubFooter from "@/Layouts/SubFooter";
import StaffContent from "@/components/Home/Content/StaffContent";

import CargoShip from "@/public/images/slider/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation-1000x1000.jpg";
import Truck from "@/public/images/slider/self-driving-futuristic-freight-truck-deliver-goods-warehouse-city-highway-1000x1000.jpg";
import { useTranslation } from "react-i18next";
import useIntersectionObserver from "@/config/hooks/useIntersectionObserver";
import ContactContent from "@/components/Home/Content/ContactContent";
import LoadedContainer from "@/public/images/basic/loaded-container-cargo-ship-is-seen-front-as-it-speeds-ocean-generative-ai-1300x1097.jpg";

const ContentStyled = styled("div")`
   p {
      font-family: ${FONT_FAMILY.MONTSERRAT};
   }
`;

const ImageStyled = styled.img`
   max-width: 100%;
   transform: translateY(0px);
   transition: transform 8s;
`;
const slides = [
   {
      image: "/images/slider/self-driving-futuristic-freight-truck-deliver-goods-warehouse-city-highway-1000x1000.jpg",
      alt: "Slide 1",
   },
   {
      image: "/images/slider/cargo-ship-carrying-containers-export-import-is-shown-global-world-service-freight-1000x1000.jpg",
      alt: "Slide 2",
   },
   {
      image: "/images/slider/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation-1000x1000.jpg",
      alt: "Slide 3",
   },
   // Thêm các slide khác nếu cần
];

const aboutContent = [
   {
      title: "Vision",
      content:
         "Hai Sam aims to become the leading provider of logistics services in Vietnam and the region, continuously innovating and developing to meet the increasing demands of the market.",
   },
   {
      title: "Mission",
      content:
         "Hai Sam always puts customers' interests first, ensuring satisfaction and trust through high-quality services. We deliver high-quality, efficient, and reliable logistics solutions to our customers. We aim to contribute to the sustainable development of businesses, the community, and the economy.",
   },
];

const valuesContent = [
   "Always prioritize service quality, ensuring our logistics solutions meet the highest standards and bring satisfaction to our customers. With a strong transportation fleet, we aim to build a cost-effective and fast transportation system.",
   "Continuously seek and apply advanced technologies and modern processes to improve efficiency and service quality.",
   "Build trust with customers and partners through transparency, honesty, and timely commitment in all activities.",
   "Develop a highly qualified and deeply knowledgeable workforce, maintaining a dedicated and attentive service attitude.",
];

const removeAOSAttribute = (ref: React.MutableRefObject<any>, timeout: number) => {
   if (ref.current) {
      setTimeout(() => {
         ref.current.removeAttribute("data-aos");
         ref.current.removeAttribute("data-aos-delay");
         ref.current.removeAttribute("data-aos-duration");
         ref.current.removeAttribute("data-aos-once");
      }, timeout);
   }
};

const About = () => {
   const { t } = useTranslation();

   const refImage1 = useRef(null);
   const refImage2 = useRef(null);

   const isIntersecting1 = useIntersectionObserver(refImage2, { threshold: 0.1 });
   const isIntersecting2 = useIntersectionObserver(refImage2, { threshold: 0.1 });

   useEffect(() => {
      AOS.init();
   }, []);

   useEffect(() => {
      isIntersecting1 && removeAOSAttribute(refImage1, 3500);
      isIntersecting2 && removeAOSAttribute(refImage2, 3500);

      const container1: HTMLElement = document.querySelector("#container-1");
      const container2: HTMLElement = document.querySelector("#container-2");

      const handleScroll = () => {
         if (window.innerWidth > 900) {
            if (refImage1.current) {
               if (
                  isIntersecting1 &&
                  refImage1.current.getBoundingClientRect().top < 0 &&
                  refImage1.current.clientHeight < container1.getBoundingClientRect().top + container1.clientHeight
               ) {
                  refImage1.current.style.transform = `translateY(${-refImage1.current.getBoundingClientRect().top}px)`;
               }
            }

            if (refImage2.current) {
               if (
                  isIntersecting2 &&
                  refImage2.current.getBoundingClientRect().top < 0 &&
                  refImage2.current.clientHeight < container2.getBoundingClientRect().top + container2.clientHeight
               ) {
                  refImage2.current.style.transform = `translateY(${-refImage2.current.getBoundingClientRect().top}px)`;
               }
            }
         } else {
            if (refImage1.current) refImage1.current.style.transform = "translateY(0px)";
            if (refImage2.current) refImage2.current.style.transform = "translateY(0px)";
         }
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, [isIntersecting1, isIntersecting2]);

   return (
      <>
         <MUIBox
            sx={{
               position: "relative",
               marginTop: "-51px",
               width: "100%",
               minHeight: "545px",
               backgroundImage: `url(${ShipFlying.src})`,
               backgroundPosition: "center center",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
            }}
         />
         <ContentStyled>
            <MUIBox className="container mx-auto">
               <MUIGrid container>
                  <MUIGrid item md={7} xs={12}>
                     <MUIBox
                        sx={{
                           mt: "13%",
                           mb: "24px",
                        }}
                     >
                        <MUITypography
                           variant="h1"
                           fontSize={116}
                           fontWeight={700}
                           lineHeight={"1em"}
                           letterSpacing={"-0.04em"}
                           color={style.TEXT_COLOR_TITLE}
                           sx={{
                              fontSize: { xs: "40px", sm: "66px", lg: "114px" },
                              ".char": {
                                 fontFamily: FONT_FAMILY.MONTSERRAT,
                              },
                           }}
                        >
                           <SplittingText>{t("about_HS")}</SplittingText>
                        </MUITypography>
                        <Divider sx={{ mb: "20px" }} />
                        <MUIBox data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" data-aos-once="true">
                           <MUITypography
                              sx={{
                                 fontWeight: "500",
                                 fontSize: { xs: "18px", md: "20px", lg: "32px" },
                                 color: `${style.TEXT_COLOR_TITLE} !important`,
                              }}
                           >
                              {t("Vision")}, {t("Mission")}, {t("Core values")}
                           </MUITypography>
                        </MUIBox>
                     </MUIBox>
                  </MUIGrid>
                  <MUIGrid item md={5} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                     <MUIBox
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                        data-aos-once="true"
                        sx={{
                           width: "100%",
                           p: { xs: "30px", md: "47px" },
                        }}
                     >
                        <AboutSlider slides={slides} />
                     </MUIBox>
                  </MUIGrid>
               </MUIGrid>
               <MUITypography
                  sx={{
                     fontSize: "17px",
                     p: "5%",
                     fontWeight: "500",
                     lineHeight: "35px",
                     color: style.TEXT_LIST_EXPAND_COLOR,
                     textAlign: "justify",
                  }}
               >
                  {t("about_des")}
               </MUITypography>
               <MUIGrid container>
                  <MUIGrid item lg={6} md={6} id="container-1">
                     <ImageStyled
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                        data-aos-once="true"
                        src={CargoShip.src}
                        alt=""
                        ref={refImage1}
                     />
                  </MUIGrid>
                  <MUIGrid
                     item
                     lg={6}
                     md={6}
                     sx={{
                        "ol li": {
                           color: style.TEXT_LIST_EXPAND_COLOR,
                           fontSize: { xs: "16px", lg: "17px" },
                           fontFamily: FONT_FAMILY.MONTSERRAT,
                           mb: "20px",
                           "span:nth-of-type(1)": {
                              fontWeight: "bold",
                           },
                           "span:nth-of-type(2)": {
                              ml: "10px",
                              fontWeight: "500",
                              lineHeight: "35px",
                           },
                        },
                        ol: {
                           paddingInlineStart: { xs: "20px", md: "40px" },
                        },
                     }}
                  >
                     <ol data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" data-aos-once="true">
                        {aboutContent.map((item, index) => {
                           return (
                              <li key={index} style={{ textAlign: "justify" }}>
                                 <span>{t(item.title)}</span>:<span>{t(item.content)}</span>
                              </li>
                           );
                        })}
                     </ol>
                  </MUIGrid>
               </MUIGrid>
               <MUITypography
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  sx={{
                     fontFamily: FONT_FAMILY.MONTSERRAT,
                     fontWeight: "bold",
                     mx: { xs: "10px", md: "20px" },
                     my: { xs: "10", md: "20px" },
                     fontSize: { xs: "18px", md: "20px", lg: "32px" },
                  }}
               >
                  {t("Core values")}
               </MUITypography>
               <MUIGrid container>
                  <MUIGrid
                     item
                     lg={6}
                     md={6}
                     sx={{
                        ul: {
                           paddingInlineStart: { xs: "20px", md: "40px" },
                           pr: { xs: "0", md: "5%" },
                           li: {
                              color: style.TEXT_LIST_EXPAND_COLOR,
                              fontSize: { xs: "16px", lg: "17px" },
                              fontFamily: FONT_FAMILY.MONTSERRAT,
                              mb: "20px",
                              fontWeight: "500",
                              lineHeight: "35px",
                           },
                        },
                     }}
                  >
                     <ul data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" data-aos-once="true">
                        {valuesContent.map((item, index) => {
                           return (
                              <li key={index} style={{ textAlign: "justify" }}>
                                 {t(item)}
                              </li>
                           );
                        })}
                     </ul>
                  </MUIGrid>
                  <MUIGrid item lg={6} md={6} id="container-2">
                     <ImageStyled
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                        data-aos-once="true"
                        src={Truck.src}
                        alt=""
                        ref={refImage2}
                     />
                  </MUIGrid>
               </MUIGrid>
            </MUIBox>
            <StaffContent />
            <ContactContent bgImage={LoadedContainer} />
            <SubFooter />
         </ContentStyled>
      </>
   );
};

export default About;
