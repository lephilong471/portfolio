"use client";
import React, { useState, useEffect } from "react";
import {
   MUIBox,
   MUITypography,
   MUIGrid,
   MUICard,
   MUICardActions,
   MUICardContent,
   MUICardMedia,
   MUILink,
} from "@/components/MUI";
import Popper from "@mui/material/Popper";
import styled from "styled-components";
import { style, FONT_FAMILY, BASE_URL_IMG_WITHOUT_TOKEN } from "@/config";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { getListNews } from "@/api/auth/actions";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { PATH } from "@/config/routes";
import { useRouter } from "next/navigation";

const ContentStyled = styled(MUIBox)`
   .MuiTypography-root {
      font-family: ${FONT_FAMILY.MONTSERRAT};
      font-weight: 400;
      color: ${style.TEXT_LIST_EXPAND_COLOR};
   }

   .MuiPaper-root {
      box-shadow: none;
      border-radius: 0;
      padding-inline: 14px;
      margin-bottom: 34px;
   }

   .MuiCardContent-root {
      padding-inline: 1.2em;
      padding-top: 1.8em;
      .card-title {
         color: ${style.TEXT_COLOR_TITLE} !important;
         font-weight: bold;
         font-size: 22px;
         margin: 0;
      }

      .card-content {
         font-size: 13px;
         line-height: 25px;
         font-weight: 500;
         padding-top: 12px;
      }

      .card-sub-title {
         display: flex;
         // flex: start;
         flex-wrap: wrap;
         margin: 6px 0;

         font-size: 11px;
         font-weight: 700;
         text-transform: uppercase;
         font-family: ${FONT_FAMILY.MONTSERRAT};
         color: ${style.TEXT_LIST_EXPAND_COLOR};

         .created {
            display: flex;
            align-items: center;
            margin-inline: 12px;
            &:hover {
               cursor: pointer;
            }
         }

         .type {
            border: 1px solid rgba(0, 0, 0, 0.12);
            padding: 2px 12px;
            border-radius: 16px;
            font-size: inherit;
            font-weight: inherit;
            &:hover {
               cursor: pointer;
            }
         }

         .share {
            display: flex;
            align-items: center;
            &:hover {
               cursor: default;
            }
         }

         svg {
            margin-right: 6px;
            font-size: 1.2em;
            color: inherit;
         }
      }
   }
`;

// const displayContent = (text: string) => {
//    const textArr: Array<string> = text.split(" ");
//    let result: string = "";

//    if (textArr.length <= 22) return text;

//    for (let i = 0; i < 22; i++) {
//       if (i === 22 - 1) result += `${textArr[i]}...`;
//       else result += `${textArr[i]} `;
//    }
//    return result;
// };

