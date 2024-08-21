"use client";
import { FONT_FAMILY, style } from "@/config";
import { MUIBox, MUITypography } from "../components/MUI";
import { usePathname } from "next/navigation";
import subFooterBackground from "@/public/images/basic/stack-containers-cargo-ship-import-export-harbor-port.jpg";
import { PATH } from "@/config/routes";
import AOS from "aos";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SubFooter = () => {
   const path = usePathname();
   const { t } = useTranslation();

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <MUIBox
         className={`${path === PATH.CONTACT ? "bg-contact" : "contact"}`}
         sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:not(.contact)": {
               backgroundColor: "#040716",
            },
         }}
      >
         <MUIBox
            sx={{
               backgroundImage: path === PATH.CONTACT ? `url(${subFooterBackground.src})` : "#fff",
               backgroundColor: path === PATH.ABOUT ? "#070707" : "none",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               opacity: path === PATH.CONTACT ? "0.06" : "1",
               width: "100%",
               height: "100%",
               position: "absolute",
               inset: 0,
            }}
         />
         <MUIBox
            sx={{
               p: "10%",
               position: "relative",

               // zIndex: "1",
            }}
         >
            <MUITypography
               fontSize={{
                  lg: 20,
                  md: 18,
                  xs: 14,
               }}
               fontWeight={700}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               sx={{
                  mb: 2.8,
                  color: path == PATH.CONTACT || path == PATH.ABOUT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER,
               }}
            >
               {t("Hai Sam Trading and Import-Export Co., Ltd.")}
            </MUITypography>

            <MUITypography
               fontSize={{
                  lg: 20,
                  md: 18,
                  xs: 14,
               }}
               color={path == PATH.CONTACT || path == PATH.ABOUT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               fontWeight={500}
               marginBottom={2.8}
            >
               {t("Address")}: {t("180 Tran Nhan Tong - Hai Xuan- Mong Cai- Quang Ninh")}
            </MUITypography>

            <MUITypography
               fontSize={{
                  lg: 20,
                  md: 18,
                  xs: 14,
               }}
               color={path == PATH.CONTACT || path == PATH.ABOUT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               fontWeight={500}
               marginBottom={2.8}
            >
               Email: Haisamlogistics@gmail.com
            </MUITypography>

            <MUITypography
               fontSize={{
                  lg: 20,
                  md: 18,
                  xs: 14,
               }}
               color={path == PATH.CONTACT || path == PATH.ABOUT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               fontWeight={500}
            >
               {t("Phone")}: 0777020707
            </MUITypography>
         </MUIBox>
      </MUIBox>
   );
};

export default SubFooter;
