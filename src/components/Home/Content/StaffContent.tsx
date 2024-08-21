"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { MUIBox, MUIGrid, MUITypography } from "../../MUI";
import dynamic from "next/dynamic";
import { FONT_FAMILY, style } from "@/config";
import { Divider } from "@mui/material";
import Image from "next/image";
import ImageSvg from "react-inlinesvg";
import Link from "next/link";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });

const StaffContentStyled = styled("div")``;
const StaffContent = () => {
   const { t } = useTranslation();
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <StaffContentStyled className="container">
         <MUIBox pb={3} sx={{ mt: "120px" }}>
            <MUITypography
               variant="h1"
               fontWeight={700}
               lineHeight={"1em"}
               letterSpacing={"-0.04em"}
               textTransform={"capitalize"}
               fontFamily={FONT_FAMILY.OUTFIT}
               sx={{ fontSize: { xs: "40px", sm: "66px", lg: "116px" } }}
            >
               <SplittingText>{t("Meet Our Staff")}</SplittingText>
            </MUITypography>
         </MUIBox>
         <Divider sx={{ mb: "20px" }} />
         {/* <MUIBox data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000" data-aos-once="true">
            <MUITypography
               fontFamily={FONT_FAMILY.JOST}
               color={style.TEXT_COLOR_TITLE}
               sx={{
                  fontSize: { xs: "18px", sm: "20px", lg: "32px" },
               }}
            >
               {t("Teamwork Beyond Boundaries")}
            </MUITypography>
         </MUIBox> */}
         <MUIBox
            sx={{ p: "112px 0 15px" }}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
            data-aos-once="true"
         >
            <MUIGrid container spacing={{ xs: 1.5, sm: 3, md: 9 }}>
               <MUIGrid item xs={12} sm={4}>
                  <MUIBox
                     sx={{
                        width: "100%",
                        minHeight: { xs: "370px", sm: "230px", md: "370px" },
                        position: "relative",
                        overflow: "hidden",
                        ".social-staff": {
                           transform: "translateY(100%)",
                           transition: "transform 0.3s ease-in-out",
                        },
                        "&:hover .social-staff": {
                           transform: "translateY(0)",
                        },
                     }}
                  >
                     <Image src="/images/staff/t-03.jpg" alt="" fill style={{ objectFit: "cover" }} />
                     <MUIBox
                        className="social-staff"
                        sx={{
                           position: "absolute",
                           bottom: "0",
                           left: "0",
                           width: "100%",
                           height: "auto",
                           padding: "30px",
                           background: "#fff",
                        }}
                     >
                        <MUITypography
                           variant="h4"
                           fontSize={22}
                           fontWeight={600}
                           letterSpacing={"0.4px"}
                           m={0}
                           color={style.TEXT_COLOR_TITLE}
                           pb={"12px"}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           Roger Craig
                        </MUITypography>
                        <MUITypography
                           fontSize={16}
                           lineHeight={"1px"}
                           mb={"20px"}
                           style={{ color: `rgb(86, 103, 109)` }}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           CEO
                        </MUITypography>
                        <MUIBox
                           sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "10px",
                              color: `rgba(0, 0, 0,0.48)`,
                           }}
                        >
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/facebook.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/x.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/instagram.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/mail.svg" />
                           </Link>
                        </MUIBox>
                     </MUIBox>
                  </MUIBox>
               </MUIGrid>
               <MUIGrid item xs={12} sm={4}>
                  <MUIBox
                     sx={{
                        width: "100%",
                        minHeight: { xs: "370px", sm: "230px", md: "370px" },
                        position: "relative",
                        overflow: "hidden",
                        mt: { xs: "0px", sm: "-50px" },
                        ".social-staff": {
                           transform: "translateY(100%)",
                           transition: "transform 0.3s ease-in-out",
                        },
                        "&:hover .social-staff": {
                           transform: "translateY(0)",
                        },
                     }}
                  >
                     <Image src="/images/staff/t-03.jpg" alt="" fill style={{ objectFit: "cover" }} />
                     <MUIBox
                        className="social-staff"
                        sx={{
                           position: "absolute",
                           bottom: "0",
                           left: "0",
                           width: "100%",
                           height: "auto",
                           padding: "30px",
                           background: "#fff",
                        }}
                     >
                        <MUITypography
                           variant="h4"
                           fontSize={22}
                           fontWeight={600}
                           letterSpacing={"0.4px"}
                           m={0}
                           color={style.TEXT_COLOR_TITLE}
                           pb={"12px"}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           Roger Craig
                        </MUITypography>
                        <MUITypography
                           fontSize={16}
                           lineHeight={"1px"}
                           mb={"20px"}
                           style={{ color: `rgb(86, 103, 109)` }}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           CEO
                        </MUITypography>
                        <MUIBox
                           sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "10px",
                              color: `rgba(0, 0, 0,0.48)`,
                           }}
                        >
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/facebook.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/x.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/instagram.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/mail.svg" />
                           </Link>
                        </MUIBox>
                     </MUIBox>
                  </MUIBox>
               </MUIGrid>
               <MUIGrid item xs={12} sm={4}>
                  <MUIBox
                     sx={{
                        width: "100%",
                        minHeight: { xs: "370px", sm: "230px", md: "370px" },
                        position: "relative",
                        overflow: "hidden",
                        ".social-staff": {
                           transform: "translateY(100%)",
                           transition: "transform 0.3s ease-in-out",
                        },
                        "&:hover .social-staff": {
                           transform: "translateY(0)",
                        },
                     }}
                  >
                     <Image src="/images/staff/t-03.jpg" alt="" fill style={{ objectFit: "cover" }} />
                     <MUIBox
                        className="social-staff"
                        sx={{
                           position: "absolute",
                           bottom: "0",
                           left: "0",
                           width: "100%",
                           height: "auto",
                           padding: "30px",
                           background: "#fff",
                        }}
                     >
                        <MUITypography
                           variant="h4"
                           fontSize={22}
                           fontWeight={600}
                           letterSpacing={"0.4px"}
                           m={0}
                           color={style.TEXT_COLOR_TITLE}
                           pb={"12px"}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           Roger Craig
                        </MUITypography>
                        <MUITypography
                           fontSize={16}
                           lineHeight={"1px"}
                           mb={"20px"}
                           style={{ color: `rgb(86, 103, 109)` }}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           CEO
                        </MUITypography>
                        <MUIBox
                           sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "10px",
                              color: `rgba(0, 0, 0,0.48)`,
                           }}
                        >
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/facebook.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/x.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/instagram.svg" />
                           </Link>
                           <Link href={""} style={{ color: "inherit !important" }}>
                              <ImageSvg width={"15px"} height={"15px"} src="/images/icons/mail.svg" />
                           </Link>
                        </MUIBox>
                     </MUIBox>
                  </MUIBox>
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
      </StaffContentStyled>
   );
};
export default StaffContent;
