"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import { MUIBox, MUITypography } from "@/components/MUI";
import { BASE_URL_IMG_WITHOUT_TOKEN, BREAK_POINT, FONT_FAMILY, style } from "@/config";
import Link from "next/link";

import dynamic from "next/dynamic";
import { getListNews } from "@/api/auth/actions";

const WindowWidthWrapper = dynamic(() => import("@/config/hooks/useWindowWidthWrapper"), { ssr: false });

export default function NewsSlider() {
   const [listNews, setListNews] = useState([]);
   useEffect(() => {
      getListNews().then((res: { content: any }) => {
         setListNews(res?.content);
      });
   }, []);
   const formatDate = (isoDate) => {
      const date = new Date(isoDate);
      const options: Intl.DateTimeFormatOptions = {
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
   };
   return (
      <>
         <WindowWidthWrapper>
            {(screenWidth) => (
               <Swiper
                  slidesPerView={screenWidth > BREAK_POINT.MD ? 3 : screenWidth > BREAK_POINT.SM ? 2 : 1}
                  spaceBetween={30}
                  pagination={{
                     clickable: true,
                     // type: "custom",
                     // renderCustom(swiper, current, total) {
                     //    let bullets = [];
                     //    for (let i = 0; i < total; i++) {
                     //       bullets.push(
                     //          `<span class="${
                     //             i === current - 1 ? "swiper-pagination-bullet-active" : "swiper-pagination-bullet"
                     //          }"></span>`
                     //       );
                     //    }
                     //    return bullets.join(" ");
                     // },
                  }}
                  loop={true}
                  modules={[Pagination, Navigation]}
                  navigation={{
                     nextEl: ".custom-next",
                     prevEl: ".custom-prev",
                  }}
               >
                  {listNews && listNews.length > 0 && listNews.map((item, index) => (
                     <SwiperSlide key={index}>
                        <MUIBox>
                           <MUIBox
                              sx={{
                                 width: "100%",
                                 height: "200px",
                                 backgroundImage: `url(${BASE_URL_IMG_WITHOUT_TOKEN + item.imageTitle})`,
                                 backgroundPosition: "center",
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                              }}
                           ></MUIBox>
                           <MUIBox sx={{ display: "flex", justifyContent: "start", alignItems: "center", pt: 3.5 }}>
                              <MUITypography
                                 fontSize={17}
                                 lineHeight={1.3}
                                 color={style.TEXT_COLOR_GENERAL}
                                 fontFamily={FONT_FAMILY.JOST}
                              >
                                 {formatDate(item.createdDate)}
                              </MUITypography>
                              <MUITypography mx={1} color={style.TEXT_COLOR_GENERAL} fontFamily={FONT_FAMILY.JOST}>
                                 /
                              </MUITypography>
                              <MUITypography
                                 fontSize={17}
                                 lineHeight={1.3}
                                 color={style.TEXT_COLOR_GENERAL}
                                 fontFamily={FONT_FAMILY.JOST}
                                 textTransform={"capitalize"}
                              >
                                 {item.newType}
                              </MUITypography>
                           </MUIBox>
                           <MUIBox
                              sx={{
                                 display: "flex",
                                 justifyContent: "start",
                                 alignItems: "center",
                                 marginBottom: "35px",
                                 ".title-link:hover a": {
                                    color: "#111",
                                 },
                              }}
                           >
                              <Link
                                 href={"#"}
                                 style={{ textDecoration: "none", display: "inline-block" }}
                                 className="title-link"
                              >
                                 <MUITypography
                                    fontSize={22}
                                    fontWeight={600}
                                    fontFamily={FONT_FAMILY.OUTFIT}
                                    color={style.TEXT_COLOR_GENERAL}
                                    lineHeight={"2em"}
                                    sx={{
                                       width: "100%",
                                       position: "relative",
                                       display: "inline",
                                       backgroundImage:
                                          "linear-gradient(transparent calc(100% - 2px), currentColor 2px)",
                                       backgroundRepeat: "no-repeat",
                                       backgroundSize: "0 100%",
                                       color: style.TEXT_COLOR_GENERAL,
                                       transition: "all .9s cubic-bezier(.32,.32,.15,1.17)",
                                       ":hover": {
                                          backgroundSize: "100% 100%",
                                       },
                                    }}
                                 >
                                    {item.title}
                                 </MUITypography>
                              </Link>
                           </MUIBox>
                        </MUIBox>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </WindowWidthWrapper>
      </>
   );
}
