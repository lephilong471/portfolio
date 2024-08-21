import { JWT } from "@/config"; //
import { isNil, isString } from "lodash-es";

import { getCookie } from "./session";

export const requestHeaders = ({ withToken }: { withToken: boolean | string }) => {
   let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
   };
   if (withToken) {
      header = {
         ...header,
         ...authHeader(withToken),
      };
   }
   return header;
};

const authHeader = (withToken: string | boolean) => {
   const token = (typeof withToken === "string" && withToken) || getCookie(JWT);

   if (token) {
      return {
         Authorization: "Bearer " + token,
      };
   } else {
      return {};
   }
};
export const parseObjToQuery = ({
   params = {},
   startWith = "?",
}: {
   params: { [x: string]: string };
   startWith?: string;
}) => {
   if (!params) return "";
   let keys = Object.keys(params).filter(
      (key) => !isNil(params[key]) && !(isString(params[key]) && params[key].trim().length === 0)
   );

   return startWith + keys.map((key) => `${key.trim()}=${params[key].trim()}`);
};

export default authHeader;
