"use client";
import { Box, Divider, Grid, Link, styled } from "@mui/material";
import React, { useEffect } from "react";
import { MUIBox, MUIGrid, MUITypography } from "@/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import AddIcon from "@mui/icons-material/Add";

// import Splitting from "splitting";
import AOS from "aos";
import CardItem from "./CardItem";
import { FONT_FAMILY, style } from "@/config";
import { PATH } from "@/config/routes";
import { useDispatch } from "react-redux";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { setIndexOtherService, setIndexService } from "@/slices/serviceDuck/serviceReducer";
import { useRouter } from "next/navigation";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });

const ServiceContentStyled = styled(Box)`
   background: #fff;
   padding: 8% 0px;

   .word-holder {
      display: inline-flex;
      margin-right: 10px;
      font-family: "Oswald";
   }

   .word-holder span {
      display: inline-block;
   }

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
`;

const text = ["Logistic", "Capabilities"];

const dataOtherService = [
   {
      title: "Freight Truck Rental Service", //2
      key: 0,
   },
   {
      title: "Loading and Unloading Services", //4
      key: 1,
   },
   {
      title: "Consolidated Shipping Services", //6
      key: 2,
   },
   {
      title: "Delivery Service", //8
      key: 3,
   },
   {
      title: "Customs Services", //10
      key: 4,
   },
];

