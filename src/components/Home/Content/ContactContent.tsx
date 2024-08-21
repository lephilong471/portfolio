"use client";
import React from "react";
import { MUIBox, MUITypography } from "../../MUI";
import Link from "next/link";
import { PATH } from "@/config/routes";
import { FONT_FAMILY, style } from "@/config";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Divider } from "@mui/material";
// import BackgroundImage from "@/public/static/bg-image.jpg";
import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import TypingEffect from "@/components/presentation/TypingEffect";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });

const ContactContent = ({ bgImage }: { bgImage: StaticImageData }) => {
   const { t } = useTranslation();
   return (
      <>
         <MUIBox className="container">
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
               <Link href={PATH.CONTACT} style={{ textDecoration: "none", display: "inline-block", cursor: "pointer" }}>
                  <MUITypography
                     fontWeight={500}
                     fontFamily={FONT_FAMILY.JOST}
                     color={style.TEXT_COLOR_GENERAL}
                     lineHeight={"2em"}
                     sx={{
                        fontSize: { xs: "18px", md: "20px" },
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
                     {t("Contact Us")}
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
                  fontFamily={FONT_FAMILY.OUTFIT}
                  sx={{ fontSize: { xs: "40px", sm: "66px", lg: "116px" } }}
               >
                  <SplittingText>{t("Connect Today")}</SplittingText>
               </MUITypography>
            </MUIBox>
            <Divider sx={{ mb: "20px" }} />
            {/* <MUIBox data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000" data-aos-once="true">
               <MUITypography
                  fontFamily={FONT_FAMILY.JOST}
                  color={style.TEXT_COLOR_TITLE}
                  sx={{ fontSize: { xs: "18px", sm: "20px", lg: "32px" } }}
               >
                  {t("Communication in Motion")}
               </MUITypography>
            </MUIBox> */}
         </MUIBox>
         <MUIBox
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
            data-aos-once="true"
            sx={{
               minHeight: "40vh",
               height: "50vh",
               position: "relative",
               backgroundImage: `url(${bgImage.src})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               backgroundAttachment: "fixed",
               overflow: "hidden",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               width: "100%",
               mt: 3,
            }}
         >
            <MUIBox
               sx={{
                  background: "rgba(0, 0, 0,.43)",
                  opacity: "0.88",
                  position: "absolute",
                  inset: 0,
                  zIndex: "0",
               }}
            ></MUIBox>
            <MUIBox
               sx={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  zIndex: "2",
               }}
            >
               <MUITypography
                  variant="h1"
                  fontSize={72}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontFamily={FONT_FAMILY.OUTFIT}
                  color={"#fff"}
                  sx={{ textAlign: "center", mb: 2, fontSize: { xs: "28px", sm: "52px", lg: "72px" } }}
               >
                  {t("Do you need Hai Sam to help with?")}
               </MUITypography>
               <MUITypography
                  variant="h1"
                  lineHeight={1.2}
                  fontFamily={FONT_FAMILY.JOST}
                  color={"#fff"}
                  sx={{ textAlign: "center", mb: 2, fontSize: { xs: "18px", sm: "26px" } }}
               >
                  {t("Contact Hai Sam today")} <TypingEffect text="!!!!!!" delay={100} loop={true} />
               </MUITypography>
               <MUIBox
                  sx={{
                     borderColor: "#fff",
                     border: "2px solid ",
                     borderRadius: "22px",
                     padding: "10px  30px",
                     display: "inline-block",
                     mt: 3,
                     backgroundColor: "transparent",
                     color: "#fff",
                     transition:
                        "color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out",
                     // transition:
                     //    "background .3s, border .3s,color .3s, border-radius .3s, box-shadow .3s, transform var(--e-transform-transition-duration, .4s)",
                     ":hover": {
                        backgroundColor: "#f4f4f4",
                        color: "#000",
                        borderColor: "#f4f4f4",
                     },
                     ":hover .icon-about": {
                        transform: "translateX(10px)",
                     },
                  }}
               >
                  <Link href={PATH.CONTACT} style={{ textDecoration: "none", color: "inherit" }}>
                     <MUITypography
                        fontFamily={FONT_FAMILY.JOST}
                        fontWeight={700}
                        lineHeight={"2rem"}
                        sx={{
                           textAlign: "center",
                           textTransform: "capitalize",
                           display: "flex",
                           alignItems: "center",
                           color: "inherit",
                           fontSize: { xs: "16px", sm: "20px" },
                        }}
                     >
                        {t("Let's Talk")}
                        <ArrowOutwardRoundedIcon className="icon-about" />
                     </MUITypography>
                  </Link>
               </MUIBox>
            </MUIBox>
         </MUIBox>
      </>
   );
};

export default ContactContent;
