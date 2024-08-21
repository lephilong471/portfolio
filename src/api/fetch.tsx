import { API_URL } from "@/config";
import { requestHeaders } from "./index";
import { getAuthorizedUser } from "./session";

export type methodApi = "GET" | "POST" | "PUT" | "DELETE";
export default function FETCH({
   path,
   method = "GET",
   headers = {},
   body,
   withToken = true,
   params = {},
   uploadFile = false,
}: {
   path: string;
   method: methodApi;
   headers?: { [x: string]: string };
   body?: any;
   withToken?: boolean | string;
   params?: { [x: string]: string };
   uploadFile?: boolean;
}) {
   return new Promise(function (resolve, reject) {
      startFetch(path, method, headers, body, withToken, params, uploadFile)
         .then((response) => {
            resolve(response);
         })
         .catch((error) => reject(error));
   });
}

function startFetch(
   path: string,
   method: string,
   headers: { [x: string]: string },
   body: BodyInit | null | undefined,
   withToken: string | boolean,
   params: { [x: string]: string | { toString: () => string } },
   uploadFile: boolean
) {
   return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
         return reject({
            message: "requestApiTimeout",
            localizeMessage: "requestApiTimeout",
         });
      }, 30000);
      let paramsString = "";
      Object.keys(params).map((m, i) => {
         if (params[m]?.toString()) paramsString += (i === 0 ? "?" : "&") + m + "=" + params[m]?.toString();
      });
      let fetchURL = API_URL + path + paramsString;
      let bodyRequest = body || body;
      let headersResponse = {};

      let httpResponseCode = 200;
      fetch(fetchURL, {
         method,
         headers: uploadFile
            ? {
                 Authorization: `Bearer ${getAuthorizedUser()}`,
              }
            : requestHeaders({ withToken }),
         body: uploadFile ? body : JSON.stringify(bodyRequest),
      })
         .then((response) => {
            clearTimeout(timeout);
            if (!response) {
               return false;
            }

            const { status } = response;
            headersResponse = getHeaders(response);

            httpResponseCode = status;

            if (httpResponseCode === 204) {
               // 204 return nothing
               return true;
            }

            return response.json();
         })
         .then((responseJson) => {
            if (httpResponseCode > 300) {
               console.log(
                  {
                     ...headers,
                  }.Authorization,
                  "url: " + fetchURL,
                  body,
                  responseJson
               );
            }
            handleResponse({
               responseJson: { content: responseJson, headers: headersResponse },
               httpResponseCode,
               onFullfill: resolve,
               onReject: reject,
            });
         })
         .catch((error) => {
            handleResponse({
               error,
               httpResponseCode,
               onFullfill: resolve,
               onReject: reject,
            });
            clearTimeout(timeout);
            reject(error);
         });
   });
}

function handleResponse({
   responseJson,
   httpResponseCode,
   onFullfill = (response: any) => Promise.resolve(response),
   onReject = (error: any) => Promise.reject(error),
}: any) {
   const localizeMessage = responseJson?.content?.message || "";

   switch (httpResponseCode) {
      case 200:
      case 201:
      case 204: {
         //do some thing
         onFullfill(responseJson);
         break;
      }
      case 400:
         onReject({
            status: httpResponseCode,
            message: responseJson?.message || "",
            localizeMessage: localizeMessage,
         });
         break;
      case 401:
         // store.dispatch(logOutUser());
         onReject({
            status: httpResponseCode,
            message: responseJson?.message || "",
            localizeMessage: localizeMessage,
         });
         break;
      case 403: {
         onReject({
            status: httpResponseCode,
            message: responseJson?.message || "",
            localizeMessage: localizeMessage,
         });
         break;
      }
      case 404: {
         onReject({
            status: httpResponseCode,
            message: responseJson?.message || "",
            localizeMessage: localizeMessage,
         });
         break;
      }
      case 500: {
         //do some thing
         onReject({
            status: httpResponseCode,
            message: responseJson?.message || "",
            localizeMessage: localizeMessage,
         });

         break;
      }
      default: {
         onReject({
            status: httpResponseCode,
            message: responseJson?.message || "",
            localizeMessage: localizeMessage,
         });
         break;
      }
   }
}

export const getHeaders = (res: Response) => {
   let headers: Record<string, any> = {};
   res.headers.forEach((value, key) => {
      headers[key] = value;
   });
   return headers;
};
