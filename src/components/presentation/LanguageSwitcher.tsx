"use client";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "@/slices/locale/localeReducer";
import { MUIBox } from "../MUI";
import {  Dropdown, Space } from "antd";
import InlineSVG from "react-inlinesvg";

export default function LanguageSwitcher() {
   const dispatch = useDispatch();
   const currentLanguage = useSelector(
      (state: { language: { currentLanguage: string } }) => state.language.currentLanguage
   );
   const { i18n, t } = useTranslation();

   const changeLanguage = (lang) => {
      dispatch(setLanguage(lang));
      i18n.changeLanguage(lang);
   };

   const items = [
      {
         label: (
            <span onClick={() => changeLanguage("vi")}>
               <InlineSVG width={"20px"} src="/images/locale/VN.svg" /> {t("vietnamese")}
            </span>
         ),
         key: "1",
      },
      {
         label: (
            <span onClick={() => changeLanguage("en")}>
               <InlineSVG width={"20px"} src="/images/locale/US.svg" /> {t("english")}
            </span>
         ),
         key: "2",
      },
   ];
   const menuProps = {
      items,
   };

   return (
      <>
         <MUIBox>
            <Dropdown menu={menuProps}>
               <MUIBox sx={{ mx: 2 }}>
                  {currentLanguage === "en" ? (
                     <Space>
                        <InlineSVG width={"20px"} src="/images/locale/US.svg" />
                        {/* {t("english")} */}
                     </Space>
                  ) : (
                     <Space>
                        <InlineSVG width={"20px"} src="/images/locale/VN.svg" />
                        {/* {t("vietnamese")} */}
                     </Space>
                  )}
               </MUIBox>
            </Dropdown>
         </MUIBox>
      </>
   );
}
