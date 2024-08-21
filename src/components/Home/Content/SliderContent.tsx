"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Parallax, EffectFade } from "swiper/modules";
import { Box, styled } from "@mui/material";
import { MUIBox, MUITypography } from "@/components/MUI";

import MaskOverlay from "@/public/images/slider/side-round-mask.svg";

import Stage1 from "@/public/images/about/stage-1.jpg"
import Friend from "@/public/images/about/friends.jpg"

import AOS from "aos";
import Link from "next/link";
import { FONT_FAMILY } from "@/config";
import { useTranslation } from "react-i18next";

const DataSlider = [
   {
      image: Friend,
      heading: "Xin chào",
      title: "Đây là bạn bè của mình",
      subtitle: "Mình thuộc kiểu người hướng ngoại",
      des: "Nên có thể kết bạn và chơi với rất nhiều người bạn.",
   },
   {
      image: Stage1,
      heading: "Xin chào",
      title: "Mình tên là Long",
      subtitle: "Rất vui vì đã ghé thăm trang Web của mình",
      des: "Dưới đây là hành trình kết bạn bốn phương của mình",
   },
   {
      image: Friend,
      heading: "Sân khấu",
      title: "Hồi còn học cấp 3",
      subtitle: "Đây là hình ảnh mình đứng trên sân khấu",
      des: "Kỉ niệm ấy thật đáng nhớ vì mình có thể kết thêm được nhiều người bạn",
   },
   {
      image: Stage1,
      heading: "Hồi hộp",
      title: "Đây là hình ảnh mình lúc diễn",
      subtitle: "Tâm trạng khá hồi hộp nhưng mà vui",
      des: "Thật khó tả",
   },
 
];

const SliderStyled = styled(Box)`
   height: 100vh;
   background: #fff;

   .custom-pagination .swiper-pagination-bullet {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-bottom: 8px;
      cursor: pointer;
      color: #fff;
      background: transparent;
      padding: 10px;
   }

   .custom-pagination .swiper-pagination-bullet-active {
      color: #fff;
      background: transparent;
      height: 40px;
      width: 40px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
   }

   .custom-pagination .divider-active {
      display: block;
      background: white;
      width: 35px;
      height: 1px;
      position: absolute;
      transform: translateY(-50%);
      left: -35px;
      top: 50%;
   }
`;

