"use client";
import React, { useEffect } from "react";
import { MUIBox, MUITypography, MUIGrid, MUILink, MUITextField, MUIButton } from "@/components/MUI";
import styled from "styled-components";
import { style, FONT_FAMILY } from "@/config";
import { Form } from "antd";
import AOS from "aos";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import SubFooter from "../../Layouts/SubFooter";

import dynamic from "next/dynamic";
// import { sendContact } from "../api/auth/actions";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });
import subFooterBackground from "@/public/images/basic/stack-containers-cargo-ship-import-export-harbor-port.jpg";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const ContentStyled = styled(MUIBox)`
   p {
      font-family: ${FONT_FAMILY.MONTSERRAT};
      color: ${style.TEXT_COLOR_GENERAL};
   }
`;
const Contact = () => {
   const [form] = Form.useForm();
   const { t } = useTranslation();

   useEffect(() => {
      AOS.init();
   }, []);

   const handleSubmit = async (values) => {
      const body = {
         message: values.content,
         name: values.name,
         email: values.email,
      };

      // sendContact(body);
      const response = await fetch("https://haisamlogistics.com/api/v1/admin/request-submit", {
         method: "POST",
         headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(body),
      });

      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
   };

   return (
      <ContentStyled>
         <MUIBox
            sx={{
               backgroundImage: `url(${subFooterBackground.src})`,
               backgroundPosition: "top center",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               width: "100%",
               height: "420px",
            }}
         ></MUIBox>
         <MUIBox className="container mx-auto" mt={10}>
            <MUIGrid
               container
               sx={{
                  pb: "5%",
               }}
            >
               <MUIGrid item md={7} xs={12}>
                  <MUITypography
                     variant="h1"
                     fontWeight={700}
                     lineHeight={"1em"}
                     color={style.TEXT_COLOR_TITLE}
                     sx={{ fontSize: { xs: "40px", sm: "66px", lg: "116px" } }}
                  >
                     <SplittingText>{t("Let's Talk")}</SplittingText>
                  </MUITypography>
                  <Divider sx={{ mb: 3 }} />
                  <MUIBox
                     data-aos="fade-up"
                     data-aos-delay="300"
                     data-aos-duration="2000"
                     data-aos-once="true"
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                     }}
                  >
                     <MUITypography sx={{ fontWeight: "500", fontSize: { xs: "18px", sm: "20px", lg: "28px" } }}>
                        {t("Want to use our services? Please leave us your contact information")}
                     </MUITypography>
                  </MUIBox>
                  <MUIBox sx={{ height: "50px", mb: "20px" }} />
                  <MUIBox sx={{ mb: "20px" }}>
                     <MUITypography
                        sx={{
                           fontSize: "18px",
                           fontWeight: "bold",
                        }}
                     >
                        Hotline
                     </MUITypography>
                  </MUIBox>
                  <MUIBox sx={{ mb: "20px" }}>
                     <MUITypography
                        sx={{
                           fontSize: "24px",
                           fontWeight: "bold",
                        }}
                     >
                        +84 777 020 707
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{
                        ".MuiSvgIcon-root": {
                           mx: "8px",
                           fontSize: "20px",
                           color: style.SOCIAL_ICON_COLOR,
                        },
                     }}
                  >
                     <MUILink href="#">
                        <FacebookRoundedIcon />
                     </MUILink>
                     <MUILink href="#">
                        <TwitterIcon />
                     </MUILink>
                     <MUILink href="#">
                        <YouTubeIcon />
                     </MUILink>
                  </MUIBox>
               </MUIGrid>
               <MUIGrid item md={5} xs={12}>
                  <MUIBox
                     sx={{
                        p: "8%",
                        ".MuiTextField-root": {
                           py: "15px",
                           "input, textarea": {
                              px: "14px",
                              fontFamily: FONT_FAMILY.MONTSERRAT,
                              fontWeight: "500",
                           },
                           "input::placeholder, textarea::placeholder": {
                              fontFamily: FONT_FAMILY.MONTSERRAT,
                              fontWeight: "500",
                              fontSize: "14px",
                           },
                        },
                        ".Mui-error": {
                           fontWeight: "500",
                           color: `${style.TEXT_COLOR_ERROR} !important`,
                           fontSize: "14px",
                           display: "flex",
                           alignItems: "center",
                           mt: "10px",
                        },
                        ".Mui-error svg": {
                           fontSize: "20px",
                        },
                     }}
                  >
                     <Form form={form} onFinish={handleSubmit}>
                        <Form.Item
                           name="name"
                           rules={[
                              {
                                 required: true,
                                 message: t("require_input"),
                              },
                           ]}
                        >
                           <MUITextField
                              variant="standard"
                              name="name"
                              size="small"
                              placeholder={t("fullname")}
                              fullWidth
                           />
                        </Form.Item>
                        <Form.Item
                           name="email"
                           rules={[
                              {
                                 required: true,
                                 message: t("require_input"),
                              },
                              {
                                 type: "email",
                                 message: t("email_rules"),
                              },
                           ]}
                        >
                           <MUITextField variant="standard" name="email" size="small" placeholder="Email" fullWidth />
                        </Form.Item>
                        <Form.Item
                           name="content"
                           rules={[
                              {
                                 required: true,
                                 message: t("require_input"),
                              },
                           ]}
                        >
                           <MUITextField
                              variant="standard"
                              name="content"
                              multiline
                              rows="8"
                              size="small"
                              placeholder={t("content")}
                              fullWidth
                           />
                        </Form.Item>

                        <MUIButton
                           variant="contained"
                           onClick={() => {
                              form.submit();
                           }}
                           sx={{
                              background: style.TEXT_COLOR_GENERAL,
                              borderRadius: "20px",
                              textTransform: "none",
                              fontFamily: "inherit",
                           }}
                        >
                           {t("submit")}
                        </MUIButton>
                     </Form>
                  </MUIBox>
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
         <SubFooter />
      </ContentStyled>
   );
};

export default Contact;
// export default connect(null, {
//    login: authActions.adminLoginApi,
// })(Contact);
