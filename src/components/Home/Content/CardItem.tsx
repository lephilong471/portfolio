"use client";
import React from "react";
import { MUIBox, MUITypography } from "../../MUI";
import { Divider } from "@mui/material";
import CountUp from "react-countup";
import { FONT_FAMILY } from "@/config";
import { useTranslation } from "react-i18next";

const CardItem = (props) => {
   const { t } = useTranslation();
   return (
      <MUIBox mb={"34px"} {...props}>
         <MUITypography
            fontFamily={FONT_FAMILY.OUTFIT}
            lineHeight={1}
            className="percent"
            sx={{
               fontSize: { xs: "86px", md: "102px" },
               textShadow: "none",
               color: "transparent !important",
               WebkitTextStrokeWidth: 1,
               WebkitTextStrokeColor: "#333",
               textAlign: { xs: "center", md: "left" },
            }}
         >
            <CountUp start={0} end={props.percent} duration={5} enableScrollSpy={true} scrollSpyOnce={true}>
               {({ countUpRef }) => (
                  <span>
                     <span ref={countUpRef} />%
                  </span>
               )}
            </CountUp>
         </MUITypography>
         <Divider sx={{ my: 1 }}></Divider>
         <MUITypography
            fontSize={"20px"}
            fontWeight={500}
            fontFamily={FONT_FAMILY.JOST}
            pt={2}
            pb={2.5}
            sx={{ textAlign: { xs: "center", md: "left" } }}
         >
            {t(props?.title)}
         </MUITypography>
      </MUIBox>
   );
};

export default CardItem;