const dataService = [
   {
      title: "Warehouse Rental Service", //1
      key: 0,
   },
   {
      title: "Transportation Services", //9
      key: 1,
   },
   {
      title: "Import-Export Services", //3
      key: 2,
   },
   {
      title: "Entrusted Import Service", //5
      key: 3,
   },
];
const DataCardPercent = [
   {
      percent: 100,
      title: "On-Time Deliveries",
   },
   {
      percent: 97,
      title: "Global Network Coverage",
   },
   {
      percent: 90,
      title: "Cross-Border Efficiency",
   },
];
const ServiceContent = () => {
   const { t } = useTranslation();
   const dispatch = useDispatch();
   const router = useRouter();

   useEffect(() => {
      // Splitting();
      AOS.init();
   }, []);

   const changeIndexService = (index) => {
      dispatch(setIndexService(index));
      dispatch(setIndexOtherService(-1));
   };

   const changeIndexOtherService = (index) => {
      dispatch(setIndexOtherService(index));
      dispatch(setIndexService(-1));
   };

   return (
      <ServiceContentStyled>
         <Box className="container mx-auto">
            <Grid container spacing={{ xs: 2, md: 6 }}>
               <Grid item xs={12} md={7.5}>
                  <Box
                     data-aos="fade-up"
                     data-aos-delay="300"
                     data-aos-duration="2000"
                     data-aos-once="true"
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginBottom: "35px",
                        "&:hover .icon-service": {
                           transform: "translateX(10px)",
                        },
                     }}
                  >
                     <Link href={PATH.SERVICE} style={{ textDecoration: "none", display: "inline-block" }}>
                        <MUITypography
                           fontWeight={500}
                           fontFamily={FONT_FAMILY.JOST}
                           color={style.TEXT_COLOR_GENERAL}
                           lineHeight={"2em"}
                           sx={{
                              fontSize: { xs: "16px", sm: "20px" },
                              position: "relative",
                              "&::after": {
                                 content: '""',
                                 position: "absolute",
                                 bottom: 0,
                                 left: 0,
                                 width: "100%",
                                 height: { xs: "1px", md: "2px" },
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
                                 height: { xs: "1px", md: "2px" },
                                 backgroundColor: `${style.TEXT_COLOR_GENERAL}`,
                                 transition: `background-color .25s ease-in-out, width .36s cubic-bezier(.51,.5,.07,.99)`,
                                 backfaceVisibility: "hidden",
                              },
                           }}
                        >
                           {t("All service")}
                        </MUITypography>
                     </Link>
                     <ArrowOutwardRoundedIcon className="icon-service" />
                  </Box>
                  <MUIBox mb={3}>
                     {text.map((item, index) => (
                        <MUITypography
                           key={index}
                           variant="h1"
                           fontWeight={700}
                           lineHeight={"1em"}
                           letterSpacing={"-0.04em"}
                           className="word-holder"
                           sx={{ fontSize: { xs: "40px", sm: "66px", lg: "114px" } }}
                        >
                           <SplittingText>{t(item)}</SplittingText>
                        </MUITypography>
                     ))}
                  </MUIBox>

                  <Divider sx={{ mb: "20px" }} />
                  <MUIBox sx={{ mb: "40px" }}>
                     <MUITypography
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        variant="h2"
                        fontSize={"32px"}
                        fontWeight={400}
                        fontFamily={FONT_FAMILY.JOST}
                        sx={{ mb: "20px", fontSize: { xs: "18px", sm: "20px", lg: "32px" } }}
                     >
                        {t("Delivering Possibilities, On Time")}
                     </MUITypography>
                     <MUITypography
                        fontFamily={FONT_FAMILY.JOST}
                        color={"rgb(86, 103, 109)"}
                        lineHeight={1.9}
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        sx={{ mb: "20px", fontSize: { xs: "16px", sm: "17px" } }}
                     >
                        {t(
                           "At Logistica, we are more than just a logistics company, we are the architects of seamless supply chains, the navigators of global trade, and the enablers of business growth."
                        )}
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{ display: "flex", justifyContent: "start", gap: "20px" }}
                     data-aos="fade-up"
                     data-aos-delay="250"
                     data-aos-duration="1500"
                     data-aos-once="true"
                  >
                     <MUIGrid container>
                        <MUIGrid item xs={12} md={6}>
                           <ul style={{ padding: 0, listStyleType: "none", margin: 0 }}>
                              {dataService.map((item: any, index: number) => (
                                 <li
                                    key={index}
                                    onClick={() => {
                                       changeIndexService(item.key);
                                       router.push(PATH.SERVICE);
                                    }}
                                    style={{ cursor: "pointer" }}
                                 >
                                    <Link
                                       // href={}

                                       style={{
                                          textDecoration: "none",
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "5px",
                                          color: style.TEXT_COLOR_GENERAL,
                                       }}
                                    >
                                       <AddIcon />{" "}
                                       <MUITypography
                                          lineHeight={"30px"}
                                          fontFamily={FONT_FAMILY.JOST}
                                          color={style.TEXT_COLOR_GENERAL}
                                          sx={{whiteSpace: "nowrap"}}

                                       >
                                          {t(item.title)}
                                       </MUITypography>
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </MUIGrid>
                        <MUIGrid item xs={12} md={6}>
                           <ul style={{ padding: 0, listStyleType: "none", margin: 0 }}>
                              {dataOtherService.map((item: any, index: number) => (
                                 <li
                                    key={index}
                                    onClick={() => {
                                       changeIndexOtherService(item.key);
                                       router.push(PATH.SERVICE);
                                    }}
                                    style={{ cursor: "pointer" }}
                                 >
                                    <Link
                                       // href={PATH.SERVICE}
                                       style={{
                                          textDecoration: "none",
                                          display: "flex",
                                          alignItems: "center",
                                          color: style.TEXT_COLOR_GENERAL,
                                          gap: "5px",
                                       }}
                                    >
                                       <AddIcon />{" "}
                                       <MUITypography
                                          lineHeight={"30px"}
                                          fontFamily={FONT_FAMILY.JOST}
                                          color={style.TEXT_COLOR_GENERAL}
                                          sx={{ whiteSpace: "nowrap" }}
                                       >
                                          {t(item.title)}
                                       </MUITypography>
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </MUIGrid>
                     </MUIGrid>
                  </MUIBox>
               </Grid>
               <Grid item xs={0} md={0.7}></Grid>
               <Grid item xs={12} md={3.5}>
                  {DataCardPercent.map((item, index) => (
                     <CardItem
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        key={index}
                        title={item.title}
                        percent={item.percent}
                     />
                  ))}
               </Grid>
            </Grid>
         </Box>
      </ServiceContentStyled>
   );
};

export default ServiceContent;