const displayContent = (html: string, wordLimit: number = 22) => {
   const parser = new DOMParser();
   const doc = parser.parseFromString(html, "text/html");

   // Remove all images
   const images = doc.querySelectorAll("img");
   images.forEach((img) => img.remove());

   // Remove excessive spaces
   doc.body.innerHTML = doc.body.innerHTML.replace(/(&nbsp;)+/g, " ");

   // Set font size to 16px
   doc.body.style.fontSize = "16px";

   // Get the text content and split by spaces
   const textContent = doc.body.textContent || "";
   const textArr = textContent.split(" ");

   // If the text length is within the word limit, return as it is
   if (textArr.length <= wordLimit) return doc.body.innerHTML;

   // Truncate the text to the specified word limit
   const truncatedText = textArr.slice(0, wordLimit).join(" ");

   return `${truncatedText}...`;
};
const About = () => {
   const [listNews, setListNews] = useState([]);
   const router = useRouter();
   const [currentPage, setCurrentPage] = useState(1);
   const { t } = useTranslation();
   useEffect(() => {
      getListNews().then((res: { content: any }) => {
         setListNews(res?.content);
      });
   }, []);
   const pageSize = 6;
   const totalPages = Math.ceil(listNews.length / pageSize);

   const paginatedNews = paginate(listNews, pageSize, currentPage);

   function paginate(list, pageSize, currentPage) {
      const startIndex = (currentPage - 1) * pageSize;
      return list.slice(startIndex, startIndex + pageSize);
   }

   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

   const [open, setOpen] = useState(false);
   const formatDate = (isoDate) => {
      const date = new Date(isoDate);
      const options: Intl.DateTimeFormatOptions = {
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
   };
   const handlePopperOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
   };

   const handlePopperClose = () => {
      setAnchorEl(null);
      setOpen((previousOpen) => !previousOpen);
   };

   return (
      <ContentStyled>
         <MUIBox className="container mx-auto">
            <MUIBox
               sx={{
                  textAlign: "center",
                  pt: { lg: "70px", md: "30px" },
               }}
            >
               <MUITypography
                  sx={{
                     fontSize: { lg: "98px", md: "80px", xs: "38px" },
                     fontWeight: "bold !important",
                     color: `${style.TEXT_COLOR_TITLE} !important`,
                     mb: "1.4em",
                     mt: { lg: "1em", md: "1.2em", xs: "1.4em" },
                  }}
               >
                  {t("News")}
               </MUITypography>
            </MUIBox>

            {listNews.length === 0 ? (
               <MUIBox sx={{ textAlign: "center", height: "30vh" }}>{t("no_data")}</MUIBox>
            ) : (
               <MUIGrid container>
                  {paginatedNews.map((item: any, index: number) => {
                     return (
                        <MUIGrid
                           item
                           md={6}
                           lg={4}
                           xs={12}
                           key={index}
                           sx={{
                              display: "flex",
                              justifyContent: "center",
                           }}
                        >
                           <MUICard>
                              <MUICardMedia
                                 sx={{ maxHeight: "262px" }}
                                 component="img"
                                 //   alt="green iguana"
                                 //   height="140"
                                 image={`${BASE_URL_IMG_WITHOUT_TOKEN + item.imageTitle}`}
                              />
                              <MUICardContent>
                                 <MUITypography
                                    gutterBottom
                                    className="card-title"
                                    sx={{
                                       whiteSpace: "nowrap",
                                       overflow: "hidden",
                                       textOverflow: "ellipsis",
                                    }}
                                 >
                                    {item.title}
                                 </MUITypography>
                                 <MUIBox className="card-sub-title">
                                    <MUITypography className="type">{item.newType}</MUITypography>

                                    <MUIBox className="created">
                                       <CalendarTodayOutlinedIcon /> {formatDate(item.createdDate)}
                                    </MUIBox>
                                    <MUIBox
                                       aria-describedby={`${index}`}
                                       aria-owns={open ? `mouse-over-popper-${index}` : undefined}
                                       aria-haspopup="true"
                                       onMouseEnter={handlePopperOpen}
                                       className="share"
                                    >
                                       <ShareOutlinedIcon />
                                       Share
                                    </MUIBox>

                                    <Popper
                                       id={`mouse-over-popper-${index}`}
                                       open={open}
                                       anchorEl={anchorEl}
                                       onMouseLeave={handlePopperClose}
                                       sx={{
                                          marginTop: "50px",
                                          maxHeight: 200,
                                       }}
                                    >
                                       <MUIBox
                                          sx={{
                                             position: "absolute",
                                             top: "10px",
                                             right: "-70px",
                                             filter: open ? "blur(0px)" : "blur(15px)",
                                             background: "#ffffff",
                                             borderTop: "1px solid #eee",
                                             transition: "filter 0.15s ease-out",
                                             "&:after, &:before": {
                                                borderLeft: "8px solid transparent",
                                                borderRight: "8px solid transparent",
                                                borderBottom: "9px solid white",
                                                top: "-8px",
                                                content: '""',
                                                left: "50%",
                                                marginLeft: "-9px",
                                                position: "absolute",
                                             },

                                             /* Styling for second triangle (border) */

                                             "&:before": {
                                                borderLeft: "9px solid transparent",
                                                borderRight: "8px solid transparent",
                                                borderBottom: "10px solid #eee",
                                                // borderBottomColor: 'inherit', /* Can't be included in the shorthand to work */
                                                top: "-10px",
                                                marginLeft: "-10px",
                                             },
                                             ".MuiLink-root": {
                                                display: "flex",
                                                alignItems: "center",
                                                p: "10px 16px",
                                                border: "1px solid #eee",
                                                borderTop: "0px",
                                                color: style.TEXT_LIST_EXPAND_COLOR,

                                                ".MuiTypography-root": {
                                                   color: "inherit",
                                                   fontFamily: FONT_FAMILY.MONTSERRAT,
                                                   fontWeight: "700",
                                                   fontSize: "11px",
                                                   textTransform: "uppercase",
                                                },
                                                svg: {
                                                   fontSize: ".875em",
                                                   width: "10px",
                                                   height: "10px",
                                                   mr: "8px",
                                                },
                                             },
                                          }}
                                       >
                                          <MUILink
                                             href="#"
                                             sx={{
                                                "&:hover": {
                                                   color: `${style.FACEBOOK_COLOR} !important`,
                                                },
                                             }}
                                          >
                                             <FaFacebookF />
                                             <MUITypography>Facebook</MUITypography>
                                          </MUILink>

                                          <MUILink
                                             href="#"
                                             sx={{
                                                "&:hover": {
                                                   color: `${style.TWITTER_COLOR} !important`,
                                                },
                                             }}
                                          >
                                             <FaTwitter />
                                             <MUITypography>Twitter</MUITypography>
                                          </MUILink>

                                          <MUILink
                                             href="#"
                                             sx={{
                                                "&:hover": {
                                                   color: `${style.PINTEREST_COLOR} !important`,
                                                },
                                             }}
                                          >
                                             <FaPinterestP />
                                             <MUITypography>Pinterest</MUITypography>
                                          </MUILink>

                                          <MUILink
                                             href="#"
                                             sx={{
                                                "&:hover": {
                                                   color: `${style.EMAIL_COLOR} !important`,
                                                },
                                             }}
                                          >
                                             <MdOutlineEmail />
                                             <MUITypography>Email</MUITypography>
                                          </MUILink>
                                       </MUIBox>
                                    </Popper>
                                 </MUIBox>
                                 <MUITypography className="card-content">
                                    <div dangerouslySetInnerHTML={{ __html: displayContent(item.content) }} />
                                 </MUITypography>
                              </MUICardContent>
                              <MUICardActions>
                                 <MUILink></MUILink>
                                 <MUIBox
                                    sx={{
                                       borderBottom: "3px solid rgba(0, 0, 0, 0.07)",
                                       mx: "4%",
                                       "&:hover": {
                                          paddingInline: "15px",
                                          transition: "all 0.15s ease-in-out",
                                       },
                                    }}
                                 >
                                    <MUILink
                                       // href="#"
                                       onClick={() => {
                                          router.replace(PATH.NEW_DETAIL.replace("[id]", item.id));
                                       }}
                                       sx={{
                                          color: `${style.TEXT_LIST_EXPAND_COLOR} !important`,
                                          fontWeight: "600 !important",
                                          fontSize: "11px",
                                          textTransform: "uppercase",
                                          cursor: "pointer",
                                       }}
                                    >
                                       {t("Read more")}
                                    </MUILink>
                                 </MUIBox>
                              </MUICardActions>
                           </MUICard>
                        </MUIGrid>
                     );
                  })}
               </MUIGrid>
            )}

            {currentPage != totalPages && totalPages != 0 && (
               <MUIBox sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "20px" }}>
                  <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                     <LeftOutlined />
                  </Button>
                  <MUITypography sx={{ mx: 1 }}>
                     {currentPage} / {totalPages}
                  </MUITypography>
                  <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                     <RightOutlined />
                  </Button>
               </MUIBox>
            )}
         </MUIBox>
      </ContentStyled>
   );
};

export default About;
