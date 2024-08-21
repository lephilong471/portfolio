"use client";
import React, { useEffect } from "react";
import { MUIBox, MUIGrid, MUITypography } from "@/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";
import AOS from "aos";
// import Splitting from "splitting";
import styled from "styled-components";
import { Divider } from "@mui/material";
// import AboutProgress from "./AboutProgress";
import { FONT_FAMILY, style } from "@/config";
import { PATH } from "@/config/routes";
// import AboutSlider from "./AboutSlider";

import dynamic from "next/dynamic";
import AboutSlider from "./AboutSlider";
import { useTranslation } from "react-i18next";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });

// import SliderManger from "@/public/images/slider/manager-engineer-checking.jpg";
// import SliderContainerPlane from "@/public/images/slider/container-cargo-ship-cargo-plane.jpg";
// import SliderShip from "@/public/images/slider/ship-with-cargo-container-sea.jpg";
const slides = [
   { image: "/images/slider/manager-engineer-checking.jpg", alt: "Slide 1" },
   { image: "/images/slider/container-cargo-ship-cargo-plane.jpg", alt: "Slide 2" },
   { image: "/images/slider/ship-with-cargo-container-sea.jpg", alt: "Slide 3" },
];

const AboutContentStyled = styled("div")`
   min-height: 100vh;
   .splitting .char {
      animation: slide-in 1s cubic-bezier(0.5, 0, 0.5, 1) both;
      animation-delay: calc(60ms * var(--char-index));
   }

   @keyframes slide-in {
      from {
         transform: translateX(100px);
         opacity: 0;
      }
   }

   .tabs-custom {
      border: none !important;
      outline: none !important;
      text-decoration: underline;
      letter-spacing: 1px;
      display: inline-block;
      padding: 0;
      text-transform: capitalize;
   }

   .tabs-custom:hover {
      color: ${style.TEXT_COLOR_GENERAL} !important;
   }
   .MuiTabs-indicator {
      display: none !important;
   }

   .tabs-custom.Mui-selected {
      color: ${style.TEXT_COLOR_GENERAL} !important;
   }
   .tabs-custom:active {
      border: none !important;
      outline: none !important;
   }
   .tabs-custom:focus {
      border: none !important;
      outline: none !important;
   }
`;

// interface TabPanelProps {
//    children?: React.ReactNode;
//    index: number;
//    value: number;
// }

// const dataTabs = [
//    {
//       title: "History",
//       content:
//          "At Hai Sam, we are more than just a logistics company – we are the architects of seamless supply chains, the navigators of global trade, and the enablers of business growth. With a passion for innovation and a commitment to excellence, we have been at the forefront of the logistics industry for over a decade.Founded in 1984, Lostica began as a vision to redefine logistics. Our journey started with a small team and a big idea: to provide comprehensive, customer-centric solutions that transcend borders and challenges. Through dedication and hard work, we have grown into a global logistics leader, connecting businesses and markets across continents.",
//    },
//    {
//       title: "Mission",
//       content:
//          "At Hai Sam, our mission is to be the driving force behind global commerce. We are dedicated to providing innovative, reliable, and tailored logistics solutions that empower businesses to thrive in a dynamic world. With a commitment to excellence and a passion for customer success, we strive to create seamless supply chains, bridge distances, and connect opportunities. Through our expertise, technology-driven approach, and unwavering dedication, we aim to be the preferred partner for businesses seeking to navigate the complexities of logistics with confidence.",
//    },
//    {
//       title: "Vision",
//       content:
//          "At Hai Sam, our vision is to revolutionize the logistics landscape by setting new standards of excellence and innovation. We envision a future where businesses seamlessly connect, borders dissolve, and possibilities are limitless. Through cutting-edge technology, sustainable practices, and a relentless pursuit of improvement, we aim to be the catalyst that transforms global trade. By continuously exceeding expectations, embracing change, and creating value for our clients, we aspire to become the trusted global leader in shaping the future of logistics.",
//    },
// ];

// const dataProgress = [
//    {
//       title: "Order Received",
//       percent: 95,
//    },
//    {
//       title: "Customs Processing",
//       percent: 85,
//    },
//    {
//       title: "Customs Clearance",
//       percent: 75,
//    },
// ];