const Slider = () => {
   const { t } = useTranslation();
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <SliderStyled>
         <Swiper
            modules={[Autoplay, Pagination, Navigation, Parallax, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            pagination={{
               el: ".custom-pagination",
               clickable: true,
               type: "custom",
               renderCustom: (swiper, current, total) => {
                  let bullets = [];
                  for (let i = 0; i < total; i++) {
                     let number = String(i + 1).padStart(2, "0");
                     let divider = i === current - 1 ? '<span class="divider-active"></span>' : "";
                     bullets.push(
                        `<span class="${
                           i === current - 1 ? "swiper-pagination-bullet-active" : "swiper-pagination-bullet"
                        }"> ${divider}  ${number}</span>`
                     );
                  }
                  return bullets.join("");
               },
            }}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            parallax={true}
            speed={600}
            style={{ position: "relative" }}
         >
            {DataSlider.map((item, index) => (
               <SwiperSlide key={index}>
                  <MUIBox
                     sx={{
                        margin: "auto",
                        color: "#fff",
                        position: "relative",
                        width: "100%",
                        height: "100vh",
                     }}
                  >
                     <Box
                        sx={{
                           backgroundImage: `url(${item?.image.src})`,
                           height: "100vh",
                           minHeight: "100vh",
                           maxHeight: "100%",
                           backgroundPosition: "center",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                           zIndex: "1",
                           width: "100%",
                           filter: "blur(8px) brightness(90%)",
                           position: "absolute",
                        }}
                     ></Box>
                     <Box
                        sx={{
                           background: "rgba(0, 0, 0, 0.3)",
                           height: "100vh",
                           minHeight: "100vh",
                           maxHeight: "100%",
                           zIndex: "5",
                           width: "100%",
                           position: "absolute",
                        }}
                     ></Box>
                     <Box
                        sx={{
                           maskImage: { xs: "", lg: `url(${MaskOverlay.src})` },
                           maskPosition: "left",
                           maskSize: "contain",
                           maskRepeat: "no-repeat",
                           zIndex: "10",
                           position: "absolute",
                           inset: 0,
                        }}
                     >
                        <Box
                           sx={{
                              backgroundImage: `url(${item?.image.src})`,
                              height: "100%",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              width: "100%",
                           }}
                        ></Box>
                     </Box>

                     <Box
                        sx={{
                           position: "absolute",
                           top: 0,
                           zIndex: "99",
                           background: "transparent",
                           display: "flex",
                           alignItems: "center",
                           width: "100%",
                           height: "100%",
                           pl: { xs: "15px", md: "100px" },
                        }}
                     >
                        <Box>
                           <MUITypography
                              data-aos="fade-right"
                              data-aos-delay="0"
                              data-aos-duration="2000"
                              data-aos-once="true"
                              data-aos-offset="0"
                              fontSize={17}
                              fontWeight={400}
                              textTransform={"uppercase"}
                              letterSpacing={"1px"}
                              lineHeight={1.7}
                              data-swiper-parallax="-150"
                              fontFamily={FONT_FAMILY.JOST}
                           >
                              {t(item.subtitle)}
                           </MUITypography>
                           <MUITypography
                              data-aos="fade-right"
                              data-aos-delay="0"
                              data-aos-duration="2000"
                              data-aos-once="true"
                              data-aos-offset="0"
                              fontWeight={700}
                              textTransform={"uppercase"}
                              letterSpacing={"0.5px"}
                              lineHeight={1.2}
                              py={1.5}
                              data-swiper-parallax="-200"
                              sx={{ maxWidth: "614px", fontSize: { xs: "35px", md: "60px", xl: "78px" } }}
                              fontFamily={FONT_FAMILY.OUTFIT}
                           >
                              <span>{t(item.heading)}</span> {t(item.title)}
                           </MUITypography>
                           <MUITypography
                              data-aos="fade-right"
                              data-aos-delay="0"
                              data-aos-duration="2000"
                              data-aos-once="true"
                              data-aos-offset="0"
                              data-swiper-parallax="-300"
                              fontFamily={FONT_FAMILY.JOST}
                              sx={{
                                 fontSize: "clamp(14px, 2vw, 18px)",
                                 fontWeight: 300,
                                 maxWidth: "clamp(270px, 52vw, 620px)",
                              }}
                           >
                              {t(item.des)}
                           </MUITypography>
                        </Box>
                     </Box>
                  </MUIBox>
               </SwiperSlide>
            ))}
            <MUIBox
               sx={{
                  position: "absolute",
                  top: { xs: "auto", sm: "50%" },
                  bottom: { xs: "0", sm: "auto" },
                  right: 0,
                  transform: { xs: "translateY(-5%)", sm: "translateY(-50%)" },
                  zIndex: "99",
                  background: "transparent",
                  mr: { xs: 0, md: "100px" },
               }}
            >
               <MUIBox
                  className="custom-pagination container"
                  style={{
                     display: "flex",
                     alignItems: "end",
                     flexDirection: "column",
                     justifyContent: "center",
                  }}
               ></MUIBox>
            </MUIBox>

            <MUIBox
               sx={{
                  position: "absolute",
                  top: "auto",
                  left: "0",
                  right: "auto",
                  bottom: { xs: "30px", sm: "70px" },
                  zIndex: "99",
                  background: "transparent",
                  ml: { xs: "15px", md: "100px" },
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "8px", md: "16px" },
               }}
            >
               <Link href={"#"} style={{ color: "inherit" }}>
                  <MUITypography
                     textTransform={"uppercase"}
                     letterSpacing={"2px"}
                     fontSize={14}
                     lineHeight={"1px"}
                     fontFamily={FONT_FAMILY.JOST}
                     sx={{ wordSpacing: "0px" }}
                  >
                     Facebook
                  </MUITypography>
               </Link>
               <Link href={"#"} style={{ color: "inherit" }}>
                  <MUITypography
                     textTransform={"uppercase"}
                     letterSpacing={"2px"}
                     fontSize={14}
                     lineHeight={"1px"}
                     fontFamily={FONT_FAMILY.JOST}
                     sx={{ wordSpacing: "0px" }}
                  >
                     Twitter
                  </MUITypography>
               </Link>
               <Link href={"#"} style={{ color: "inherit" }}>
                  <MUITypography
                     textTransform={"uppercase"}
                     letterSpacing={"2px"}
                     fontSize={14}
                     lineHeight={"1px"}
                     fontFamily={FONT_FAMILY.JOST}
                     sx={{ wordSpacing: "0px" }}
                  >
                     Instagram
                  </MUITypography>
               </Link>
            </MUIBox>
         </Swiper>
      </SliderStyled>
   );
};

export default Slider;
