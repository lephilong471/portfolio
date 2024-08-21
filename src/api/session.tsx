import cookie from "js-cookie";
import { JWT, LANG } from "@/config";

export const setCookie = (key: string, value: string, expireDay = 365) => {
   if (typeof window !== "undefined") {
      cookie.set(key, value, {
         expires: expireDay,
         path: "/",
      });
   }
};

export const removeCookie = (key: string) => {
   if (typeof window !== "undefined") {
      cookie.remove(key);
   }
};

export const removeAuthorizedUser = () => {
   removeCookie(JWT);
};

export const addAuthorizedUser = (token: string) => {
   setCookie(JWT, token);
};

export const getAuthorizedUser = () => {
   return cookie.get(JWT) || "";
};

export const changeLocale = (langKey: string) => {
   setCookie(LANG, langKey, 365);
};

export const getCookie = (key: any, req?: any) => {
   return typeof window !== "undefined" ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key: any) => {
   return cookie.get(key);
};

const getCookieFromServer = (key: any, req: { headers: { cookie: string } }) => {
   if (!req?.headers?.cookie) {
      return undefined;
   }
   const rawCookie = req.headers.cookie.split(";").find((c: string) => c.trim().startsWith(`${key}=`));
   if (!rawCookie) {
      return undefined;
   }
   return rawCookie.split("=")[1];
};