const dataAbout = ["Diverse services", "Dedicated care", "Competitive pricing", "Top quality", "Reliable and fast"];
const AboutContent = () => {
   // const [value, setValue] = React.useState(0);
   const { t } = useTranslation();

   useEffect(() => {
      // Splitting();
      AOS.init();
   }, []);
   // const TabPanel = (props: TabPanelProps) => {
   //    const { children, value, index, ...other } = props;

   //    return (
   //       <MUIBox role="tabpanel" px={{ xs: 0, md: 2 }} sx={{ display: value !== index ? "none" : "block" }} {...other}>
   //          {value === index && (
   //             <MUITypography
   //                color={"rgb(86, 103, 109)"}
   //                sx={{
   //                   fontSize: 18,
   //                   lineHeight: "30px",
   //                   fontFamily: FONT_FAMILY.JOST,
   //                   fontWeight: "400",
   //                   textAlign: "justify",
   //                }}
   //             >
   //                {children}
   //             </MUITypography>
   //          )}
   //       </MUIBox>
   //    );
   // };

   // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
   //    setValue(newValue);
   // };

   return (
      <AboutContentStyled className="container">
         <MUIBox
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
            data-aos-once="true"
            sx={{
               display: "flex",
               justifyContent: "end",
               alignItems: "center",
               marginBottom: "35px",
               "&:hover .icon-about": {
                  transform: "translateX(10px)",
               },
            }}
         >
            <Link href={PATH.ABOUT} style={{ textDecoration: "none", display: "inline-block", cursor: "pointer" }}>
               <MUITypography
                  fontWeight={500}
                  fontFamily={FONT_FAMILY.JOST}
                  color={style.TEXT_COLOR_GENERAL}
                  lineHeight={"2em"}
                  sx={{
                     fontSize: { xs: "16px", sm: "20px" },
                     position: "relative",
                     textTransform: "capitalize",
                     "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: `currentColor`,
                        transition: `background-color .25s ease-in-out, width .36s cubic-bezier(.51,.5,.07,.99)`,
                        backfaceVisibility: "hidden",
                     },
                     "&:hover::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: `${style.TEXT_COLOR_GENERAL}`,
                        transition: `background-color .25s ease-in-out, width .36s cubic-bezier(.51,.5,.07,.99)`,
                        backfaceVisibility: "hidden",
                     },
                  }}
               >
                  {t("about_us")}
               </MUITypography>
            </Link>
            <ArrowOutwardRoundedIcon className="icon-about" />
         </MUIBox>
         <MUIBox pb={3}>
            <MUITypography
               variant="h1"
               fontWeight={700}
               lineHeight={"1em"}
               letterSpacing={"-0.04em"}
               textTransform={"capitalize"}
               data-splitting="chars"
               fontFamily={FONT_FAMILY.OUTFIT}
               sx={{ fontSize: { xs: "40px", sm: "66px", lg: "116px" } }}
            >
               <SplittingText>{t("Why Choose Us")}</SplittingText>
            </MUITypography>
         </MUIBox>
         <Divider sx={{ mb: "20px" }} />
         <MUIBox>
            {/* <MUITypography
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-duration="1500"
               data-aos-once="true"
               fontWeight={400}
               lineHeight={1}
               variant="h2"
               fontFamily={FONT_FAMILY.JOST}
               sx={{ fontSize: { xs: "18px", sm: "20px", lg: "32px" } }}
            >
               {t("We Bridge Distances, We Deliver Dreams")}
            </MUITypography> */}
            <MUIGrid container sx={{ mt: "3%" }}>
               <MUIGrid item xs={12} md={6}>
                  {/* <MUIBox
                     data-aos="fade-right"
                     data-aos-delay="500"
                     data-aos-duration="2000"
                     data-aos-once="true"
                     data-aos-offset="0"
                     mb={2.5}
                     sx={{ display: 'none' }}
                  >
                     <Tabs sx={{ overflow: "visible" }} orientation="vertical" value={value} onChange={handleChange}>
                        {dataTabs.map((item, index) => (
                           <Tab
                              className="tabs-custom"
                              key={index}
                              label={
                                 <MUITypography
                                    fontFamily={FONT_FAMILY.JOST}
                                    fontWeight={500}
                                    sx={{
                                       textAlign: "left",
                                       fontSize: { xs: "17px", sm: "21px", lg: "22px" },
                                       lineHeight: { xs: 1.4, md: "40px" },
                                       whiteSpace: "nowrap",
                                    }}
                                 >
                                    {t(item.title)}
                                 </MUITypography>
                              }
                              value={index}
                           />
                        ))}
                     </Tabs>
                     {dataTabs.map((item, index) => (
                        <TabPanel key={index} value={value} index={index}>
                           {t(item?.content)}
                        </TabPanel>
                     ))}
                  </MUIBox>
                  <MUIBox>
                     {dataProgress.map((item, index) => (
                        <AboutProgress title={t(item.title)} percent={item.percent} key={index} />
                     ))}
                  </MUIBox> */}
                  <MUIBox
                     data-aos="fade-right"
                     data-aos-delay="500"
                     data-aos-duration="2000"
                     data-aos-once="true"
                     data-aos-offset="0"
                  >
                     <ul>
                        {dataAbout.map((item, index) => {
                           return (
                              <li key={index}>
                                 <MUITypography color={style.TEXT_COLOR_GENERAL} fontFamily={FONT_FAMILY.JOST} fontSize={24} fontWeight={500}>
                                    {t(item)}
                                 </MUITypography>
                              </li>
                           );
                        })}
                     </ul>
                  </MUIBox>
               </MUIGrid>
               <MUIGrid
                  item
                  xs={12}
                  md={5}
                  sx={{ display: "flex", justifyContent: "center", pl: { xs: "0", md: "30px" } }}
               >
                  <AboutSlider slides={slides} />
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
      </AboutContentStyled>
   );
};

export default AboutContent;
