"use client";

// import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/state/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function StoreProvider({ children }) {
   // const storeRef = useRef<ReturnType<typeof makeStore>>();
   // if (!storeRef.current) {
   //    storeRef.current = makeStore();
   // }

   return (
      // <Provider store={storeRef.current}>
      //    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      // </Provider>
      <Provider store={makeStore}>
         <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </Provider>
   );
}
