"use client"
import { MUIBox, MUITypography } from "../components/MUI";
import { style } from "@/config";
import { useTranslation } from "react-i18next";

const Footer = () => {
   const {t} = useTranslation()
   
   return (
      <MUIBox
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            position: "relative",
            bottom: "0px",
         }}
      >
         <MUITypography
            sx={{
               fontFamily: "Montserrat",
               fontSize: "12px",
               fontWeight: "bold",
               color: style.TEXT_COLOR_FOOTER,
               py: "22px",
            }}
         >
            {t("©2024 PORTFOLIO WEBSITE")}
         </MUITypography>
      </MUIBox>
   );
};

export default Footer;
