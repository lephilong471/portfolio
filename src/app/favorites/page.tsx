"use client";
import React, { useEffect, useRef } from "react";
import { MUIBox, MUIListItemText, MUICollapse, MUIList, MUIGrid, MUITypography} from "@/components/MUI";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import styled from "styled-components";
import { style, FONT_FAMILY } from "../../config";
import AOS from "aos";
import dynamic from "next/dynamic";
const SplittingText = dynamic(() => import("@/components/presentation/SplittingText"), { ssr: false });
// import StaffContent from "../../components/Home/Content/StaffContent";
import useIntersectionObserver from "@/config/hooks/useIntersectionObserver";

const SliderZoomIn = dynamic(() => import("@/components/Home/Content/SliderZoomIn"), { ssr: false });

import SubFooter from "@/Layouts/SubFooter";
// import ContactContent from "@/components/Home/Content/ContactContent";

// import ContactImage from "@/public/images/service/carousel-transportation-logistics.jpg";
import { useTranslation } from "react-i18next";
// import Link from "next/link";
// import { PATH } from "@/config/routes";
import { useSelector, useDispatch } from "react-redux";
import { setIndexOtherService, setIndexService } from "@/slices/serviceDuck/serviceReducer";

// import Image from "next/image";
const ContentStyled = styled(MUIBox)``;

const ImageStyled = styled.img`
   max-width: 100%;
   padding: 10px;
   width: 100%;
   transform: translateY(0px);
   transition: transform 8s;
`;

const removeAOSAttribute = (ref: React.MutableRefObject<any>, timeout: number) => {
   if (ref.current) {
      setTimeout(() => {
         ref.current.removeAttribute("data-aos");
         ref.current.removeAttribute("data-aos-duration");
         ref.current.removeAttribute("data-aos-once");
      }, timeout);
   }
};

