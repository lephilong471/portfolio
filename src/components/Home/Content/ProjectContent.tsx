"use client";
import React, { useEffect } from "react";
import { MUIBox, MUITypography } from "@/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";
import AOS from "aos";
// import Splitting from "splitting";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { FONT_FAMILY, style } from "@/config";
import { PATH } from "@/config/routes";
import SliderProject from "./SliderProject";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });

const ProjectContentStyled = styled("div")`
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

const ProjectContent = () => {
   const { t } = useTranslation();
   useEffect(() => {
      // Splitting();
      AOS.init();
   }, []);

   return (
      <ProjectContentStyled>
         <MUIBox className="container">
            <MUIBox sx={{ marginTop: { xs: "20%", lg: "80px" }, marginBottom: { md: "1%", lg: "50px" } }}>
               <MUITypography
                  pb={3}
                  fontFamily={FONT_FAMILY.OUTFIT}
                  variant="h1"
                  fontWeight={700}
                  lineHeight={"1em"}
                  letterSpacing={"-0.04em"}
                  className="word-holder"
                  sx={{ fontSize: { xs: "40px", sm: "66px", lg: "114px" } }}
               >
                  <SplittingText>{t("Logistics Triumphs")}</SplittingText>
               </MUITypography>
               <Divider />
               <MUIBox
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  sx={{
                     display: "flex",
                     justifyContent: "end",
                     alignItems: "center",
                     marginBottom: "35px",
                     "&:hover .icon-project": {
                        transform: "translateX(10px)",
                     },
                  }}
               >
                  <Link
                     href={PATH.ABOUT}
                     style={{ textDecoration: "none", display: "inline-block", cursor: "pointer" }}
                  >
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
                        {t("Last project")}
                     </MUITypography>
                  </Link>
                  <ArrowOutwardRoundedIcon className="icon-project" />
               </MUIBox>
               {/* <MUIBox data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000" data-aos-once="true">
                  <MUITypography
                     fontFamily={FONT_FAMILY.JOST}
                     color={style.TEXT_COLOR_TITLE}
                     sx={{
                        fontSize: { xs: "18px", sm: "20px", lg: "32px" },
                     }}
                  >
                     {t("Beyond Boundaries: Our Project Narratives")}
                  </MUITypography>
               </MUIBox> */}
            </MUIBox>
         </MUIBox>
         <MUIBox mt={4}>
            <SliderProject />
         </MUIBox>
      </ProjectContentStyled>
   );
};

export default ProjectContent;
