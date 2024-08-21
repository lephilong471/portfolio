"use client";

import { MUIBox, MUITypography, MUILink, MUITextField } from "../MUI";
import { headerData, style } from "@/config";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const Header = () => {
   const path = usePathname();

   const [isSearch, setIsSearch] = useState<boolean>(false);

   const checkRoute = (path: string, url: string) => {
      return path === url;
   };

   const handleSearch = () => {
      setIsSearch(true);
   };
   return (
      <MUIBox
         sx={{
            px: "10px",
         }}
         className="container mx-auto"
      >
         <MUIBox
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               // px:'50px',
               // borderBottom: '1px solid #56676D',
               borderBottom: "1.5px solid rgba(0,0,0,.12)",
            }}
         >
            <MUITypography sx={{ fontFamily: "Jost", fontWeight: "500", fontSize: "24px" }}>
               <MUILink
                  sx={{
                     textDecoration: "none",
                     border: "none",
                     color: style.TEXT_COLOR_NORMAL,
                  }}
                  href="/"
               >
                  HAISAM.
               </MUILink>
            </MUITypography>
            <MUIBox
               sx={{
                  display: "flex",
                  justifyContent: "space-around",
               }}
            >
               {headerData.map((item, index) => {
                  return (
                     <MUIBox
                        sx={{
                           px: "16px",
                           fontWeight: "500",
                           height: "90px",
                           display: "flex",
                           alignItems: "center",
                           fontWeigth: "bold",
                           position: "relative",
                           ".MuiLink-root:before": {
                              content: '""',
                              height: checkRoute(item.link, path) ? "calc(100% + 15px) !important" : "0px",
                              backgroundColor: checkRoute(item.link, path) ? "black !important" : "",
                              clipPath: checkRoute(item.link, path)
                                 ? "polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0)"
                                 : "",
                              position: "absolute",
                              top: "0px",
                              right: "0px",
                              left: "0px",
                           },

                           ":hover": {
                              cursor: "pointer",
                              px: "16px",
                              ".MuiLink-root::before": {
                                 content: '""',
                                 width: "100%",
                                 height: "calc(100% + 15px) !important",
                                 backgroundColor: checkRoute(item.link, path)
                                    ? `${style.HEADER_ACTIVE_COLOR}`
                                    : `${style.HEADER_HOVER_COLOR}`,
                                 clipPath: "polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0)",
                                 transition: "height 0.3s",
                              },
                           },
                        }}
                        className="unfocus"
                        key={index}
                     >
                        <MUILink
                           sx={{
                              display: isSearch ? "none" : "flex",
                              alignItems: "center",
                              color: checkRoute(item.link, path) ? "#ffffff" : style.TEXT_COLOR_NORMAL,
                           }}
                           underline="none"
                           href={item.link}
                           className="active"
                        >
                           <MUITypography
                              sx={{
                                 fontFamily: "Roboto Mono",
                                 fontSize: "12px",
                                 fontWeight: "500",
                                 zIndex: "10",
                              }}
                           >
                              {item.name}
                           </MUITypography>
                        </MUILink>
                     </MUIBox>
                  );
               })}
               <MUIBox
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     ".MuiSvgIcon-root:hover": {
                        cursor: "pointer",
                     },
                     ".MuiInputBase-root:before, .MuiInputBase-root:after": {
                        display: "none",
                     },
                     ".MuiInputBase-input": {
                        textAlign: "right",
                     },
                  }}
               >
                  {isSearch ? (
                     <>
                        <MUITextField
                           sx={{
                              width: "160px",
                              textAlign: "right",
                           }}
                           variant="standard"
                           placeholder="nhập thông tin"
                        />
                        <CloseIcon sx={{ mx: "5px" }} onClick={() => setIsSearch(false)} />
                     </>
                  ) : (
                     <SearchIcon onClick={handleSearch} />
                  )}
               </MUIBox>
            </MUIBox>
         </MUIBox>
      </MUIBox>
   );
};

export default Header;