const Service = () => {

   const indexRef = useRef(null);
   const otherIndexRef = useRef(null);

   const refImage1 = useRef(null);
   const refImage2 = useRef(null);
   const { t } = useTranslation();
   const dispatch = useDispatch();

   const currentIndex = useSelector((state: { service: { index: string } }) => state.service.index);
   // const currentOtherIndex = useSelector((state: { service: { otherIndex: string } }) => state.service.otherIndex);

   // useEffect(() => {
   //    console.log("son currentIndex", currentIndex);
   //    console.log("son currentOtherIndex", currentOtherIndex);
   // }, [currentIndex, currentOtherIndex]);

   const changeIndexService = (index) => {
      dispatch(setIndexService(index));
      dispatch(setIndexOtherService(-1));
   };

   // const changeIndexOtherService = (index) => {
   //    dispatch(setIndexOtherService(index));
   //    // dispatch(setIndexService(-1));
   // };

   const isIntersecting1 = useIntersectionObserver(refImage2, { threshold: 0.1 });
   const isIntersecting2 = useIntersectionObserver(refImage2, { threshold: 0.1 });

   useEffect(() => {
      AOS.init();
      indexRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      otherIndexRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }, []);

   useEffect(() => {
      isIntersecting1 && removeAOSAttribute(refImage1, 3500);
      isIntersecting2 && removeAOSAttribute(refImage2, 3500);

      const container1: HTMLElement = document.querySelector("#container-1");
      const container2: HTMLElement = document.querySelector("#container-2");

      const handleScroll = () => {
         if (window.innerWidth > 900) {
            if (refImage1.current) {
               if (
                  isIntersecting1 &&
                  refImage1.current.getBoundingClientRect().top < 0 &&
                  refImage1.current.clientHeight < container1.getBoundingClientRect().top + container1.clientHeight
               ) {
                  refImage1.current.style.transform = `translateY(${-refImage1.current.getBoundingClientRect().top}px)`;
               }
            }

            if (refImage2.current) {
               if (
                  isIntersecting2 &&
                  refImage2.current.getBoundingClientRect().top < 0 &&
                  refImage2.current.clientHeight < container2.getBoundingClientRect().top + container2.clientHeight
               ) {
                  refImage2.current.style.transform = `translateY(${-refImage2.current.getBoundingClientRect().top}px)`;
               }
            }
         } else {
            if (refImage1.current) refImage1.current.style.transform = "translateY(0px)";
            if (refImage2.current) refImage2.current.style.transform = "translateY(0px)";
         }
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, [isIntersecting1, isIntersecting2]);

   const listExpandData = [
      [
         {
            title: "Xem tranh",
            content:
               "Mình không có năng khiếu vẽ nhưng mình rất thích xem các tranh hội họa từ khắp nơi trên thế giới. Lúc mà mình ngắm tranh, có cảm giác như như mình đang đắm mình trong nghệ thuật vậy!",
         },
         {
            title: "Chơi nhạc",
            content:
               "Trong lúc rảnh rỗi. Mình thường chơi guitar để giải trí. Tuy mình không thể hát nhưng mình có thể đàn thuộc kiểu fingerstyle.",
         },
         {
            title: "Thể thao",
            content:
               "Mình rất thích chơi thể thao. Đặc biệt là môn bơi lội vì mỗi lần mình bơi, mình cảm thấy tinh thần của mình sảng khoái hơn rất nhiều",
         },
         {
            title: "Xem phim",
            content:
               "Mình rất thích xem phim đặc biệt là phim điện ảnh. Bởi vì các bộ phim đó sử dụng các kỹ xảo rất đẹp mắt và mình bị mê hoặc theo từng thước phim trong đó",
         },
         // {
         //    title: "Entrusted Import Service",
         //    content:
         //       "Hai Sam Company offers a professional entrusted import service, helping customers quickly and efficiently search for and import goods from across Vietnam and neighboring countries in the region. We provide two forms of import services to meet the diverse needs of our customers:",
         //    subContent: [
         //       {
         //          heading: "Importing based on available samples",
         //          content:
         //             "If you already have specific images and specifications of the products you need, simply send this information to Hai Sam. We will search for the exact products with the right specifications and prices. This method ensures that customers receive products that meet their specified requirements and standards.",
         //       },
         //       {
         //          heading: "Sourcing new products",
         //          content: [
         //             "For customers who do not have available samples or specific information about the products they need to import, Hai Sam Company will assist in sourcing and finding reputable wholesalers from China. We will leverage our extensive partner network and years of experience in the import sector to find new sources, ensuring quality and competitive pricing. Customers will be provided with detailed information about potential sources, allowing them to choose the most suitable products for their business needs.",
         //             "Hai Sam Company is committed to delivering absolute customer satisfaction and trust through high-quality, fast, and transparent entrusted import services. Let us be your reliable partner in all your goods import activities.",
         //          ],
         //       },
         //    ],
         // },
      ],
      [
         {
            title: "Freight Truck Rental Service",
            content:
               "Hai Sam Company offers professional freight truck rental services to meet all customer transportation needs. We have a diverse fleet of trucks with varying capacities and sizes, from small trucks to container trucks, suitable for all types of cargo, from small items to bulky goods. Our trucks are regularly maintained and equipped with modern monitoring systems, ensuring safety and efficiency throughout the transportation process. We provide flexible truck rental services, catering to all needs from local deliveries to inter-provincial and international transport. Customers can rent trucks by the hour, day, or month, depending on their requirements. Our drivers are experienced and knowledgeable about the routes, ensuring that your goods are transported quickly and efficiently.",
         },
         {
            title: "Loading and Unloading Services",
            content:
               "Hai Sam Company offers professional loading and unloading services to meet all your cargo handling needs. We utilize modern lifting equipment such as forklifts, cranes, and other support tools to handle goods safely and efficiently, minimizing the risk of damage. Using Hai Sam's loading and unloading services helps customers save costs compared to investing in their own labor and equipment, while also optimizing operational processes.",
         },
         {
            title: "Consolidated Shipping Services",
            content:
               "Hai Sam provides consolidated shipping services, offering a cost-effective and efficient solution for customers needing to send small quantities of goods. By consolidating cargo from multiple customers into a single shipment, transportation costs are shared, reducing expenses for each small shipment. We offer regular and continuous consolidated shipments to provinces nationwide, meeting customers' needs for quick and flexible transportation. Hai Sam is committed to ensuring the safety of your goods throughout the transportation process. We use modern vehicles and experienced drivers to protect your cargo from damage.",
         },
         {
            title: "Delivery Services",
            content:
               "Hai Sam provides professional, fast, and secure delivery services to meet all customer cargo transportation needs. With a skilled team and clear workflow processes, we are committed to delivering optimal delivery services that save time and costs for our customers. Hai Sam ensures timely and accurate delivery to the requested location. Your goods are carefully handled and transported safely using modern vehicles and experienced drivers, who strictly adhere to traffic safety regulations and protect the cargo.",
         },
         {
            title: "Customs Services",
            content:
               "As a customs broker, Hai Sam assists customers in efficiently and swiftly handling all customs procedures. With a team of experienced experts and in-depth knowledge of customs regulations, we are committed to providing optimal services that ensure smooth and legal clearance of goods. We handle customs procedures promptly, helping customers clear their goods quickly, saving time, and minimizing costs associated with delays.",
         },
      ],
   ];

   return (
      <>
         <SliderZoomIn />

         <ContentStyled>
            <MUIBox className="container mx-auto">
               <MUIGrid container sx={{ my: "4%" }}>
                  <MUIGrid item md={12} lg={6} xs={12}>
                     <MUITypography
                        variant="h1"
                        fontWeight={700}
                        lineHeight={"1em"}
                        letterSpacing={"-0.04em"}
                        className="word-holder"
                        sx={{ fontSize: { xs: "40px", sm: "66px", lg: "114px" } }}
                     >
                        <SplittingText>Sở thích</SplittingText>
                     </MUITypography>
                  </MUIGrid>
               </MUIGrid>
               {/* <MUITypography
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  fontSize="32px"
                  color={style.TEXT_COLOR_TITLE}
                  fontWeight="700"
                  fontFamily={FONT_FAMILY.MONTSERRAT}
                  paddingInline="10px"
               >
                  {t("Services")}
               </MUITypography> */}

               <MUIGrid container>
                  <MUIGrid item lg={6} md={6} sx={{ justifyContent: "center" }} id="container-1">
                     <ImageStyled
                        ref={refImage1}
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-once="true"
                        src="/images/about/cinema.jpg"
                        alt=""
                     />
                  </MUIGrid>

                  <MUIGrid
                     item
                     md={6}
                     xs={12}
                     sx={{
                        ".MuiCollapse-root": {
                           transition: "height 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        },
                        ".MuiBox-root .show-content": {
                           p: "4%",
                           borderBottom: "1px solid #ebebeb",
                           display: "flex",
                           "&:hover": {
                              cursor: "pointer",
                           },
                           svg: {
                              color: style.TEXT_COLOR_GENERAL,
                           },
                        },
                        span: {
                           fontFamily: FONT_FAMILY.MONTSERRAT,
                           fontWeight: "500",
                           color: style.TEXT_LIST_EXPAND_COLOR,
                           fontSize: "16px",
                           lineHeight: "28px",
                        },
                        ".list-title span": {
                           fontSize: "18px",
                           color: style.TEXT_COLOR_GENERAL,
                           fontWeight: "700",
                        },
                     }}
                  >
                     {listExpandData[0].map((item, index) => {
                        return (
                           <div ref={Number(currentIndex) === Number(index) ? indexRef : null} key={index}>
                              <MUIBox >
                                 <MUIBox className="show-content" onClick={() => changeIndexService(index)}>
                                    {/* <MUIListItemIcon>
                                    <InboxIcon />
                                 </MUIListItemIcon> */}
                                    <MUIListItemText className="list-title" primary={t(item.title)} />
                                    {Number(currentIndex) === Number(index) ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                                 </MUIBox>
                                 <MUICollapse in={Number(currentIndex) === Number(index)} timeout={800} unmountOnExit>
                                    <MUIList component="div" disablePadding>
                                       <MUIListItemText
                                          primary={t(item.content)}
                                          sx={{ px: "4%", pt: "4%", textAlign: "justify", lineHeight: "35px" }}
                                       />
                                       {/* {item.subContent && (
                                          <MUIBox
                                             sx={{
                                                "ol li": {
                                                   color: style.TEXT_COLOR_GENERAL,
                                                   fontSize: { xs: "16px", lg: "17px" },
                                                   fontFamily: FONT_FAMILY.MONTSERRAT,
                                                   mb: "20px",
                                                   "span:nth-of-type(1)": {
                                                      fontWeight: "bold",
                                                   },
                                                   "span:nth-of-type(2)": {
                                                      ml: "10px",
                                                      fontWeight: "500",
                                                      lineHeight: "35px",
                                                      fontFamily: FONT_FAMILY.MONTSERRAT,
                                                   },
                                                   ul: {
                                                      paddingInlineStart: "10px",
                                                   },
                                                   ol: {
                                                      m: "0",
                                                   },
                                                },
                                             }}
                                          >
                                             <ol>
                                                {item.subContent.map((item: any, index: number) => {
                                                   return (
                                                      <li key={index} style={{ textAlign: "justify" }}>
                                                         <span key={index}>{t(item.heading)}</span>:
                                                         {typeof item.content === "string" ? (
                                                            <span>{t(item.content)}</span>
                                                         ) : (
                                                            <ul>
                                                               {item.content.map((subItem: string, subIndex: number) => {
                                                                  return (
                                                                     <li key={subIndex}>
                                                                        <MUITypography
                                                                           sx={{
                                                                              color: style.TEXT_LIST_EXPAND_COLOR,
                                                                              fontSize: { xs: "16px", lg: "17px" },
                                                                              fontFamily: FONT_FAMILY.MONTSERRAT,
                                                                              fontWeight: "500",
                                                                              lineHeight: "35px",
                                                                           }}
                                                                        >
                                                                           {t(subItem)}
                                                                        </MUITypography>
                                                                     </li>
                                                                  );
                                                               })}
                                                            </ul>
                                                         )}
                                                      </li>
                                                   );
                                                })}
                                             </ol>
                                          </MUIBox>
                                       )} */}
                                    </MUIList>
                                    {/* <Link
                                       href={PATH.CONTACT}
                                       style={{
                                          width: "100%",
                                          display: "flex",
                                          justifyContent: "end",
                                       }}
                                    >
                                       <MUIButton variant="outlined" color="info" sx={{ m: "4% 2%" }}>
                                          {t("quote")}
                                       </MUIButton>
                                    </Link> */}
                                 </MUICollapse>
                              </MUIBox>
                           </div>
                        );
                     })}
                  </MUIGrid>
               </MUIGrid>
               {/* <MUIGrid container sx={{ mt: "4%" }}>
                  <MUIGrid item xs={12} md={6} px={"10px"}>
                     <MUITypography
                        fontSize="32px"
                        fontFamily={FONT_FAMILY.MONTSERRAT}
                        color={style.TEXT_COLOR_TITLE}
                        fontWeight="700"
                     >
                        {t("Other Services")}
                     </MUITypography>
                  </MUIGrid>
               </MUIGrid> */}

               {/* <MUIGrid container>
                  <MUIGrid
                     item
                     md={6}
                     xs={12}
                     sx={{
                        ".MuiBox-root .show-content": {
                           display: "flex",
                           p: "4%",
                           "&:hover": {
                              cursor: "pointer",
                           },
                           borderBottom: "1px solid #ebebeb",
                           svg: {
                              color: style.TEXT_COLOR_GENERAL,
                           },
                        },
                        span: {
                           fontFamily: FONT_FAMILY.MONTSERRAT,
                           fontWeight: "500",
                           color: style.TEXT_LIST_EXPAND_COLOR,
                           fontSize: "16px",
                           lineHeight: "28px",
                        },
                        ".list-title span": {
                           fontSize: "18px",
                           color: style.TEXT_COLOR_GENERAL,
                           fontWeight: "700",
                        },
                     }}
                  >
                     {listExpandData[1].map((item, index) => {
                        return (
                           <div ref={Number(currentOtherIndex) === Number(index)?  otherIndexRef : null} key={index}>
                              <MUIBox>
                                 <MUIBox className="show-content" onClick={() => changeIndexOtherService(index)}>
                                    <MUIListItemText className="list-title" primary={t(item.title)} />
                                    {Number(currentOtherIndex) === Number(index) ? (
                                       <RemoveRoundedIcon />
                                    ) : (
                                       <AddRoundedIcon />
                                    )}
                                 </MUIBox>
                                 <MUICollapse in={Number(currentOtherIndex) === Number(index)} timeout={800} unmountOnExit>
                                    <MUIList component="div" disablePadding>
                                       <MUIListItemText sx={{ p: "4%", textAlign: "justify" }} primary={t(item.content)} />
                                    </MUIList>
                                    <Link
                                       href={PATH.CONTACT}
                                       style={{
                                          width: "100%",
                                          display: "flex",
                                          justifyContent: "end",
                                       }}
                                    >
                                       <MUIButton variant="outlined" color="info" sx={{ mx: "4%" }}>
                                          {t("quote")}
                                       </MUIButton>
                                    </Link>
                                 </MUICollapse>
                              </MUIBox>
                           </div>
                        );
                     })}
                  </MUIGrid>
                  <MUIGrid
                     item
                     md={6}
                     lg={6}
                     xs={12}
                     // sx={{
                     //    justifyContent: "center",
                     // }}
                     id="container-2"
                  >
                     <ImageStyled
                        ref={refImage2}
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-once="true"
                        src="/images/basic/aerial-top-view-container-cargo-ship-with-contrail-ocean-ship-carrying-container.jpg"
                        alt=""
                     />
                  </MUIGrid>
               </MUIGrid>
               <StaffContent /> */}
            </MUIBox>
            {/* <ContactContent bgImage={ContactImage} /> */}
            <SubFooter />
         </ContentStyled>
      </>
   );
};

export default Service;
