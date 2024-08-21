import { first, isNil, isNumber, isObject, isString, isUndefined } from "lodash-es";
import { BASE_URL_IMG, BASE_URL_IMG_WITHOUT_TOKEN } from "@/config";

const getString = (obj, propertyPath = undefined, defaultValue = undefined) => {
   try {
      // propertyPath phải là string hoặc undefined
      if (!isUndefined(propertyPath) && !isString(propertyPath)) {
         return undefined;
      }
      if (!isNil(propertyPath)) {
         if (isNil(obj)) {
            return defaultValue;
         }
         if (isObject(obj)) {
            var properties = propertyPath.split(".");
            // tìm property value từ property path
            let result = properties.reduce((prev, curr) => prev && prev[curr], obj);
            return isString(result) ? result : defaultValue;
         }
      } else if (isString(obj)) {
         return obj;
      }
   } catch (err) {}
   return defaultValue;
};

export const firstImage = (strImages, width) => {
   if (!strImages) return "";
   let imgUrls = first(getString(strImages, undefined, "").split("|"));
   return `${BASE_URL_IMG}${isNumber(width) ? `${width}/` : ""}${imgUrls}`;
};

// export const firstImageWithoutToken = (strImages, width) => {
//    let imgUrls = first(getString(strImages, undefined, "").split("|"));
//    return `${BASE_URL_IMG_WITHOUT_TOKEN}${isNumber(width) ? `${width}/` : ""}${imgUrls}`;
// };

export const firstImageWithoutToken = (strImages, width) => {
   let imgUrls = first(getString(strImages, undefined, "").split("|"));
   // console.log("Image URL before processing:", imgUrls);
   const finalUrl = `${BASE_URL_IMG_WITHOUT_TOKEN}${isNumber(width) ? `${width}/` : ""}${imgUrls}`;
   // console.log("Final image URL:", finalUrl);
   return finalUrl;
};

export { getString };
